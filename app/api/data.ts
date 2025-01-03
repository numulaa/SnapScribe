import { createClient } from "@/utils/supabase/server";

export const getUser = async (req, res) => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error("Error", error.message);
  }
  if (data) {
    res.statur(200).json(data);
  }
};
