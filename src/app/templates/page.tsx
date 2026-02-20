import Link from 'next/link'
import type { Metadata } from 'next'
import { TemplateGallery } from '@/components/templates/TemplateGallery'

export const metadata: Metadata = {
  title: '업종별 템플릿 — 양지바른웹',
  description: '인터넷, TV, 휴대폰, 렌탈, 중고차, 보험 등 업종별 고전환 랜딩페이지 템플릿',
}

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
          카드를 클릭하면 실제 화면을 바로 확인할 수 있습니다.
        </p>
      </section>

      {/* 템플릿 갤러리 (클라이언트 컴포넌트 — 클릭 시 모달) */}
      <section className="px-5 pb-20 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <TemplateGallery />
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
