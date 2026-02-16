'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: '홈', href: '/' },
  { name: '솔루션', href: '#solution' },
  { name: '가격', href: '#pricing' },
  { name: '후기', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 sm:left-6 sm:right-6 z-40 animate-fade-in">
      <nav className="border border-border bg-background px-4 sm:px-6 py-3 sm:py-4 transition-all hover:border-primary">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            FORM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground-muted hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#pricing"
              className="px-6 py-2 border border-primary bg-primary text-primary-foreground font-medium hover:bg-primary-dark hover:border-primary-dark transition-all cursor-pointer"
            >
              시작하기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            aria-label="메뉴 열기/닫기"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-foreground-muted hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-2 border border-primary bg-primary text-primary-foreground font-medium hover:bg-primary-dark hover:border-primary-dark transition-all cursor-pointer"
            >
              시작하기
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
