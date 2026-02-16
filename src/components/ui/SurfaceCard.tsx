import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SurfaceCardProps {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export function SurfaceCard({ children, className, interactive = true }: SurfaceCardProps) {
  return (
    <article
      className={cn(
        'border border-border bg-[color:var(--surface-elevated)] p-6',
        interactive &&
          'transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[var(--glow-soft)]',
        className
      )}
    >
      {children}
    </article>
  )
}
