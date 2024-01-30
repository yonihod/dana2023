
export default function Project({ params }: { params: { id: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Project</h1>
            {params.id}
        </main>
    )
}
