import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
