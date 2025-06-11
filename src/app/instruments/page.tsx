import { createClient } from "../../../utils/supabase/server";

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments, error } = await supabase.from("instruments").select();

  if (error) {
    console.error("Feil ved henting av instrumenter:", error);
    return <div>Det oppstod en feil ved henting av instrumenter</div>;
  }

  if (!instruments || instruments.length === 0) {
    return <div>Ingen instrumenter funnet</div>;
  }

  return (
    <main className="w-full h-screen">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Instrumenter</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {instruments.map((instrument) => (
            <div key={instrument.id} className="border rounded-lg p-4 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{instrument.name}</h2>
            </div>
          ))}
        </div>
      </div>  
    </main>
  );
}
