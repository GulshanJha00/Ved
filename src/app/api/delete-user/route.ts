import { NextRequest, NextResponse } from "next/server";
import { Clerk } from "@clerk/clerk-sdk-node";

const clerk = Clerk({ apiKey: process.env.CLERK_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { clerkId } = await req.json();

    if (!clerkId) {
      return NextResponse.json({ error: "clerkId missing" }, { status: 400 });
    }

    await clerk.users.deleteUser(clerkId);
    return NextResponse.json({ message: "User deleted from Clerk" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
