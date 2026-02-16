export default function Loading() {
  return (
    <main className="min-h-screen px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="h-4 w-40 animate-pulse bg-surface-bright" />
        <div className="h-12 w-full max-w-3xl animate-pulse bg-surface-bright" />
        <div className="h-6 w-full max-w-2xl animate-pulse bg-surface-bright" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-44 animate-pulse border border-border bg-[color:var(--surface-elevated)]"
            />
          ))}
        </div>
      </div>
    </main>
  )
}
