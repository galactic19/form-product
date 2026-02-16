'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP 플러그인 등록
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// 글로벌 기본값
gsap.defaults({
  ease: 'power3.out',
  duration: 1,
})

// ScrollTrigger 기본값
ScrollTrigger.defaults({
  markers: process.env.NODE_ENV === 'development',
})

// GSAP 설정 초기화 훅
export function useGSAPConfig() {
  useEffect(() => {
    // 페이지 로드 후 ScrollTrigger refresh
    ScrollTrigger.refresh()

    return () => {
      // Cleanup: 모든 ScrollTrigger 인스턴스 제거
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}

// prefers-reduced-motion 감지
export function usePrefersReducedMotion() {
  if (typeof window === 'undefined') return false
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
