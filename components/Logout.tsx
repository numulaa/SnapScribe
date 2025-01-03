"use server";
import { logout } from "@/lib/auth-action";

const Logout = () => {
  return (
    <form action={logout}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
