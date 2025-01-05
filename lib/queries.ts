import { createClient } from "@/utils/supabase/server";

export async function getSnapshots() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("snapshots").select("*");
  return { data, error };
}
export async function getSnapshotsWithUserProfile() {
  const supabase = createClient();
  const snapshotsWithUserProfile = (await supabase)
    .from("snapshots")
    .select(`*, user_profiles(*)`);
  return snapshotsWithUserProfile;
}
