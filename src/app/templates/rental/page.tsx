'use client'

import { useState } from 'react'
import { TemplateLayout } from '@/components/templates/TemplateLayout'

const PRODUCTS = [
  { name: '직수형 정수기', price: '29,900', unit: '월', icon: '💧', tag: '인기 1위' },
  { name: '스탠드 공기청정기', price: '19,900', unit: '월', icon: '🌬️', tag: '' },
  { name: '냉온 정수기', price: '35,900', unit: '월', icon: '🧊', tag: '' },
  { name: '안마의자', price: '49,900', unit: '월', icon: '🪑', tag: '프리미엄' },
]

const BENEFITS = [
  {
    icon: '🔧',
    title: '전문 기사 무료 설치',
    desc: '설치비·철거비 모두 무료. 전문 코디가 직접 방문해 최적 위치에 설치합니다.',
  },
  {
    icon: '🔄',
    title: '정기 관리 서비스 포함',
    desc: '필터 교체·살균 세척을 주기적으로 방문 진행. 위생 걱정 없이 사용하세요.',
  },
  {
    icon: '💰',
    title: '첫 달 무료 + 현금 지원',
    desc: '신규 가입 시 첫 달 무료 + 최대 현금 20만원 별도 지원. 지금이 기회입니다.',
  },
]

const FAQ = [
  {
    q: '계약 기간 중에 해지할 수 있나요?',
    a: '중도 해지가 가능하나, 잔여 기간에 따른 위약금이 발생할 수 있습니다. 상담 시 자세히 안내드립니다.',
  },
  {
    q: '이사를 가면 어떻게 되나요?',
    a: '이사 후 새 주소로 무료 재설치 서비스를 제공합니다. 이사 7일 전에 연락 주시면 됩니다.',
  },
  {
    q: '필터 교체 비용은 따로 내야 하나요?',
    a: '아닙니다. 렌탈료에 정기 필터 교체가 포함되어 있어 추가 비용 없이 관리됩니다.',
  },
  {
    q: '체험 기간이 있나요?',
    a: '일부 제품은 30일 무료 체험 프로그램이 있습니다. 상담 시 확인해 주세요.',
  },
]

export default function RentalTemplatePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    product: '',
    agreePrivacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 900))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <TemplateLayout
        config={{
          heroTitle: '신청이 완료되었습니다!',
          heroGradient: 'linear-gradient(160deg, #0C4A6E 0%, #0284C7 100%)',
          primaryColor: '#0284C7',
          companyPhone: '1588-0000',
        }}
      >
        <div className="flex flex-col items-center px-5 py-14 text-center">
          <div className="text-4xl">✅</div>
          <h2 className="mt-4 text-[20px] font-black text-[#111]">신청 완료</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#666]">
            24시간 이내로 담당자가 연락드립니다.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 rounded-xl bg-[#0284C7] px-6 py-3 text-[14px] font-black text-white"
          >
            다시 신청하기
          </button>
        </div>
      </TemplateLayout>
    )
  }

  return (
    <TemplateLayout
      config={{
        heroBadge: '💧 첫 달 무료 + 설치비 0원 이벤트',
        heroTitle:
          '정수기·공기청정기<br/><strong style="color:#FEE500">첫 달 무료</strong>로<br/>시작하세요',
        heroSub: '전문 기사 무료 설치 · 정기 관리 서비스 포함 · 현금 최대 20만원 지원',
        heroBullets: [
          '설치비 · 철거비 모두 무료',
          '정기 필터 교체 포함',
          '이사 시 무료 재설치',
        ],
        heroGradient: 'linear-gradient(160deg, #0C4A6E 0%, #0284C7 100%)',
        heroCta: '📞 지금 전화하면 바로 안내드립니다',
        primaryColor: '#0284C7',
        companyName: 'OO렌탈 대리점',
        companyPhone: '1588-0000',
        companyHours: '09:00 ~ 21:00',
        trustStats: [
          { value: '34,000+', label: '누적 렌탈 가구' },
          { value: '5년', label: '평균 이용 기간' },
          { value: '98.5%', label: '재계약률' },
        ],
        faq: FAQ,
      }}
    >
      {/* ── 혜택 ─────────────────────────────────────────────────── */}
      <section className="px-4 py-8">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          BENEFITS
        </p>
        <h2 className="mb-5 text-[18px] font-black text-[#111]">
          렌탈 선택 이유
        </h2>
        <div className="space-y-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-2xl bg-[#F0F9FF] p-4"
            >
              <span className="shrink-0 text-2xl">{b.icon}</span>
              <div>
                <p className="text-[14px] font-black text-[#111]">{b.title}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#666]">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 상품 ─────────────────────────────────────────────────── */}
      <section className="border-t border-[#EEE] bg-[#F8F8F8] px-4 py-8">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          PRODUCTS
        </p>
        <h2 className="mb-5 text-[18px] font-black text-[#111]">
          주요 렌탈 상품
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="relative rounded-2xl border-2 border-[#EEE] bg-white p-4"
            >
              {p.tag && (
                <span className="absolute right-3 top-3 rounded-full bg-[#0284C7] px-2 py-0.5 text-[9px] font-black text-white">
                  {p.tag}
                </span>
              )}
              <span className="text-2xl">{p.icon}</span>
              <p className="mt-2 text-[13px] font-black text-[#111]">
                {p.name}
              </p>
              <p className="mt-1 text-[11px] text-[#888]">
                월{' '}
                <strong className="text-[18px] font-black text-[#111]">
                  {p.price}
                </strong>
                원~
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-[#AAA]">
          * 모델 · 계약 기간에 따라 금액이 달라질 수 있습니다.
        </p>
      </section>

      {/* ── 신청 폼 ──────────────────────────────────────────────── */}
      <section className="px-4 py-8" id="form">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          APPLY
        </p>
        <h2 className="mb-1 text-[18px] font-black text-[#111]">
          무료 상담 신청
        </h2>
        <p className="mb-5 text-[12px] text-[#888]">
          연락처만 남겨주시면 최적 상품을 안내해 드립니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="이름"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
          />
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="연락처 (010-0000-0000)"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="설치 주소 (선택)"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20"
          />

          <div>
            <p className="mb-2 text-[13px] font-bold text-[#555]">
              관심 상품
            </p>
            <div className="grid grid-cols-2 gap-2">
              {['정수기', '공기청정기', '안마의자', '기타'].map((p) => (
                <label
                  key={p}
                  className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-[13px] font-bold transition-colors ${
                    formData.product === p
                      ? 'border-[#0284C7] bg-[#F0F9FF] text-[#0284C7]'
                      : 'border-[#DDD] text-[#555]'
                  }`}
                >
                  <input
                    type="radio"
                    name="product"
                    value={p}
                    checked={formData.product === p}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {p}
                </label>
              ))}
            </div>
          </div>

          <label className="flex items-start gap-2.5 rounded-xl bg-[#F8F8F8] p-3.5">
            <input
              type="checkbox"
              name="agreePrivacy"
              required
              checked={formData.agreePrivacy}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 rounded accent-[#0284C7]"
            />
            <span className="text-[12px] text-[#666]">
              <strong className="text-[#333]">[필수]</strong> 개인정보 수집 및
              이용에 동의합니다.
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-[56px] w-full items-center justify-center rounded-xl text-[16px] font-black text-white shadow-lg transition-all active:opacity-80 disabled:opacity-60"
            style={{ background: '#0284C7', boxShadow: '0 6px 24px rgba(2,132,199,0.4)' }}
          >
            {isSubmitting ? '신청 중...' : '📋 무료 상담 신청하기'}
          </button>
        </form>
      </section>
    </TemplateLayout>
  )
}
