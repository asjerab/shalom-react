import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";
import { logout } from "../login/actions";
import LogoutButton from "../components/logoutButton";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <main className="w-full h-screen p-[35px]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1
            className="Gilroy-Semibold text-slate-50"
            style={{ fontSize: "clamp(32px, 5vw, 18px)" }}
          >
            Hey there!
          </h1>
          <p
            className="Gilroy-Semibold text-[#ffffff]"
            style={{ fontSize: "clamp(22px, 5vw, 18px)" }}
          >
            {" "}
            {data.user.email}
          </p>
        </div>
        <LogoutButton />
      </div>
    </main>
  );
}
