import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";
import { logout } from "../login/actions";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <main className="w-full h-screen p-4">
      <div className="flex justify-between items-center">
        <p>Hello {data.user.email}</p>
        <form action={logout}>
          <button 
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logg ut
          </button>
        </form>
      </div>
    </main>
  );
}
