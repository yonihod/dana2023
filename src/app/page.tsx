import Gallery from "@/components/Gallery";

export default async function Home() {
  return (
    <main className="relative w-screen pt-14 overflow-x-hidden">
      <h1 className="text-white font-serif text-7xl text-center">
        <span className="font-extrabold">Hi</span>
        <span className="font-extrabold text-yellow-600">,</span>
        <span className="ml-4">I</span>
        <span className="font-extrabold text-orange-600">&apos;</span>
        <span>m</span>
        <span className="font-extrabold text-slate-100 ml-4">Dana</span>
      </h1>
      <Gallery />
    </main>
  );
}
