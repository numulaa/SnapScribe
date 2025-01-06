import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

import SearchForm from "@/components/SearchForm";
import SnapshotsLists from "@/components/SnapshotsPage/SnapshotsLists";
import CheckData from "@/components/CreatePage/CreateForm";

const Snapshots = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <main>
      <section className="pink_container">
        <span className="tag">Transform, Share, and Inspire</span>
        <h1 className="heading">From Snapshots to Shareable Stories</h1>
        <p className="sub-heading !max-w-3xl">
          Transform Your Screenshots Into Meaningful Shareable Insights
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <h2 className="font-semibold text-3xl">
          {query ? `Search results for "${query}"` : "All snapshots"}
        </h2>
        <SnapshotsLists />
      </section>
    </main>
  );
};

export default Snapshots;
