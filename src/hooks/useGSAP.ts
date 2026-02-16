'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

type UseGSAPCallback = () => void | (() => void)

export function useGSAP(
  callback: UseGSAPCallback,
  dependencies: any[] = []
) {
  const contextRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    // GSAP Context 생성 (자동 cleanup)
    const ctx = gsap.context(() => {
      callback()
    })
    
    contextRef.current = ctx

    return () => {
      // Context cleanup
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return contextRef
}
