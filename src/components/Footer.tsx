import Link from 'next/link'

const footerLinks = {
  product: [
    { name: 'Templates', href: '#solution' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ],
  contact: [
    { name: 'contact@form.kr', href: 'mailto:contact@form.kr' },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              양지바른웹
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
              가입상품 영업자를 위한 전용 신청폼 서비스
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Links</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Contact</h3>
              <ul className="space-y-3">
                {footerLinks.contact.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 양지바른웹. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
