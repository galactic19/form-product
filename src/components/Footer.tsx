import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  product: [
    { name: '기능', href: '#features' },
    { name: '가격', href: '#pricing' },
    { name: '템플릿', href: '#templates' },
    { name: '구독', href: '#subscription' },
  ],
  company: [
    { name: '소개', href: '#about' },
    { name: '블로그', href: '#blog' },
    { name: '채용', href: '#careers' },
    { name: '연락처', href: '#contact' },
  ],
  support: [
    { name: 'FAQ', href: '#faq' },
    { name: '문서', href: '#docs' },
    { name: '커뮤니티', href: '#community' },
    { name: '상태', href: '#status' },
  ],
  legal: [
    { name: '이용약관', href: '#terms' },
    { name: '개인정보처리방침', href: '#privacy' },
    { name: '쿠키 정책', href: '#cookies' },
  ],
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@form.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-border-strong bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
              FORM
            </Link>
            <p className="mt-4 text-sm text-foreground-muted">
              폼 디자인을 단순하게, 강력하게.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">제품</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">회사</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">지원</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">법률</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-foreground-subtle">
            © {new Date().getFullYear()} FORM. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 border border-border bg-background hover:border-primary transition-all cursor-pointer"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5 text-foreground-muted hover:text-primary transition-colors" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
