import React, { useCallback, useEffect, useState } from "react";
import SnapshotsCard from "./SnapshotsCard";
import { createClient } from "@/utils/supabase/client";

const SnapshotsLists = () => {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [snapshots, setSnapshots] = useState<any[] | null>([]);

  const fetchSnapshots = useCallback(async () => {
    try {
      setLoading(true);
      //   const { data, error } = await getSnapshots();
      const { data, error } = await supabase.from("snapshots").select("*");
      if (error) {
        console.log(error);
        throw error;
      }
      if (data) {
        setSnapshots(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchSnapshots();
  }, [fetchSnapshots]);

  console.log(snapshots);
  return (
    <ul className="mt-7 card_grid">
      {snapshots && snapshots?.length > 0
        ? snapshots.map((data) => <SnapshotsCard key={data.id} data={data} />)
        : "No snapshots found"}
    </ul>
  );
};

export default SnapshotsLists;
