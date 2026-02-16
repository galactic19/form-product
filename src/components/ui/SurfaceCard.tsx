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
        'relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-md transition-all duration-300',
        interactive &&
          'hover:-translate-y-1 hover:border-primary/50 hover:bg-card/80 hover:shadow-[0_0_30px_-10px_rgba(0,229,255,0.15)]',
        className
      )}
    >
      {/* Glossy sheen effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </article>
  )
}
