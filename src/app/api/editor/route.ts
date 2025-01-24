import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { exec, ExecException } from "child_process";

// Function to sanitize Python error message
const sanitizeError = (stderr: string): string => {
  // Remove file paths and system-specific information
  return stderr
    .replace(/(File ".*?")/g, "[FILE PATH]")
    .replace(/(in <module>)/g, "[MODULE]")
    .replace(/(at line \d+)/g, "[LINE NUMBER]");
};

const executePythonCode = (filePath: string): Promise<{ stdout: string, stderr: string }> => {
  return new Promise((resolve, reject) => {
    exec(`python3 ${filePath}`, (error: ExecException | null, stdout: string, stderr: string) => {
      if (error || stderr) {
        // Sanitize the stderr to remove any sensitive information
        const sanitizedError = sanitizeError(stderr);
        reject({ stdout, stderr: sanitizedError });
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
};

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();
    console.log("Code Received:- ", code);

    const filePath = path.join(process.cwd(), "temp_code.py");

    // Write code to a temp file
    fs.writeFileSync(filePath, code);

    // Run the Python script
    const result = await executePythonCode(filePath);

    console.log("Answer is:- ", result.stdout);
    return NextResponse.json({
      message: "Task completed successfully",
      output: result.stdout,
      error: result.stderr,  // Include sanitized stderr for detailed Python errors
      status: 200,
    });

  } catch (error: unknown) {
    // TypeScript knows error is of type unknown, so we check if it's an instance of Error
    if (error instanceof Error) {
      console.error("Error:", error.message);
      return NextResponse.json({
        message: "Python execution failed",
        error: error.message || "An unknown error occurred",  // Use the error message
        status: 500,
      });
    }
    
    console.error("Unexpected error:", error);
    return NextResponse.json({
      message: "Python execution failed",
      error: "An unknown error occurred",
      status: 500,
    });
  }
}
