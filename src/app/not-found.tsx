import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl border border-border bg-[color:var(--surface-elevated)] p-8 text-center sm:p-12">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">페이지를 찾을 수 없습니다</h1>
        <p className="mt-4 text-base text-foreground-muted sm:text-lg">
          주소가 바뀌었거나 삭제되었을 수 있습니다.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex border-2 border-foreground px-6 py-3 text-sm font-semibold transition-all hover:bg-foreground hover:text-background"
        >
          홈으로 이동
        </Link>
      </div>
    </main>
  )
}
