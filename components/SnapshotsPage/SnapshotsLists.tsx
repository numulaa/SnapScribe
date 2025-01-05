import { createClient } from "@/utils/supabase/client";
import RealtimeSnapshots from "./RealtimeSnapshots";
import { SnapshotsWithUserProfileType } from "@/lib/types";

const SnapshotsLists = async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("snapshots")
    .select(`*, user_profiles(*)`);
  const serverSnapshots = data! as SnapshotsWithUserProfileType[];
  return <RealtimeSnapshots serverSnapshots={serverSnapshots} />;
};

export default SnapshotsLists;
