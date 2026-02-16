'use client'

import { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'

export function FloatingButtons() {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleKakaoClick = () => {
    // 카카오톡 상담 연동은 추후 구현
    alert('카카오톡 상담 연동 예정입니다')
  }

  return (
    <div className="fixed bottom-6 right-6 md:right-12 z-50 flex flex-col gap-3">
      {/* 카카오 상담 버튼 */}
      <button
        onClick={handleKakaoClick}
        className="group flex h-14 w-14 items-center justify-center border border-border bg-[#FEE500] transition-all hover:scale-105 hover:border-primary active:scale-95 cursor-pointer"
        aria-label="카카오톡 상담"
      >
        <MessageCircle className="h-6 w-6 text-[#3C1E1E] transition-transform group-hover:scale-110" strokeWidth={2.5} />
      </button>

      {/* Top 버튼 (스크롤 시 표시) */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="group flex h-14 w-14 items-center justify-center border border-border bg-background transition-all hover:scale-105 hover:border-primary active:scale-95 cursor-pointer animate-fade-in"
          aria-label="맨 위로"
        >
          <ArrowUp className="h-6 w-6 text-foreground transition-transform group-hover:-translate-y-1" strokeWidth={2.5} />
        </button>
      )}
    </div>
  )
}
