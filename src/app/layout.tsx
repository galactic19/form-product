import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSansKr = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: '양지바른웹 - 가입상품 전용 신청폼',
  description: '인터넷, TV, 렌탈, 보험 등 가입상품 판매자를 위한 전문 신청폼 템플릿',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
