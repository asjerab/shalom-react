import { createClient } from "../../../utils/supabase/server";

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("instruments").select();

  return (
    <main className="w-full h-screen">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Instrumenter</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {instruments?.map((instrument) => (
            <div
              key={instrument.id}
              className="border rounded-lg p-4 shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-2">{instrument.name}</h2>
              {instrument.description && (
                <p className="text-gray-600 mb-2">{instrument.description}</p>
              )}
              {instrument.category && (
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {instrument.category}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
