import Gallery from '@/components/Gallery'

export default async function Home() {
  return (
    <main className="grid h-full place-items-center z-20 relative w-screen overflow-x-hidden">
      <Gallery />
    </main>
  )
}
