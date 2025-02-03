import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";

// Define the response type structure from Judge0
interface Judge0Response {
  status: {
    id: number;
    description: string;
  };
  stdout: string;
  stderr: string;
  token: string;
}


const JUDGE0_API_URL = process.env.JUDGE0_API_URI;
const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const { code, language } = await req.json();

    // Map language to Judge0 language ID
    const languageMap: { [key: string]: number } = {
      python: 71,       // Python 3
      javascript: 63,   // JavaScript (Node.js)
      cpp: 54,         // C++
      c: 50,           // C
      java: 62,        // Java
    };

    const languageId = languageMap[language];

    if (!languageId) {
      return new NextResponse(
        JSON.stringify({
          message: "Unsupported language",
          error: "The selected language is not supported",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Step 1: Send Code to Judge0
    const submissionResponse = await axios.post(
      `${JUDGE0_API_URL}/submissions`,
      {
        source_code: code,
        language_id: languageId,
        stdin: "", // You can add custom input if needed
      },
      {
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": JUDGE0_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const { token }: Judge0Response = submissionResponse.data;

    // Step 2: Poll Judge0 for execution result (Limit retries to prevent infinite loop)
    let outputResponse: AxiosResponse<Judge0Response> | undefined;
let attempts = 0;
const maxAttempts = 10;

while (attempts < maxAttempts) {
  outputResponse = await axios.get(`${JUDGE0_API_URL}/submissions/${token}`, {
    headers: {
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      "x-rapidapi-key": JUDGE0_API_KEY,
    },
  });

  // Ensure status is defined and check its id
  const status = outputResponse?.data?.status;
  if (status && status.id >= 3) {
    // Execution is complete
    break;
  }

  attempts++;
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 sec before retrying
}
    // If max attempts are reached, return an error
    if (attempts === maxAttempts) {
      return NextResponse.json({
        message: "Execution timeout",
        error: "Judge0 took too long to respond",
        status: 500,
      });
    }

    // Ensure outputResponse is defined before accessing its properties
    if (!outputResponse?.data) {
      return NextResponse.json({
        message: "Execution failed",
        error: "No data returned from Judge0",
        status: 500,
      });
    }

    // Step 3: Return Output
    return NextResponse.json({
      message: "Execution completed",
      output: outputResponse.data.stdout || outputResponse.data.stderr || "No output",
      status: outputResponse.data.status.description,
    });

  } catch (error) {
    console.error("Error executing code:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Code execution failed",
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}