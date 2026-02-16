'use client'

import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  // 마운트 전에는 렌더링하지 않음 (하이드레이션 불일치 방지)
  if (!mounted) {
    return (
      <button
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 h-10 w-10 sm:h-12 sm:w-12 border border-border bg-background transition-all hover:border-primary"
        aria-label="테마 전환"
      >
        <span className="sr-only">Loading theme toggle</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 h-10 w-10 sm:h-12 sm:w-12 border border-border bg-background transition-all hover:border-primary hover:scale-110 active:scale-95"
      aria-label={theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
    >
      {theme === 'light' ? (
        // 달 아이콘 (다크 모드로 전환)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5 sm:h-6 sm:w-6 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      ) : (
        // 해 아이콘 (라이트 모드로 전환)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5 sm:h-6 sm:w-6 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      )}
    </button>
  )
}
