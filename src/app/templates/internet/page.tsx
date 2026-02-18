'use client'

import { useState } from 'react'
import { TemplateLayout } from '@/components/templates/TemplateLayout'

const PACKAGES = [
  {
    name: '인터넷 단독',
    speed: '500Mbps',
    price: '19,800',
    tag: '',
  },
  {
    name: '인터넷 + TV',
    speed: '500Mbps + 채널 100+',
    price: '27,500',
    tag: '인기',
  },
  {
    name: '인터넷 + TV + 전화',
    speed: '1Gbps + 채널 200+',
    price: '33,000',
    tag: '최고가성비',
  },
]

const BENEFITS = [
  {
    icon: '💰',
    title: '현금 지원 최대 30만원',
    desc: '가입 즉시 현금 또는 상품권으로 지급. 타 대리점 비교 후 최저가 보장.',
  },
  {
    icon: '🔧',
    title: '설치비 무료 + 당일 설치',
    desc: '전문 기사 방문 설치, 케이블 정리까지. 신청 당일 설치 가능합니다.',
  },
  {
    icon: '📋',
    title: 'KT · SK · LGU+ 3사 통합',
    desc: '3개 통신사 최저가 요금제를 한 곳에서 비교하고 바로 신청하세요.',
  },
]

const FAQ = [
  {
    q: '설치비가 정말 무료인가요?',
    a: '네, 설치비는 100% 무료입니다. 다만 아파트 이외 건물의 경우 공사비가 발생할 수 있어 사전 안내 드립니다.',
  },
  {
    q: '현금 지원은 언제 받을 수 있나요?',
    a: '개통 완료 후 7영업일 이내 지급됩니다. 계좌 이체 또는 상품권 중 선택 가능합니다.',
  },
  {
    q: '약정 기간이 있나요?',
    a: '기본 2년 약정이며, 약정 없는 상품도 있습니다. 상담 시 원하시는 조건으로 안내해 드립니다.',
  },
  {
    q: '기존 통신사에서 바꿀 수 있나요?',
    a: '물론입니다. 기존 통신사 해지 절차부터 새 통신사 개통까지 저희가 도와드립니다.',
  },
]

export default function InternetTemplatePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    productType: 'internet-tv',
    provider: '',
    agreePrivacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
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
          heroGradient: 'linear-gradient(160deg, #1E3A5F 0%, #1D4ED8 100%)',
          primaryColor: '#2563EB',
          companyPhone: '1588-0000',
        }}
      >
        <div className="flex flex-col items-center px-5 py-14 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
            ✅
          </div>
          <h2 className="mt-4 text-[20px] font-black text-[#111]">
            신청 완료
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#666]">
            빠른 시일 내로 담당자가 연락드립니다.
            <br />
            보통 30분 이내 연락 드립니다.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 rounded-xl bg-[#2563EB] px-6 py-3 text-[14px] font-black text-white"
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
        heroBadge: '🎁 2026 특별 이벤트 — 현금 최대 30만원',
        heroTitle:
          '인터넷 가입하고<br/><strong style="color:#FEE500">현금 30만원</strong><br/>바로 받으세요',
        heroSub: 'KT · SK브로드밴드 · LGU+ 3사 최저가 비교 후 즉시 신청',
        heroBullets: [
          '설치비 전액 무료',
          '약정 없는 특가 요금 가능',
          '당일 설치 · 당일 개통',
        ],
        heroGradient: 'linear-gradient(160deg, #1E3A5F 0%, #1D4ED8 100%)',
        heroCta: '📞 지금 전화하면 바로 연결됩니다',
        primaryColor: '#2563EB',
        companyName: 'OO인터넷 대리점',
        companyPhone: '1588-0000',
        companyHours: '09:00 ~ 21:00',
        trustStats: [
          { value: '12,847건', label: '누적 설치 완료' },
          { value: '98%', label: '고객 만족도' },
          { value: '24시간↓', label: '평균 설치 소요' },
        ],
        faq: FAQ,
      }}
    >
      {/* ── 혜택 ──────────────────────────────────────────────────── */}
      <section className="px-4 py-8">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          WHY US
        </p>
        <h2 className="mb-5 text-[18px] font-black text-[#111]">
          왜 저희 대리점인가요?
        </h2>
        <div className="space-y-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-2xl bg-[#F8F9FF] p-4"
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

      {/* ── 요금제 ────────────────────────────────────────────────── */}
      <section className="border-t border-[#EEE] bg-[#F8F8F8] px-4 py-8">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          PACKAGES
        </p>
        <h2 className="mb-5 text-[18px] font-black text-[#111]">
          요금제 비교
        </h2>
        <div className="space-y-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border-2 p-4 ${
                pkg.tag === '인기'
                  ? 'border-[#2563EB] bg-white'
                  : 'border-[#EEE] bg-white'
              }`}
            >
              {pkg.tag && (
                <span className="absolute right-4 top-4 rounded-full bg-[#2563EB] px-2.5 py-0.5 text-[10px] font-black text-white">
                  {pkg.tag}
                </span>
              )}
              <p className="text-[13px] font-bold text-[#888]">{pkg.name}</p>
              <p className="mt-1 text-[12px] text-[#AAA]">{pkg.speed}</p>
              <p className="mt-2">
                <span className="text-[11px] text-[#888]">월 </span>
                <span className="text-[24px] font-black text-[#111]">
                  {pkg.price}
                </span>
                <span className="text-[11px] text-[#888]">원~</span>
              </p>
            </div>
          ))}
          <p className="text-[11px] text-[#AAA]">
            * 요금은 통신사 · 지역 · 계약 조건에 따라 달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* ── 간편 신청 폼 ──────────────────────────────────────────── */}
      <section className="px-4 py-8" id="form">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          APPLY
        </p>
        <h2 className="mb-1 text-[18px] font-black text-[#111]">
          간편 신청하기
        </h2>
        <p className="mb-5 text-[12px] text-[#888]">
          이름과 연락처만 남겨주시면 담당자가 연락드립니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="이름"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          />
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="연락처 (010-0000-0000)"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="설치 주소 (선택)"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
          />

          <div className="grid grid-cols-2 gap-2">
            {['KT', 'SK브로드밴드', 'LGU+', '상관없음'].map((p) => (
              <label
                key={p}
                className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-[13px] font-bold transition-colors ${
                  formData.provider === p
                    ? 'border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]'
                    : 'border-[#DDD] text-[#555]'
                }`}
              >
                <input
                  type="radio"
                  name="provider"
                  value={p}
                  checked={formData.provider === p}
                  onChange={handleChange}
                  className="sr-only"
                />
                {p}
              </label>
            ))}
          </div>

          <label className="flex items-start gap-2.5 rounded-xl bg-[#F8F8F8] p-3.5">
            <input
              type="checkbox"
              name="agreePrivacy"
              required
              checked={formData.agreePrivacy}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 rounded accent-[#2563EB]"
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
            style={{
              background: '#2563EB',
              boxShadow: '0 6px 24px rgba(37,99,235,0.4)',
            }}
          >
            {isSubmitting ? '신청 중...' : '📋 신청하기 (무료 상담)'}
          </button>
        </form>
      </section>
    </TemplateLayout>
  )
}
