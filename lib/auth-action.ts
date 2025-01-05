"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const ValidateLoginForm = () => {
  const Schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string(),
  });
};

export async function login(obj: any) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(obj);

  if (error) {
    console.log("Login error", error.message);
    // redirect("/error");
    return error.message;
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(obj: any) {
  const supabase = await createClient();

  const { error, data } = await supabase.auth.signUp(obj);

  if (error) {
    redirect("/error");
  }

  // revalidatePath("/", "layout");
  // redirect("/");
  return { error, data };
}

export async function logout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("error logging out", error.message);
    return error.message;
  }
  revalidatePath("/", "layout");
  redirect("/");
}

export async function loginWithGoogle() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: "http://localhost:3000/api/auth/callback",
    },
  });
  if (error) {
    console.error("Error logging in", error.message);
    return error.message;
  }
  if (data.url) {
    redirect(data.url);
  }
}
