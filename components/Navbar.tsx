import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "./ui/button";
import Logout from "./Logout";
import { createClient } from "@/utils/supabase/server";

const Navbar = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userMetadata = user?.user_metadata;
  console.log(userMetadata);
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {user ? (
            <>
              <Link href="/create">
                <span>Create</span>
              </Link>
              <Logout />
              <Link href={`/creator/${user?.id}`}>
                <Avatar>
                  <AvatarImage
                    src={userMetadata?.avatar_url}
                    alt={userMetadata?.full_name}
                  />
                  <AvatarFallback>CN</AvatarFallback>
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
