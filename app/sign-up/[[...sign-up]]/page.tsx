import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-12">
      {/* Back to home */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to home
      </Link>

      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent shadow-glow flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xl">V</span>
        </div>
        <span className="text-xl font-bold text-foreground">VisaGuard</span>
      </div>

      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-card border border-border shadow-xl rounded-2xl",
            headerTitle: "text-foreground",
            headerSubtitle: "text-muted-foreground",
            socialButtonsBlockButton: "bg-muted border-border hover:bg-muted/80",
            socialButtonsBlockButtonText: "text-foreground",
            formFieldLabel: "text-foreground",
            formFieldInput: "bg-background border-border text-foreground",
            formButtonPrimary: "bg-primary hover:bg-accent text-primary-foreground",
            footerActionLink: "text-primary hover:text-accent",
            dividerLine: "bg-border",
            dividerText: "text-muted-foreground",
          },
        }}
        fallbackRedirectUrl="/"
        signInUrl="/sign-in"
      />
    </div>
  );
}
