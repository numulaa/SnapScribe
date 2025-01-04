import Image from "next/image";
import { SignupForm } from "./components/SignupForm";

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <span className="flex items-center gap-2 self-center font-medium">
          <Image
            src="/logo.png"
            alt="SnapScribe Logo"
            width={144}
            height={48}
          />
        </span>
        <SignupForm />
      </div>
    </div>
  );
}
