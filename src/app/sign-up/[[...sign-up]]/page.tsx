// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Join us and start your journey today
          </p>
        </div>

        {/* Clerk Sign Up Component Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <SignUp 
          redirectUrl="/auth/callback"
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-purple-600 hover:bg-purple-700 text-sm normal-case",
                card: "shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: 
                  "border-gray-300 hover:bg-gray-50",
                formFieldInput: 
                  "border-gray-300 focus:border-purple-500 focus:ring-purple-500",
                footerActionLink: 
                  "text-purple-600 hover:text-purple-700"
              }
            }}
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link 
              href="/sign-in" 
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}