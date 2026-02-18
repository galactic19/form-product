import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '업종별 템플릿 — 양지바른웹',
  description: '인터넷, TV, 휴대폰, 렌탈, 중고차, 보험 등 업종별 고전환 랜딩페이지 템플릿',
}

const TEMPLATES = [
  {
    id: 'internet',
    label: '인터넷 · TV',
    en: 'INTERNET',
    desc: '통신사별 속도·요금 비교 + 현금 지원 강조 구성',
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #1D4ED8 100%)',
    accent: '#3B82F6',
    badge: '현금 30만원',
    href: '/templates/internet',
  },
  {
    id: 'mobile',
    label: '휴대폰',
    en: 'MOBILE',
    desc: '공시지원금 + 사은품 강조, 즉시 개통 동선',
    gradient: 'linear-gradient(135deg, #1A0533 0%, #4C1D95 100%)',
    accent: '#8B5CF6',
    badge: '0원 개통',
    href: '/templates/mobile',
  },
  {
    id: 'rental',
    label: '렌탈',
    en: 'RENTAL',
    desc: '월 비용 강조 + 무료 설치 + 정기 관리 서비스',
    gradient: 'linear-gradient(135deg, #0C4A6E 0%, #0284C7 100%)',
    accent: '#0EA5E9',
    badge: '첫 달 무료',
    href: '/templates/rental',
  },
  {
    id: 'insurance',
    label: '보험',
    en: 'INSURANCE',
    desc: '신뢰도 중심 + 전문 설계사 무료 상담 동선',
    gradient: 'linear-gradient(135deg, #064E3B 0%, #059669 100%)',
    accent: '#10B981',
    badge: '무료 점검',
    href: '/templates/insurance',
  },
  {
    id: 'usedcar',
    label: '중고차',
    en: 'USED CAR',
    desc: '매입/구입 탭 분리 + 최고가 매입 강조 구성',
    gradient: 'linear-gradient(135deg, #431407 0%, #B45309 100%)',
    accent: '#F97316',
    badge: '최고가 매입',
    href: '/templates/usedcar',
  },
  {
    id: 'general',
    label: '범용',
    en: 'GENERAL',
    desc: '업종 무관 기본 상담 신청폼 구조',
    gradient: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
    accent: '#6B7280',
    badge: '커스텀',
    href: '/templates/general',
  },
]

export default function TemplatesPage() {
  return (
    <div
      className="min-h-screen bg-[#F6F5F1]"
      style={{ fontFamily: "'Noto Sans KR', system-ui, sans-serif" }}
    >
      {/* 헤더 */}
      <header className="border-b border-[#111]/8 bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            href="/"
            className="text-[13px] font-black tracking-[0.18em] text-[#111]"
          >
            ← 양지바른웹
          </Link>
          <span className="text-[12px] text-[#888]">업종별 템플릿</span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-5 py-14 text-center md:py-20">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#BBB]">
          TEMPLATES
        </p>
        <h1 className="text-[clamp(1.8rem,5vw,3rem)] font-black leading-[1.1] tracking-[-0.04em] text-[#111]">
          업종별 고전환 템플릿
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[14px] leading-[1.8] text-[#888]">
          각 업종의 소비자 심리에 맞게 설계된 랜딩페이지 템플릿.
          <br />
          이미지와 연락처만 교체하면 바로 운영 가능합니다.
        </p>
      </section>

      {/* 템플릿 그리드 */}
      <section className="px-5 pb-20 md:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATES.map((t) => (
            <Link
              key={t.id}
              href={t.href}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)]"
            >
              {/* 미리보기 */}
              <div
                className="relative flex h-[180px] flex-col justify-between p-5"
                style={{ background: t.gradient }}
              >
                {/* 배지 */}
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-yellow-400 px-2.5 py-1 text-[10px] font-black text-[#111]">
                    🎁 {t.badge}
                  </span>
                  <span className="rounded-full border border-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white/50">
                    {t.en}
                  </span>
                </div>

                {/* 모바일 폼 목업 */}
                <div className="space-y-2">
                  <div className="h-2.5 w-3/4 rounded-full bg-white/30" />
                  <div className="h-2 w-1/2 rounded-full bg-white/20" />
                  <div
                    className="mt-3 h-8 w-full rounded-lg"
                    style={{ backgroundColor: `${t.accent}90` }}
                  />
                </div>

                {/* 오버레이 — 호버시 미리보기 */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-[13px] font-black text-[#111]">
                    미리보기 →
                  </span>
                </div>
              </div>

              {/* 정보 */}
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[16px] font-black tracking-[-0.03em] text-[#111]">
                      {t.label}
                    </p>
                    <p className="mt-1 text-[12px] leading-[1.6] text-[#888]">
                      {t.desc}
                    </p>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="mt-0.5 shrink-0 text-[#DDD] transition-colors group-hover:text-[#111]"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 9h12M10 4l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#111]/8 bg-[#111] px-5 py-14 text-center">
        <h2 className="text-[clamp(1.4rem,4vw,2rem)] font-black tracking-[-0.03em] text-white">
          원하는 템플릿이 없으신가요?
        </h2>
        <p className="mt-2 text-[14px] text-white/50">
          업종과 요구사항을 알려주시면 맞춤 제작해 드립니다.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:contact@form.kr"
            className="inline-flex h-[48px] items-center rounded-full bg-[#E8522A] px-6 text-[13px] font-black text-white transition-all hover:opacity-90"
          >
            맞춤 제작 문의
          </a>
          <Link
            href="/"
            className="inline-flex h-[48px] items-center rounded-full border border-white/20 px-6 text-[13px] font-black text-white transition-colors hover:bg-white/10"
          >
            서비스 소개 보기
          </Link>
        </div>
      </section>
    </div>
  )
}
