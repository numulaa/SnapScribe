"use server";
import SearchForm from "@/components/SearchForm";
import SnapshotsCard from "@/components/SnapshotsCard";
import { getSnapshots } from "@/lib/queries";

const Snapshots = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const snapshots = await getSnapshots();

  console.log(snapshots);

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
        <ul className="mt-7 card_grid">
          {snapshots && snapshots?.length > 0
            ? snapshots.map((data) => (
                <SnapshotsCard key={data.id} data={data} />
              ))
            : "No snapshots found"}
        </ul>
      </section>
    </main>
  );
};

export default Snapshots;
