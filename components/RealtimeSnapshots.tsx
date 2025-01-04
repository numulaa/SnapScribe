"use client";
import { Tables } from "@/database.types";
import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useState } from "react";
import SnapshotsCard from "./SnapshotsCard";

const RealtimeSnapshots = ({
  serverSnapshots,
}: {
  serverSnapshots: Tables<"snapshots">[];
}) => {
  const supabase = createClient();
  const [snapshots, setSnapshots] = useState(serverSnapshots);
  useEffect(() => {
    const channel = supabase
      .channel("realtime snapshots")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "snapshots" },
        (payload) => {
          setSnapshots([...snapshots, payload.new as Tables<"snapshots">]);
        }
      )
      .subscribe();
    console.log("channel", channel);
    return () => supabase.removeChannel(channel);
  }, [supabase]);
  return (
    <ul className="mt-7 card_grid">
      {snapshots && snapshots?.length > 0
        ? snapshots.map((data) => <SnapshotsCard key={data.id} data={data} />)
        : "No snapshots found"}
    </ul>
  );
};

export default RealtimeSnapshots;
