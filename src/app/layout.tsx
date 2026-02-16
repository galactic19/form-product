import type { Metadata } from 'next'
import { Geist_Mono, Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingButtons } from '@/components/FloatingButtons'

const notoSansKr = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '양지바른웹 - 가입상품 전용 신청폼 | 템플릿 & 구독 서비스',
  description: '인터넷, TV, 렌탈, 보험 등 가입상품 판매자를 위한 전문 신청폼. 카카오톡 대신 전용 원페이지로 고객 이탈 방지. 템플릿 구매부터 구독형 관리까지.',
  keywords: ['가입상품', '신청폼', '영업폼', '랜딩페이지', '인터넷가입', 'TV가입', '렌탈상품', '보험상품'],
  authors: [{ name: '양지바른웹' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: '양지바른웹 - 가입상품 전용 신청폼',
    description: '가입상품 판매자를 위한 전문 신청폼 솔루션',
    siteName: '양지바른웹',
  },
  twitter: {
    card: 'summary_large_image',
    title: '양지바른웹 - 가입상품 전용 신청폼',
    description: '가입상품 판매자를 위한 전문 신청폼 솔루션',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} ${geistMono.variable} font-korean antialiased`}>
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
