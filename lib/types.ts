export type SnapshotsWithUserProfileType = {
  created_at: string;
  description: string;
  extracted_text: string;
  id: number;
  imageUrl: string | null;
  title: string;
  user_id: string | null;
  user_profiles: {
    avatar_url: string | null;
    display_name: string | null;
    email: string | null;
    id: string;
  } | null;
};
