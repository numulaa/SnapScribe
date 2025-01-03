import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import { createClient } from "@/utils/supabase/client";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className="font-work-sans">
      <Navbar user={session?.user} />
      {children}
      <Footer />
    </main>
  );
}
