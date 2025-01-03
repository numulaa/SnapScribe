"use client";
import SearchForm from "@/components/SearchForm";
import SnapshotsCard from "@/components/SnapshotsCard";
import { createClient } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const Snapshots = async ({
  searchParams,
  session,
}: {
  searchParams: Promise<{ query?: string }>;
  session: Session | null;
}) => {
  const query = (await searchParams).query;
  const supabase = createClient();
  const [snapshots, setSnapshots] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchSnapshots = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("snapshots").select("*");
      if (error) {
        console.error("error fetching data", error.message);
      }
      setSnapshots(data!);
    } catch (error) {
      console.error("Unexpected error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (session) {
      fetchSnapshots();
    }
    redirect("/");
  }, [session]);

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
