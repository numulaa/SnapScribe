import { createClient } from "@/utils/supabase/client";
import { QueryData, QueryResult } from "@supabase/supabase-js";

const CheckData = async () => {
  const supabase = createClient();
  const shanpshotsWithUserProfile = supabase
    .from("snapshots")
    .select(`*, creator:user_profiles(*)`);
  const { data, error } = await shanpshotsWithUserProfile;
  type DataQueryCheck = QueryData<typeof shanpshotsWithUserProfile>;

  const serverSnapshots = data!;
  return <p>Hello this is data with profiles </p>;
};

export default CheckData;
