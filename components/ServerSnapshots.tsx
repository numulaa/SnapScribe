"use client";
import React, { useCallback, useEffect, useState } from "react";
import SnapshotsCard from "./SnapshotsCard";
import { createClient } from "@/utils/supabase/client";
import { Tables } from "@/database.types";
import RealtimeSnapshots from "./RealtimeSnapshots";

const ServerSnapshots = () => {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [serverSnapshots, setServerSnapshots] = useState<Tables<"snapshots">[]>(
    []
  );

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
        setServerSnapshots(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchSnapshots();
  }, []);

  return <RealtimeSnapshots serverSnapshots={serverSnapshots} />;
};

export default ServerSnapshots;
