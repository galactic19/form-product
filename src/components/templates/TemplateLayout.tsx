'use client'

import { ReactNode, useState } from 'react'

export interface TemplateConfig {
  // Hero
  heroTitle: string           // HTML 허용 (strong, br 태그)
  heroSub?: string
  heroBadge?: string          // 상단 띠 문구 ex) "🎁 2026 특별 프로모션"
  heroBullets?: string[]      // ✓ 체크리스트
  heroGradient?: string       // CSS gradient
  heroCta?: string            // 히어로 버튼 텍스트

  // 브랜딩
  primaryColor?: string       // ex) '#2563EB'
  primaryDark?: string

  // 회사
  companyName?: string
  companyPhone?: string
  kakaoUrl?: string
  companyHours?: string

  // Trust 바
  trustStats?: { value: string; label: string }[]

  // FAQ
  faq?: { q: string; a: string }[]
}

interface TemplateLayoutProps {
  config: TemplateConfig
  children: ReactNode
}

export function TemplateLayout({ config, children }: TemplateLayoutProps) {
  const [faqOpen, setFaqOpen] = useState<number | null>(null)

  const {
    heroTitle,
    heroSub,
    heroBadge,
    heroBullets = [],
    heroGradient = 'linear-gradient(160deg, #1E3A5F 0%, #1D4ED8 100%)',
    heroCta = '📞 지금 바로 전화 상담',
    primaryColor = '#2563EB',
    companyName = 'OO대리점',
    companyPhone = '1588-0000',
    kakaoUrl = '#',
    companyHours = '09:00 ~ 21:00',
    trustStats = [],
    faq = [],
  } = config

  const telLink = `tel:${companyPhone.replace(/[^0-9]/g, '')}`

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily:
          "'Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif",
        letterSpacing: '-0.01em',
      }}
    >
      {/* ══ 상단 고정 전화 바 ══════════════════════════════════════════ */}
      <div className="fixed inset-x-0 top-0 z-50 bg-[#111]">
        <div className="flex items-center justify-between px-4 py-2.5">
          <a href={telLink} className="flex items-center gap-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 2a.5.5 0 01.5-.5h1.6a.5.5 0 01.47.335l.67 1.9a.5.5 0 01-.12.535l-.87.87a7.5 7.5 0 003.61 3.61l.87-.87a.5.5 0 01.535-.12l1.9.67a.5.5 0 01.335.47V11a.5.5 0 01-.5.5C5.82 11.5 2.5 8.18 2.5 4V2z"
                fill="#FEE500"
              />
            </svg>
            <span className="text-[15px] font-black text-white">
              {companyPhone}
            </span>
          </a>
          <span className="text-[11px] text-white/45">
            상담 가능 {companyHours}
          </span>
        </div>
      </div>

      {/* ══ 히어로 ═══════════════════════════════════════════════════════ */}
      <section className="pt-[46px]" style={{ background: heroGradient }}>
        <div className="px-5 pb-8 pt-6">
          {heroBadge && (
            <div className="mb-4 inline-block rounded-full bg-yellow-400 px-3.5 py-1 text-[12px] font-black text-[#111]">
              {heroBadge}
            </div>
          )}

          <h1
            className="text-[26px] font-black leading-[1.35] text-white"
            dangerouslySetInnerHTML={{ __html: heroTitle }}
          />

          {heroSub && (
            <p className="mt-3 text-[13px] leading-relaxed text-white/65">
              {heroSub}
            </p>
          )}

          {heroBullets.length > 0 && (
            <ul className="mt-4 space-y-2">
              {heroBullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[13px] text-white">
                  <span className="mt-0.5 shrink-0 text-yellow-400">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          <a
            href={telLink}
            className="mt-6 flex h-[54px] w-full items-center justify-center rounded-xl border-2 border-white/30 text-[16px] font-black text-white backdrop-blur-sm transition-opacity active:opacity-75"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            {heroCta}
          </a>
        </div>
      </section>

      {/* ══ Trust 바 ════════════════════════════════════════════════════ */}
      {trustStats.length > 0 && (
        <div className="border-b border-[#EEE] bg-[#F8F8F8]">
          <div className="flex divide-x divide-[#EEE]">
            {trustStats.map((s) => (
              <div key={s.label} className="flex flex-1 flex-col items-center py-3">
                <span className="text-[16px] font-black text-[#111]">
                  {s.value}
                </span>
                <span className="mt-0.5 text-[10px] text-[#888]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══ 메인 콘텐츠 (각 페이지에서 주입) ═══════════════════════════ */}
      <main className="pb-[100px] md:pb-10">{children}</main>

      {/* ══ FAQ ════════════════════════════════════════════════════════ */}
      {faq.length > 0 && (
        <section className="border-t border-[#EEE] bg-[#F8F8F8] px-4 py-8">
          <h2 className="mb-4 text-[16px] font-black text-[#111]">
            자주 묻는 질문
          </h2>
          <div className="space-y-2">
            {faq.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white shadow-sm">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                >
                  <span className="text-[14px] font-bold text-[#111]">
                    Q. {item.q}
                  </span>
                  <span
                    className="ml-2 shrink-0 text-[#BBB] transition-transform duration-200"
                    style={{
                      transform: faqOpen === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    ▼
                  </span>
                </button>
                {faqOpen === i && (
                  <div className="border-t border-[#F0F0F0] px-4 py-3">
                    <p className="text-[13px] leading-relaxed text-[#555]">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══ 푸터 ════════════════════════════════════════════════════════ */}
      <footer className="bg-[#111] px-5 py-7 text-center">
        <p className="text-[14px] font-bold text-white">{companyName}</p>
        <p className="mt-1 text-[12px] text-white/45">📞 {companyPhone}</p>
        <p className="mt-4 text-[10px] text-white/25">
          © 2026 양지바른웹 · 개인정보처리방침
        </p>
      </footer>

      {/* ══ 모바일 하단 고정 바 ════════════════════════════════════════ */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex">
          <a
            href={telLink}
            className="flex flex-1 items-center justify-center gap-2 bg-[#222] py-[14px] text-[14px] font-black text-white active:opacity-80"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M2.5 2a.5.5 0 01.5-.5h1.6a.5.5 0 01.47.335l.67 1.9a.5.5 0 01-.12.535l-.87.87a7.5 7.5 0 003.61 3.61l.87-.87a.5.5 0 01.535-.12l1.9.67a.5.5 0 01.335.47V11a.5.5 0 01-.5.5C5.82 11.5 2.5 8.18 2.5 4V2z"
                fill="white"
              />
            </svg>
            전화 상담
          </a>
          <a
            href={kakaoUrl}
            className="flex flex-1 items-center justify-center gap-2 bg-[#FEE500] py-[14px] text-[14px] font-black text-[#111] active:opacity-80"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M9 2.5C5.41 2.5 2.5 4.86 2.5 7.75c0 1.9 1.15 3.57 2.9 4.58l-.68 2.5 2.9-1.9A8.3 8.3 0 009 13c3.59 0 6.5-2.36 6.5-5.25S12.59 2.5 9 2.5z"
                fill="#111"
              />
            </svg>
            카카오 상담
          </a>
        </div>
      </div>
    </div>
  )
}
