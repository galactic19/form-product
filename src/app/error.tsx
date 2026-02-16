'use client'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <main className="min-h-screen px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl border border-border bg-[color:var(--surface-elevated)] p-8 text-center sm:p-12">
        <p className="mb-4 inline-flex border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          페이지 로딩 오류
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">잠시 문제가 발생했습니다</h1>
        <p className="mt-4 text-base text-foreground-muted sm:text-lg">
          다시 시도하면 대부분 정상적으로 복구됩니다.
        </p>
        {error?.message && (
          <p className="mt-4 border border-border bg-background px-4 py-3 text-left text-sm text-foreground-muted">
            {error.message}
          </p>
        )}

        <button
          type="button"
          onClick={reset}
          className="mt-8 border-2 border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
        >
          다시 시도
        </button>
      </div>
    </main>
  )
}
