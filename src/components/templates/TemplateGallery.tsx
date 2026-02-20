'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ─── 데이터 ────────────────────────────────────────────────────────────────────

export const TEMPLATES = [
  {
    id: 'internet',
    label: '인터넷 · TV',
    en: 'INTERNET',
    desc: '통신사별 속도·요금 비교 + 현금 지원 강조 구성',
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #1D4ED8 100%)',
    accent: '#3B82F6',
    badge: '현금 30만원',
    href: '/templates/internet',
    features: ['KT · SK · LGU+ 3사 비교', '현금/상품권 지원 강조', '당일 설치 동선'],
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
    features: ['공시지원금 계산기', '사은품 목록 강조', '즉시 개통 CTA'],
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
    features: ['월 렌탈료 전면 강조', '무료 설치 · 관리 포함', '의무 사용기간 안내'],
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
    features: ['설계사 신뢰도 강조', '무료 상담 신청 CTA', '보장 내용 비교'],
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
    features: ['매입 · 구입 탭 분리', '시세 조회 동선', '즉시 입금 강조'],
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
    features: ['업종 무관 범용 구조', '빠른 커스터마이징', '기본 상담 신청폼'],
  },
]

type Template = (typeof TEMPLATES)[number]

// ─── 모달 ──────────────────────────────────────────────────────────────────────

function TemplateModal({ t, onClose }: { t: Template; onClose: () => void }) {
  // 배경 클릭 시 닫기
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(4px)' }}
      onClick={handleBackdrop}
    >
      <div
        className="relative flex h-full max-h-[720px] w-full max-w-[900px] flex-col overflow-hidden rounded-3xl bg-white shadow-[0_32px_80px_rgba(0,0,0,0.35)]"
        style={{ animation: 'modal-in 0.22s cubic-bezier(0.34,1.56,0.64,1) both' }}
      >
        {/* ── 헤더 ── */}
        <div className="flex shrink-0 items-center justify-between border-b border-[#F0F0F0] px-6 py-4">
          <div className="flex items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white"
              style={{ background: t.accent }}
            >
              {t.en}
            </span>
            <h2 className="text-[17px] font-black tracking-[-0.02em] text-[#111]">
              {t.label}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#999] transition-colors hover:bg-[#F5F5F5] hover:text-[#111]"
            aria-label="닫기"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── 본문 ── */}
        <div className="flex flex-1 overflow-hidden flex-col md:flex-row">

          {/* 좌: 폰 프레임 미리보기 */}
          <div className="flex shrink-0 items-center justify-center bg-[#F7F7F7] px-8 py-8 md:w-[380px]">
            {/* 폰 외곽 */}
            <div
              className="relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
              style={{
                width: 300,
                height: 560,
                borderRadius: 36,
                border: '8px solid #1A1A1A',
                background: '#1A1A1A',
              }}
            >
              {/* 상단 노치 */}
              <div
                className="absolute left-1/2 top-0 z-10 -translate-x-1/2"
                style={{
                  width: 100,
                  height: 22,
                  background: '#1A1A1A',
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                }}
              />
              {/* iframe */}
              <iframe
                src={t.href}
                title={`${t.label} 미리보기`}
                style={{
                  width: '130%',
                  height: '130%',
                  transform: 'scale(0.769)',
                  transformOrigin: 'top left',
                  border: 'none',
                  borderRadius: 28,
                  background: '#fff',
                }}
              />
              {/* 하단 홈 인디케이터 */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <div className="h-1 w-16 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

          {/* 우: 정보 패널 */}
          <div className="flex flex-1 flex-col justify-between overflow-y-auto p-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
                TEMPLATE
              </p>
              <h3 className="mt-2 text-[28px] font-black leading-[1.1] tracking-[-0.04em] text-[#111]">
                {t.label}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.8] text-[#777]">{t.desc}</p>

              {/* 특징 */}
              <div className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] text-white"
                      style={{ background: t.accent }}
                    >
                      ✓
                    </span>
                    <span className="text-[13px] font-medium text-[#444]">{f}</span>
                  </div>
                ))}
              </div>

              {/* 뱃지 */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2" style={{ borderColor: `${t.accent}40`, background: `${t.accent}10` }}>
                <span className="text-[11px] font-black" style={{ color: t.accent }}>
                  🎁 {t.badge}
                </span>
                <span className="text-[11px] text-[#999]">강조 혜택</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-2.5">
              <Link
                href="/#contact"
                className="flex h-[48px] items-center justify-center rounded-xl bg-[#111] text-[14px] font-black text-white transition-opacity hover:opacity-80"
                onClick={onClose}
              >
                이 템플릿으로 제작 문의
              </Link>
              <button
                onClick={onClose}
                className="flex h-[44px] items-center justify-center rounded-xl text-[13px] font-medium text-[#AAA] transition-colors hover:text-[#555]"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── 갤러리 ────────────────────────────────────────────────────────────────────

export function TemplateGallery() {
  const [selected, setSelected] = useState<Template | null>(null)

  // 모달 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  // ESC 키로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelected(t)}
            className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)]"
          >
            {/* iframe 미리보기 */}
            <div className="relative h-[480px] overflow-hidden bg-[#F4F4F4]">
              <iframe
                src={t.href}
                title={`${t.label} 템플릿 미리보기`}
                loading="lazy"
                style={{
                  width: '200%',
                  height: '200%',
                  transform: 'scale(0.5)',
                  transformOrigin: 'top left',
                  pointerEvents: 'none',
                  border: 'none',
                }}
              />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="rounded-full bg-white px-5 py-2.5 text-[13px] font-black text-[#111] shadow-lg">
                  자세히 보기 →
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
                  <p className="mt-1 text-[12px] leading-[1.6] text-[#888]">{t.desc}</p>
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
          </button>
        ))}
      </div>

      {/* 모달 */}
      {selected && <TemplateModal t={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
