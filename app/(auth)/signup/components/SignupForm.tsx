"use client";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { signup } from "@/lib/auth-action";
import LoginWithGoogle from "@/components/LoginWithGoogle";

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const clientSignup = async (formData: FormData) => {
    const formdata = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    setIsLoading(true);
    const { error, data } = await signup(formdata);
    if (data) {
      toast.success("Sucessfully signup, check your email to confirm");
      setIsLoading(false);
    }
    setIsLoading(false);
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form action={clientSignup} className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input name="password" id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Spinner /> : "Create account"}
          </Button>
        </div>
      </form>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
      <LoginWithGoogle />
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </div>
  );
}
