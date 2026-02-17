'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'

const navigation = [
  { name: '홈', href: '/' },
  { name: '솔루션', href: '#solution' },
  { name: '가격', href: '#pricing' },
  { name: '후기', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-6 left-0 right-0 z-50 mx-auto max-w-7xl px-6 transition-all duration-300",
      scrolled ? "top-4" : "top-6"
    )}>
      <nav className={cn(
        "flex items-center justify-between rounded-full border border-border bg-white/5 px-6 py-3 backdrop-blur-md transition-all duration-300",
        scrolled && "bg-background/80 shadow-lg border-border"
      )}>
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
        >
          양지바른웹
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-2">
            <ThemeToggle />
            <Link
              href="#pricing"
              className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:scale-105"
            >
              시작하기
            </Link>
          </div>
        </div>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            aria-label="메뉴 열기/닫기"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-6 right-6 mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-4 md:hidden animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 block w-full rounded-xl bg-primary px-4 py-3 text-center font-bold text-white hover:bg-primary/90 transition-colors"
            >
              시작하기
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
