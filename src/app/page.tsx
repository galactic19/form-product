'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeroCanvas } from '@/components/animations/HeroCanvas'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { MobileActionBar } from '@/components/sections/MobileActionBar'

gsap.registerPlugin(ScrollTrigger)

// ─── 데이터 ───────────────────────────────────────────────────────────────────

const INDUSTRIES = [
  {
    label: '인터넷',
    en: 'INTERNET',
    desc: '통신사별 속도·요금 비교 구성 + 즉시 신청 최적화 동선',
    color: '#1E40AF',
    href: '/templates/internet',
  },
  {
    label: 'TV',
    en: 'TELEVISION',
    desc: '채널 구성 시각화 + 번들 상품 추천 전환 설계',
    color: '#7C3AED',
    href: '/templates/internet',
  },
  {
    label: '휴대폰',
    en: 'MOBILE',
    desc: '요금제 비교표 + 기기 선택 → 즉시 신청 폼 구조',
    color: '#0369A1',
    href: '/templates/mobile',
  },
  {
    label: '렌탈',
    en: 'RENTAL',
    desc: '정수기·공기청정기 월 비용 강조 + 방문 예약 연동',
    color: '#047857',
    href: '/templates/rental',
  },
  {
    label: '중고차',
    en: 'USED CAR',
    desc: '매입·판매 고객 분리 랜딩 + 무료 시세 안내 CTA',
    color: '#92400E',
    href: '/templates/usedcar',
  },
  {
    label: '보험',
    en: 'INSURANCE',
    desc: '신뢰도 중심 설계 + 전문가 무료 상담 신청 구조',
    color: '#BE185D',
    href: '/templates/insurance',
  },
]

const STATS = [
  { value: 1240, suffix: '+', label: '사용 중인 판매 대리점' },
  { value: 87, suffix: '%', label: '문의 전환율 향상 평균' },
  { value: 12, suffix: '개', label: '업종별 특화 템플릿' },
  { value: 3, suffix: '일', label: '평균 제작·납품 기간' },
]

const PAINS = [
  {
    no: '01',
    title: '광고 클릭은 오는데\n문의로 안 이어져요',
    desc: '카카오 폼·단순 신청서는 신뢰감이 낮아 이탈률이 높습니다. 업종별로 최적화된 전환 구조가 필요합니다.',
  },
  {
    no: '02',
    title: '어디 맡겨도\n가입상품 구조를 몰라요',
    desc: '인터넷·렌탈·보험 전환 설계는 이 업종을 전문으로 한 곳만 제대로 할 수 있습니다. 저희는 이 업종만 수백 개 제작했습니다.',
  },
  {
    no: '03',
    title: '직접 만들기엔\n시간도 능력도 없어요',
    desc: '코딩·디자인 지식 없이 업체명·연락처·이미지만 넣으면 완성. 당일 광고 집행이 가능한 형태로 납품합니다.',
  },
]

const STEPS = [
  {
    no: '01',
    title: '업종 선택',
    desc: '내 업종에 딱 맞는 템플릿을 고릅니다.',
  },
  {
    no: '02',
    title: '정보 입력',
    desc: '업체명·연락처·이미지만 넣으면 완성.',
  },
  {
    no: '03',
    title: '즉시 운영',
    desc: '당일 광고 집행이 가능한 형태로 납품.',
  },
]

const FAQS = [
  {
    q: '제작 기간이 얼마나 걸리나요?',
    a: '평균 3일 이내 납품합니다. 정보를 빠르게 주시면 당일 납품도 가능합니다. 맞춤 제작의 경우 복잡도에 따라 최대 5~7일이 소요될 수 있습니다.',
  },
  {
    q: '코딩이나 디자인 지식이 없어도 운영할 수 있나요?',
    a: '네, 전혀 필요 없습니다. 업체명·연락처·이미지만 알려주시면 저희가 완성해서 드립니다. 납품 후 광고를 바로 집행할 수 있는 형태로 전달해 드립니다.',
  },
  {
    q: '템플릿 구매 후 수정 요청이 가능한가요?',
    a: '납품 후 7일 이내 기본 정보 수정(업체명, 연락처, 이미지 교체 등)은 무료로 도와드립니다. 구조적인 변경이 필요하시면 맞춤 제작으로 진행해 주세요.',
  },
  {
    q: '어떤 광고 플랫폼과 연동되나요?',
    a: '메타(인스타그램·페이스북), 구글, 네이버 등 어떤 광고 플랫폼과도 연동됩니다. 랜딩페이지 URL만 광고에 넣으시면 바로 집행 가능합니다.',
  },
  {
    q: '6개 외 다른 업종도 제작 가능한가요?',
    a: '가능합니다. 인터넷·TV·휴대폰·렌탈·보험·중고차 외에도 가입상품·구독형 상품을 판매하는 업종이라면 맞춤 제작으로 진행할 수 있습니다. 상담 시 말씀해 주세요.',
  },
  {
    q: '결제 방식은 어떻게 되나요?',
    a: '계좌이체 및 카드 결제 모두 가능합니다. 맞춤 제작의 경우 착수금 50% 선결제 후 납품 완료 시 잔금을 결제하는 방식으로 진행합니다.',
  },
]

const TICKER_ITEMS = [
  ...INDUSTRIES.map((i) => `${i.label} — ${i.en}`),
  '고전환 설계 — HIGH CONVERSION',
  '모바일 우선 — MOBILE FIRST',
  '당일 납품 — SAME DAY',
]

// ─── 컴포넌트 ─────────────────────────────────────────────────────────────────

export default function Home() {
  const headerRef = useRef<HTMLElement>(null)
  const ctxRef = useRef<gsap.Context | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // 메뉴 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      // ── 헤더 배경 스크롤 ───────────────────────────────────────────────
      ScrollTrigger.create({
        start: 'top -40px',
        onUpdate: (self) => {
          const hdr = headerRef.current
          if (!hdr) return
          if (self.scroll() > 40) {
            hdr.style.background = 'rgba(10,10,10,0.92)'
            hdr.style.backdropFilter = 'blur(16px)'
            hdr.style.borderBottom = '1px solid rgba(255,255,255,0.06)'
          } else {
            hdr.style.background = 'transparent'
            hdr.style.backdropFilter = 'none'
            hdr.style.borderBottom = '1px solid transparent'
          }
        },
      })

      // ── 히어로 진입
      // js-hero-line: GSAP from({yPercent:115}) — CSS transform과 충돌하므로 from() 유지
      // 나머지: CSS opacity:0 + gsap.set() y오프셋 → GSAP to()로 표시 (stagger 버그 방지)
      gsap.set('.js-hero-badge', { y: 14 })
      gsap.set('.js-hero-sub', { y: 18 })
      gsap.set('.js-hero-btn', { y: 16 })

      gsap
        .timeline({ delay: 0.15 })
        .to('.js-hero-badge', {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
        })
        .from(
          '.js-hero-line',
          {
            yPercent: 115,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
          },
          '-=0.35',
        )
        .to(
          '.js-hero-sub',
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.55',
        )
        .to(
          '.js-hero-btn',
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.5',
        )
        .to(
          '.js-hero-meta',
          { opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.3',
        )

      // ── 통계 카운터 ────────────────────────────────────────────────────
      document.querySelectorAll<HTMLElement>('.js-stat-val').forEach((el) => {
        const target = Number(el.dataset.target)
        ScrollTrigger.create({
          trigger: el,
          start: 'top 82%',
          once: true,
          onEnter: () => {
            const counter = { v: 0 }
            gsap.to(counter, {
              v: target,
              duration: 1.8,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = Math.round(counter.v).toLocaleString()
              },
            })
          },
        })
      })

      // ── 섹션 페이드업 (CSS 초기 상태 → GSAP to()로 표시) ────────────
      gsap.utils.toArray<HTMLElement>('.js-reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true,
          },
        })
      })

      // ── 카드 스태거 (CSS 초기 상태 → GSAP to()로 표시) ──────────────
      gsap.utils
        .toArray<HTMLElement>('.js-stagger')
        .forEach((parent) => {
          const kids = parent.querySelectorAll<HTMLElement>('.js-card:not(.js-industry-card)')
          if (kids.length === 0) return
          gsap.to(kids, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: parent,
              start: 'top 85%',
              toggleActions: 'play none none none',
              invalidateOnRefresh: true,
            },
          })
        })

      // ── 업종 카드: 데스크탑 스태거 / 모바일 개별 스크롤 인터랙션 ───
      const mm = gsap.matchMedia()

      // 데스크탑 — 기존 스태거와 동일하게 한 번에 등장
      mm.add('(min-width: 768px)', () => {
        const grid = document.querySelector<HTMLElement>('.js-industry-grid')
        if (!grid) return
        const iCards = grid.querySelectorAll<HTMLElement>('.js-industry-card')
        gsap.set(iCards, { opacity: 0, y: 20 })
        gsap.to(iCards, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true,
          },
        })
      })

      // 모바일 — 카드 하나씩 스크롤에 반응해 돋보이도록
      mm.add('(max-width: 767px)', () => {
        const iCards = gsap.utils.toArray<HTMLElement>('.js-industry-card')

        // 초기 상태: 왼쪽으로 밀려 있고 어둡게
        gsap.set(iCards, { opacity: 0, x: -28, y: 0 })

        iCards.forEach((card) => {
          const accent = card.querySelector<HTMLElement>('.js-ind-accent')
          const title = card.querySelector<HTMLElement>('.js-ind-title')

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 78%',
              end: 'bottom 22%',
              // 진입 시 재생, 역스크롤 시 되감기
              toggleActions: 'play none none reverse',
            },
          })

          // ① 카드 슬라이드 인 + 페이드
          tl.to(card, { opacity: 1, x: 0, duration: 0.52, ease: 'power3.out' })

          // ② 오렌지 액센트 바 위에서 아래로 자람
          if (accent) {
            tl.to(
              accent,
              { scaleY: 1, duration: 0.4, ease: 'power2.inOut' },
              '-=0.32',
            )
          }

          // ③ 카드 테두리 글로우 (brief flash)
          tl.to(
            card,
            {
              boxShadow: '-4px 0 22px rgba(232,82,42,0.22)',
              duration: 0.3,
              ease: 'power2.out',
            },
            '-=0.25',
          )

          // ④ 타이틀 텍스트 warm glow → 자연스럽게 소멸
          if (title) {
            tl.to(
              title,
              { textShadow: '0 0 18px rgba(232,82,42,0.6)', duration: 0.22, ease: 'power2.out' },
              '-=0.18',
            )
            tl.to(title, { textShadow: '0 0 0px rgba(232,82,42,0)', duration: 0.5, ease: 'power2.in' })
          }
        })

        return () => {
          gsap.set(iCards, { clearProps: 'all' })
        }
      })

      // ── 위치 재계산 (초기 1차 보정) ─────────────────────────────────
      ScrollTrigger.refresh()
    })

    // ── 폰트·이미지 로딩 완료 후 2차 보정 ───────────────────────────
    const handleLoad = () => ScrollTrigger.refresh()
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      ctxRef.current?.revert()
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div
      className="overflow-x-hidden bg-white pb-24 text-[#111] md:pb-0"
      style={{ fontFamily: 'var(--font-noto-sans-kr), system-ui, sans-serif' }}
    >
      {/* ═══ 네비게이션 ═══════════════════════════════════════════════════ */}
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300"
        style={{ borderBottom: '1px solid transparent' }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          {/* 로고 */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-black tracking-[0.18em] text-white">
              양지바른웹
            </span>
            <span className="hidden rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-white/40 sm:inline-block">
              가입상품 전문
            </span>
          </div>

          {/* 데스크탑 네비 */}
          <nav className="hidden items-center gap-7 md:flex">
            {['업종', '템플릿', '제작과정', '상담'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-[13px] font-medium text-white/55 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* 데스크탑 CTA */}
            <a
              href="#contact"
              className="hidden h-[40px] items-center rounded-full bg-[#E8522A] px-5 text-[12px] font-bold tracking-[0.06em] text-white transition-all hover:bg-[#D44820] hover:shadow-[0_6px_24px_rgba(232,82,42,0.4)] md:inline-flex"
            >
              무료 상담
            </a>

            {/* 모바일 햄버거 */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
              aria-label="메뉴 열기"
            >
              <span className="block h-[1.5px] w-5 bg-white" />
              <span className="block h-[1.5px] w-5 bg-white" />
              <span className="block h-[1.5px] w-3.5 self-start bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* ═══ 모바일 전체화면 메뉴 ══════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col bg-[#0A0A0A] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
        style={{ fontFamily: 'var(--font-noto-sans-kr), system-ui, sans-serif' }}
      >
        {/* 메뉴 헤더 */}
        <div className="flex items-center justify-between px-6 py-5">
          <span className="text-sm font-black tracking-[0.18em] text-white">양지바른웹</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center"
            aria-label="메뉴 닫기"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* 구분선 */}
        <div className="mx-6 h-px bg-white/8" />

        {/* 네비 링크 */}
        <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
          {[
            { label: '업종별 템플릿', href: '#industries' },
            { label: '템플릿 예시', href: '#템플릿' },
            { label: '제작 과정', href: '#제작과정' },
            { label: '문의하기', href: '#contact' },
          ].map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between border-b border-white/6 py-5"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              <span className="text-[clamp(1.6rem,6vw,2.2rem)] font-black tracking-[-0.04em] text-white">
                {item.label}
              </span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </nav>

        {/* 하단 CTA */}
        <div className="flex flex-col gap-3 px-6 pb-8 pt-4" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
          <a
            href="tel:0000000000"
            onClick={() => setMenuOpen(false)}
            className="flex h-[52px] items-center justify-center gap-2.5 rounded-full border border-white/15 text-[14px] font-bold text-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2.5A1.5 1.5 0 013.5 1h.638a1.5 1.5 0 011.396.944l.671 1.675a1.5 1.5 0 01-.34 1.658L4.72 6.42a9.015 9.015 0 004.86 4.86l1.143-1.145a1.5 1.5 0 011.658-.34l1.675.671A1.5 1.5 0 0115 11.862V12.5A1.5 1.5 0 0113.5 14C7.149 14 2 8.851 2 2.5z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            전화 상담
          </a>
          <a
            href="https://open.kakao.com"
            onClick={() => setMenuOpen(false)}
            className="flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#FEE500] text-[14px] font-bold text-[#111]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 2C5.134 2 2 4.636 2 7.875c0 2.086 1.34 3.914 3.376 4.95L4.5 15l2.847-1.87A8.43 8.43 0 009 13.75c3.866 0 7-2.636 7-5.875S12.866 2 9 2z" fill="#111" />
            </svg>
            카카오 상담
          </a>
        </div>
      </div>

      {/* ═══ 모바일 하단 액션바 ══════════════════════════════════════ */}
      <MobileActionBar />

      {/* ═══ ① 히어로 ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-[#0A0A0A] px-5 pb-20 pt-28 md:px-10 md:pt-32">
        {/* 인터렉티브 파티클 캔버스 배경 */}
        <HeroCanvas />

        {/* 배경 그라디언트 액센트 */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-[60vh] w-[50vw] opacity-20"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at 80% 20%, rgba(232,82,42,0.5) 0%, transparent 60%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[40vh] w-[40vw] opacity-10"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at 20% 80%, rgba(232,82,42,0.6) 0%, transparent 60%)',
          }}
        />

        <div className="relative mx-auto max-w-[1400px]">
          {/* 타이틀 — 마스크 슬라이드업 효과 */}
          <div className="mb-8 space-y-1">
            <div className="overflow-hidden">
              <h1 className="js-hero-line text-[clamp(3.2rem,9.5vw,8rem)] font-black leading-[1.02] tracking-[-0.04em] text-white">
                광고비 쏟는데
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="js-hero-line text-[clamp(3.2rem,9.5vw,8rem)] font-black leading-[1.02] tracking-[-0.04em] text-white">
                문의가 없다면
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="js-hero-line text-[clamp(3.2rem,9.5vw,8rem)] font-black leading-[1.02] tracking-[-0.04em] text-[#E8522A]">
                랜딩이 문제입니다
              </h1>
            </div>
          </div>

          <p className="js-hero-sub mb-10 max-w-[480px] text-[15px] leading-[1.85] text-white/60">
            인터넷·TV·렌탈·휴대폰·보험·중고차 — 업종별 고전환 랜딩페이지를
            <strong className="font-bold text-white"> 10만원대</strong>부터 제작해 드립니다.
            코딩 없이, 당일 운영 가능.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/templates"
              className="js-hero-btn inline-flex h-[52px] items-center rounded-full bg-[#E8522A] px-7 text-[14px] font-bold text-white transition-all hover:bg-[#D44820] hover:shadow-[0_8px_32px_rgba(232,82,42,0.45)]"
            >
              템플릿 보러가기
            </a>
            <a
              href="#contact"
              className="js-hero-btn inline-flex h-[52px] items-center rounded-full border border-white/15 px-7 text-[14px] font-bold text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              맞춤 제작 상담하기
            </a>
          </div>

          {/* 하단 지표 */}
          <div className="js-hero-meta mt-16 grid grid-cols-2 gap-6 border-t border-white/8 pt-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-black leading-none tracking-[-0.04em] text-white">
                  {s.value.toLocaleString()}
                  {s.suffix}
                </p>
                <p className="mt-1.5 text-[12px] text-white/35">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ② 티커 ═══════════════════════════════════════════════════ */}
      <div className="overflow-hidden border-y border-[#111]/10 bg-[#F6F5F1] py-5 md:py-6">
        <div className="ticker-scroll flex items-center gap-14 whitespace-nowrap md:gap-20">
          {[...Array(4)].flatMap((_, i) =>
            TICKER_ITEMS.map((item) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-3.5 text-[13px] font-bold uppercase tracking-[0.16em] text-[#777] md:text-[14px]"
              >
                <span className="text-[#E8522A]" aria-hidden="true">
                  ◆
                </span>
                {item}
              </span>
            )),
          )}
        </div>
      </div>

      {/* ═══ ③ 페인 포인트 ═════════════════════════════════════════════ */}
      <section className="bg-[#F6F5F1] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="js-reveal mb-12 md:mb-16">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#BBB]">
              WHY 양지바른웹
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.1] tracking-[-0.04em]">
              이런 고민,
              <br />
              있으시죠?
            </h2>
          </div>

          <div className="js-stagger grid gap-4 md:grid-cols-3">
            {PAINS.map((pain) => (
              <article
                key={pain.no}
                className="js-card group rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.09)]"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DDD]">
                  {pain.no}
                </span>
                <h3 className="mt-4 whitespace-pre-line text-[clamp(1.05rem,2.2vw,1.25rem)] font-black leading-[1.4] tracking-[-0.02em]">
                  {pain.title}
                </h3>
                <p className="mt-4 border-t border-[#F0F0F0] pt-4 text-[13px] leading-[1.75] text-[#888]">
                  {pain.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ④ 대상 체크리스트 ════════════════════════════════════════ */}
      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="js-reveal flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
            {/* 왼쪽 텍스트 */}
            <div className="shrink-0">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#BBB]">
                FOR YOU
              </p>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.15] tracking-[-0.04em] text-[#111]">
                이런 분이라면
                <br />
                <span className="text-[#E8522A]">딱 맞습니다</span>
              </h2>
            </div>

            {/* 오른쪽 체크리스트 */}
            <div className="js-stagger flex-1 space-y-3">
              {[
                '인터넷·TV·렌탈·보험·휴대폰·중고차 판매 대리점을 운영 중이다',
                '광고는 돌리고 있는데 문의 전환이 생각보다 낮다',
                '지금 쓰는 카카오 폼·단순 폼이 너무 허접해 보인다',
                '전문 업체에 제작 맡기기엔 비용이 부담스럽다',
                '직접 만들 시간도, 어떻게 만들어야 할지도 모르겠다',
              ].map((text) => (
                <div
                  key={text}
                  className="js-card flex items-start gap-3 rounded-xl bg-[#F6F5F1] px-5 py-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8522A] text-[11px] font-black text-white">
                    ✓
                  </span>
                  <span className="text-[14px] font-medium leading-[1.6] text-[#333]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 하나라도 해당되면 CTA */}
          <div className="js-reveal mt-10 rounded-2xl border border-[#E8522A]/20 bg-[#FFF5F2] px-6 py-5 md:mt-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-[15px] font-black text-[#111]">
                하나라도 해당되신다면, 지금 바로 무료 상담받으세요.
                <span className="mt-0.5 block text-[13px] font-medium text-[#888]">
                  업종과 현재 상황만 알려주시면 맞는 방법을 안내드립니다.
                </span>
              </p>
              <a
                href="#contact"
                className="inline-flex h-[44px] shrink-0 items-center rounded-full bg-[#E8522A] px-6 text-[13px] font-bold text-white transition-all hover:bg-[#D44820]"
              >
                무료 상담 시작하기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ⑤ 통계 ═══════════════════════════════════════════════════ */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="js-stagger grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="js-card">
                <p className="text-[clamp(2.8rem,6vw,4.8rem)] font-black leading-none tracking-[-0.05em] text-[#111]">
                  <span className="js-stat-val" data-target={s.value}>
                    0
                  </span>
                  <span>{s.suffix}</span>
                </p>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#888]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ⑥ 업종 ═══════════════════════════════════════════════════ */}
      <section
        id="industries"
        className="bg-[#0A0A0A] px-5 py-20 text-white md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="js-reveal mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white/30">
                INDUSTRIES
              </p>
              <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.1] tracking-[-0.04em]">
                6개 업종
                <br />
                특화 템플릿
              </h2>
            </div>
            <p className="max-w-[320px] text-[14px] leading-[1.85] text-white/45">
              각 업종의 구매 패턴과 고객 심리에 맞춰
              <br />
              다르게 설계한 전환 최적화 랜딩입니다.
            </p>
          </div>

          <div className="js-stagger js-industry-grid grid gap-px bg-white/8 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Link
                key={ind.label}
                href={ind.href}
                className="js-card js-industry-card group relative flex flex-col gap-5 overflow-hidden bg-[#0A0A0A] p-7 transition-colors duration-200 hover:bg-[#141414]"
              >
                <span
                  className="js-ind-accent pointer-events-none absolute left-0 top-0 h-full w-[3px] origin-top bg-[#E8522A]"
                  style={{ transform: 'scaleY(0)' }}
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20">
                    0{i + 1}
                  </span>
                  <span className="rounded-full border border-white/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                    {ind.en}
                  </span>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: ind.color }}
                      aria-hidden="true"
                    />
                    <h3 className="js-ind-title text-[clamp(1.6rem,3vw,2.2rem)] font-black tracking-[-0.04em] text-white">
                      {ind.label}
                    </h3>
                  </div>
                  <p className="text-[13px] leading-[1.75] text-white/45">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#E8522A] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    템플릿 보기
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ⑦ 제작 과정 ═══════════════════════════════════════════════ */}
      <section id="제작과정" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="js-reveal mb-12 md:mb-16">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#BBB]">
              PROCESS
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.1] tracking-[-0.04em]">
              3단계로
              <br />
              완성됩니다
            </h2>
          </div>

          <div className="js-stagger grid gap-8 md:grid-cols-3 md:gap-12">
            {STEPS.map((step, i) => (
              <div key={step.no} className="js-card relative">
                {/* 연결선 (데스크탑만) */}
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute left-[calc(40px+1.5rem)] right-[-1.5rem] top-5 hidden h-px bg-[#E8E8E8] md:block"
                    aria-hidden="true"
                  />
                )}

                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8522A] text-[12px] font-black text-white">
                  {step.no}
                </div>
                <h3 className="mb-2 text-xl font-black tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.8] text-[#888]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 보조 텍스트 */}
          <div className="js-reveal mt-16 rounded-2xl bg-[#F6F5F1] p-7 md:mt-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-black tracking-[-0.02em] text-[#111]">
                  복잡한 과정 없이 빠르게 시작하세요
                </p>
                <p className="mt-1 text-[13px] text-[#888]">
                  상담부터 납품까지 평균 3일, 빠르면 당일 운영 가능합니다.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex h-[44px] shrink-0 items-center rounded-full bg-[#111] px-6 text-[13px] font-bold text-white transition-all hover:bg-[#333]"
              >
                지금 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ⑧ 템플릿 쇼케이스 ══════════════════════════════════════════ */}
      <section id="템플릿" className="bg-[#F6F5F1] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="js-reveal mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#BBB]">
                TEMPLATES
              </p>
              <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.1] tracking-[-0.04em]">
                실제 사용 중인
                <br />
                템플릿 예시
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <p className="max-w-[300px] text-[14px] leading-[1.8] text-[#888]">
                이미지 교체만으로 바로 운영 가능한
                <br />
                완성형 구조로 납품됩니다.
              </p>
              <Link
                href="/templates"
                className="inline-flex h-[40px] items-center rounded-full bg-[#111] px-5 text-[12px] font-bold text-white transition-all hover:bg-[#333]"
              >
                전체 템플릿 보기 →
              </Link>
            </div>
          </div>

          <div className="js-stagger grid gap-5 md:grid-cols-3">
            {[
              { title: '인터넷 가입 신청', sub: '통신사별 비교 + 즉시 신청', bg: '#D9D7CF' },
              { title: 'TV 수신 설치', sub: '채널 구성 시각화 + 신청', bg: '#C9C7BF', offset: true },
              { title: '렌탈 상품 신청', sub: '월 비용 강조 + 방문 예약', bg: '#D4D2CA' },
            ].map(({ title, sub, bg, offset }) => (
              <div
                key={title}
                className={`js-card overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_56px_rgba(0,0,0,0.12)] ${offset ? 'md:translate-y-6' : ''}`}
              >
                {/* 목업 프리뷰 */}
                <div
                  className="relative flex h-[260px] flex-col justify-between p-5 md:h-[340px]"
                  style={{ backgroundColor: bg }}
                >
                  {/* 모바일 프레임 목업 */}
                  <div className="flex items-center gap-1.5 opacity-40">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#111]" />
                    <div className="h-px flex-1 bg-[#111]" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-28 rounded-xl bg-white/50" />
                    <div className="space-y-2">
                      <div className="h-3 w-4/5 rounded-full bg-[#111]/15" />
                      <div className="h-3 w-3/5 rounded-full bg-[#111]/10" />
                    </div>
                    <div className="h-10 rounded-lg bg-[#E8522A]/80" />
                  </div>

                  <div className="absolute right-4 top-4 rounded-full bg-[#E8522A] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-white">
                    LIVE
                  </div>
                </div>

                {/* 카드 텍스트 */}
                <div className="bg-white px-5 py-4">
                  <p className="font-black tracking-[-0.02em]">{title}</p>
                  <p className="mt-0.5 text-[12px] text-[#888]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ⑨ 상품 소개 ══════════════════════════════════════════════ */}
      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="js-reveal mb-10 md:mb-14">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#BBB]">
              PRICING
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.1] tracking-[-0.04em]">
              두 가지 방법으로
              <br />
              시작하세요
            </h2>
          </div>

          <div className="js-stagger grid gap-5 md:grid-cols-2">
            {/* 템플릿 카드 */}
            <div className="js-card group rounded-2xl border-2 border-[#F0F0F0] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8522A]/30 hover:shadow-[0_12px_48px_rgba(0,0,0,0.09)]">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-[#F6F5F1] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#888]">
                    TEMPLATE
                  </span>
                  <h3 className="text-[22px] font-black tracking-[-0.03em] text-[#111]">
                    템플릿 구매
                  </h3>
                </div>
                <span className="text-3xl">📄</span>
              </div>

              <div className="mb-6">
                <p className="text-[clamp(2rem,4vw,2.8rem)] font-black leading-none tracking-[-0.04em] text-[#111]">
                  10 <span className="text-[1.2rem] font-black text-[#888]">~</span> 15만원
                </p>
                <p className="mt-1 text-[12px] text-[#AAA]">업종별 1개 기준</p>
              </div>

              <ul className="mb-8 space-y-3">
                {[
                  '즉시 다운로드 · 바로 적용',
                  '업체명·연락처·이미지만 교체',
                  '6개 업종 특화 구조 제공',
                  '모바일 최적화 완성형',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#555]">
                    <span className="text-[#E8522A]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="/templates"
                className="flex h-[48px] w-full items-center justify-center rounded-xl border-2 border-[#111] text-[14px] font-black text-[#111] transition-all group-hover:bg-[#111] group-hover:text-white"
              >
                업종별 템플릿 보기 →
              </a>
            </div>

            {/* 맞춤 제작 카드 */}
            <div className="js-card group rounded-2xl bg-[#111] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.25)]">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">
                    CUSTOM
                  </span>
                  <h3 className="text-[22px] font-black tracking-[-0.03em] text-white">
                    맞춤 제작
                  </h3>
                </div>
                <span className="text-3xl">✏️</span>
              </div>

              <div className="mb-6">
                <p className="text-[clamp(2rem,4vw,2.8rem)] font-black leading-none tracking-[-0.04em] text-white">
                  15 <span className="text-[1.2rem] font-black text-white/40">~</span> 45만원
                </p>
                <p className="mt-1 text-[12px] text-white/35">업종·규모에 따라 상이</p>
              </div>

              <ul className="mb-8 space-y-3">
                {[
                  '전문가가 처음부터 끝까지 제작',
                  '업체명·연락처만 알려주시면 완성',
                  '평균 납품 3일 · 빠르면 당일',
                  '수정 요청 무제한 (기간 내)',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-white/70">
                    <span className="text-[#E8522A]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="flex h-[48px] w-full items-center justify-center rounded-xl bg-[#E8522A] text-[14px] font-black text-white transition-all hover:bg-[#D44820] hover:shadow-[0_6px_24px_rgba(232,82,42,0.45)]"
              >
                제작 상담 시작하기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ⑩ 후기 ════════════════════════════════════════════════════ */}
      <TestimonialsSection />

      {/* ═══ ⑪ FAQ ══════════════════════════════════════════════════════ */}
      <section id="faq" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="js-reveal mb-12 text-center md:mb-16">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#BBB]">
              FAQ
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.1] tracking-[-0.04em]">
              자주 묻는 질문
            </h2>
          </div>

          <div className="js-stagger space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                className="js-card overflow-hidden rounded-2xl border border-[#EBEBEB] bg-white"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-[15px] font-black leading-[1.4] tracking-[-0.02em] text-[#111]">
                    {faq.q}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-[#999] transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 4v12M4 10h12"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-6 text-[14px] leading-[1.85] text-[#666]">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 추가 문의 유도 */}
          <div className="js-reveal mt-10 rounded-2xl bg-[#F6F5F1] px-6 py-6 text-center md:mt-12">
            <p className="font-black text-[#111]">해결되지 않은 궁금한 점이 있으신가요?</p>
            <p className="mb-5 mt-1 text-[13px] text-[#888]">
              직접 상담해드리겠습니다. 언제든지 연락주세요.
            </p>
            <a
              href="#contact"
              className="inline-flex h-[44px] items-center rounded-full bg-[#E8522A] px-6 text-[13px] font-bold text-white transition-all hover:bg-[#D44820]"
            >
              지금 무료 상담하기 →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ ⑫ 문의 CTA ════════════════════════════════════════════════ */}
      <section id="contact" className="bg-[#E8522A] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="js-reveal">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">
              CONTACT
            </p>
            <h2 className="mb-6 text-[clamp(2.5rem,7.5vw,6.5rem)] font-black leading-[1.0] tracking-[-0.05em] text-white">
              지금 바로
              <br />
              시작하세요
            </h2>
            <p className="mb-10 max-w-[440px] text-[15px] leading-[1.85] text-white/65">
              업종과 원하시는 구조를 알려주시면 빠르게 안내드립니다.
              무료 상담 후 템플릿을 선택하시면 됩니다.
            </p>
          </div>

          <div className="js-stagger flex flex-wrap gap-4">
            <a
              href="mailto:contact@form.kr"
              className="js-card inline-flex h-[54px] items-center rounded-full bg-white px-8 text-[14px] font-black text-[#E8522A] transition-all hover:bg-[#FFF5F2] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            >
              이메일로 문의하기
            </a>
            <a
              href="tel:0000000000"
              className="js-card inline-flex h-[54px] items-center rounded-full border-2 border-white/25 px-8 text-[14px] font-black text-white transition-colors hover:bg-white/10"
            >
              전화 상담 신청
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8">
            <div className="flex items-center gap-4">
              <span className="text-[13px] font-black tracking-[0.15em] text-white">
                양지바른웹
              </span>
              <span className="text-[12px] text-white/40">
                가입상품 전문 웹에이전시
              </span>
            </div>
            <span className="text-[12px] text-white/40">© 2026 양지바른웹</span>
          </div>
        </div>
      </section>
    </div>
  )
}
