"use client";
import { Tables } from "@/database.types";
import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useState } from "react";
import SnapshotsCard from "./SnapshotsCard";
import { SnapshotsWithUserProfileType } from "@/lib/types";

const RealtimeSnapshots = ({
  serverSnapshots,
}: {
  serverSnapshots: SnapshotsWithUserProfileType[];
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
          setSnapshots([
            ...snapshots,
            payload.new as SnapshotsWithUserProfileType,
          ]);
        }
      )
      .subscribe();
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
