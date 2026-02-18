'use client'

import { useState } from 'react'
import { TemplateLayout } from '@/components/templates/TemplateLayout'

const BENEFITS = [
  {
    icon: '✅',
    title: '업종 무관 즉시 적용',
    desc: '인터넷, 렌탈, 보험 등 업종에 상관없이 바로 사용 가능한 상담 신청 구조입니다.',
  },
  {
    icon: '✏️',
    title: '내용 자유롭게 커스텀',
    desc: '회사명, 연락처, 폼 항목 등 모든 내용을 원하는 대로 수정할 수 있습니다.',
  },
  {
    icon: '📱',
    title: '모바일 최적화',
    desc: '스마트폰에서도 빠르고 편하게 신청할 수 있는 모바일 퍼스트 레이아웃입니다.',
  },
]

const FAQ = [
  {
    q: '이 폼은 어떤 업종에 쓸 수 있나요?',
    a: '업종 제한 없이 사용 가능합니다. 인터넷, 보험, 렌탈, 교육, 뷰티 등 상담 신청이 필요한 모든 분야에 활용하세요.',
  },
  {
    q: '항목을 추가하거나 바꿀 수 있나요?',
    a: '네, 폼 항목은 자유롭게 수정 가능합니다. 원하시는 항목으로 맞춤 제작도 가능하오니 문의 주세요.',
  },
  {
    q: '신청 데이터는 어디로 전달되나요?',
    a: '카카오채널 알림톡, 이메일, 구글 스프레드시트 등 원하시는 채널로 수신 설정이 가능합니다.',
  },
  {
    q: '모바일에서도 잘 작동하나요?',
    a: '모바일 퍼스트로 설계되어 스마트폰에서도 빠르고 편하게 신청할 수 있습니다.',
  },
]

export default function GeneralTemplatePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: '',
    memo: '',
    agreePrivacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
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
          heroGradient: 'linear-gradient(160deg, #1F2937 0%, #111827 100%)',
          primaryColor: '#1F2937',
          companyPhone: '1588-0000',
        }}
      >
        <div className="flex flex-col items-center px-5 py-14 text-center">
          <div className="text-4xl">✅</div>
          <h2 className="mt-4 text-[20px] font-black text-[#111]">신청 완료</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#666]">
            빠른 시일 내로 담당자가 연락드립니다.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 rounded-xl bg-[#1F2937] px-6 py-3 text-[14px] font-black text-white"
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
        heroBadge: '📋 업종 무관 범용 상담 신청폼',
        heroTitle:
          '빠르고 간편하게<br/><strong style="color:#FEE500">상담 신청</strong>하세요',
        heroSub: '이름과 연락처만 남겨주시면 담당자가 바로 연락드립니다',
        heroBullets: [
          '업종 무관 즉시 사용 가능',
          '모바일 최적화 폼',
          '신청 후 빠른 연락',
        ],
        heroGradient: 'linear-gradient(160deg, #1F2937 0%, #374151 100%)',
        heroCta: '📞 지금 바로 상담 신청',
        primaryColor: '#1F2937',
        companyName: 'OO서비스',
        companyPhone: '1588-0000',
        companyHours: '09:00 ~ 18:00',
        trustStats: [
          { value: '1,000+', label: '누적 상담 건수' },
          { value: '4.8점', label: '고객 만족도' },
          { value: '당일', label: '연락 처리' },
        ],
        faq: FAQ,
      }}
    >
      {/* ── 특징 ─────────────────────────────────────────────────── */}
      <section className="px-4 py-8">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          FEATURES
        </p>
        <h2 className="mb-5 text-[18px] font-black text-[#111]">이 폼의 특징</h2>
        <div className="space-y-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-2xl bg-[#F8F8F8] p-4"
            >
              <span className="shrink-0 text-2xl">{b.icon}</span>
              <div>
                <p className="text-[14px] font-black text-[#111]">{b.title}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#666]">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 신청 폼 ──────────────────────────────────────────────── */}
      <section className="border-t border-[#EEE] px-4 py-8" id="form">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          APPLY
        </p>
        <h2 className="mb-1 text-[18px] font-black text-[#111]">상담 신청하기</h2>
        <p className="mb-5 text-[12px] text-[#888]">
          간단한 정보만 남겨주시면 담당자가 연락드립니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="이름"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#1F2937]/20"
          />
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="연락처 (010-0000-0000)"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#1F2937]/20"
          />

          <div>
            <p className="mb-2 text-[13px] font-bold text-[#555]">문의 유형</p>
            <div className="grid grid-cols-2 gap-2">
              {['구매 상담', '단순 문의', '방문 예약', '견적 요청'].map((t) => (
                <label
                  key={t}
                  className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-[13px] font-bold transition-colors ${
                    formData.inquiryType === t
                      ? 'border-[#1F2937] bg-[#F1F5F9] text-[#1F2937]'
                      : 'border-[#DDD] text-[#555]'
                  }`}
                >
                  <input
                    type="radio"
                    name="inquiryType"
                    value={t}
                    checked={formData.inquiryType === t}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {t}
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="memo"
            rows={3}
            value={formData.memo}
            onChange={handleChange}
            placeholder="문의 내용 (선택)"
            className="w-full resize-none rounded-xl border border-[#DDD] px-4 py-3 text-[15px] focus:border-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#1F2937]/20"
          />

          <label className="flex items-start gap-2.5 rounded-xl bg-[#F8F8F8] p-3.5">
            <input
              type="checkbox"
              name="agreePrivacy"
              required
              checked={formData.agreePrivacy}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 rounded accent-[#1F2937]"
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
            style={{ background: '#1F2937', boxShadow: '0 6px 24px rgba(31,41,55,0.4)' }}
          >
            {isSubmitting ? '신청 중...' : '📋 상담 신청하기'}
          </button>
        </form>
      </section>
    </TemplateLayout>
  )
}
