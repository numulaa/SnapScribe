import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Logout from "./Logout";

import { createClient } from "@/utils/supabase/server";

// Define the user_metadata type
type UserMetadata = {
  avatar_url: string;
  full_name: string;
};

const Navbar = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Cast user_metadata to the defined type
  const userMetadata = user?.user_metadata as UserMetadata;

  const avatar_url = userMetadata?.avatar_url || "";
  const full_name = userMetadata?.full_name || "";

  const userInitials = full_name
    ? full_name
        .split(" ")
        .map((name: string) => name[0])
        .join("")
        .toUpperCase()
    : user?.email?.substring(0, 2);

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {user?.id ? (
            <>
              <Link href="/snapshots">
                <span>Snapshots</span>
              </Link>
              <Link href="/create">
                <span>Create</span>
              </Link>
              <Logout />
              <Link href={`/creator/${user?.id}`}>
                <Avatar>
                  <AvatarImage src={avatar_url} alt={full_name} />
                  <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <Link href="/login">
              <Button variant="outline">Get Started</Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
