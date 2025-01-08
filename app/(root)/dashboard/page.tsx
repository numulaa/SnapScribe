import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import CreateForm from "@/components/CreatePage/CreateForm";
import StatsCard from "@/components/DashboardPage/StatsCard";
import SnapScribeCreditsCard from "@/components/DashboardPage/SnapScribeCreditsCard";
import QuickUploadCard from "@/components/DashboardPage/QuickUploadCard";
import RecentSnapshotCard from "@/components/DashboardPage/RecentSnapshotCard";

export default async function CreatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Welcome back, Nurul Mukhlisa</h1>
      </section>
      <section className="section_container flex flex-col gap-8">
        <div className="flex gap-8 w-[100%]">
          <div className="w-full basis-1/3">
            <StatsCard />
          </div>
          <div className="basis-2/3">
            <SnapScribeCreditsCard />
          </div>
        </div>
        <div className="flex gap-8 w-[100%]">
          <div className="w-full basis-1/3">
            <QuickUploadCard />
          </div>
          <div className="basis-2/3 ">
            <RecentSnapshotCard />
          </div>
        </div>
      </section>
    </div>
  );
}
