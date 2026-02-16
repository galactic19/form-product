'use client'

import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  // 마운트 전에는 렌더링하지 않음 (하이드레이션 불일치 방지)
  if (!mounted) {
    return (
      <button
        className="h-10 w-10 border border-border bg-background transition-all hover:border-primary"
        aria-label="테마 전환"
      >
        <span className="sr-only">Loading theme toggle</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="h-10 w-10 border border-border bg-background transition-all hover:border-primary hover:scale-105 active:scale-95 cursor-pointer"
      aria-label={theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 mx-auto text-foreground" />
      ) : (
        <Sun className="h-5 w-5 mx-auto text-foreground" />
      )}
    </button>
  )
}
