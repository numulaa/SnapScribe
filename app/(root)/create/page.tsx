import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import CheckData from "@/components/CreatePage/CreateForm";
import CreateForm from "@/components/CreatePage/CreateForm";

export default async function CreatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <section className="section_container flex flex-col items-center justify-center !min-h-[90vh]">
      <div className="md:w-6/12 min-h-[50vh]">
        <CreateForm />
      </div>
    </section>
  );
}
