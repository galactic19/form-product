import { chromium } from '@playwright/test'

const browser = await chromium.launch({ headless: false })
const page = await browser.newPage()
await page.setViewportSize({ width: 1280, height: 800 })
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })

// 히어로 애니메이션 완전 완료 대기 (타임라인 약 2.5s + 여유)
await page.waitForTimeout(3500)

const result = await page.evaluate(() => {
  const info = (el) => ({
    opacity: parseFloat(window.getComputedStyle(el).opacity).toFixed(3),
    transform: window.getComputedStyle(el).transform,
    text: el.textContent?.trim().substring(0, 20),
  })
  return {
    heroLines: Array.from(document.querySelectorAll('.js-hero-line')).map(info),
    heroBadge: Array.from(document.querySelectorAll('.js-hero-badge')).map(info),
    heroBtns: Array.from(document.querySelectorAll('.js-hero-btn')).map(info),
    heroMeta: document.querySelector('.js-hero-meta') ? info(document.querySelector('.js-hero-meta')) : null,
  }
})

console.log('[히어로 라인 (텍스트)]')
result.heroLines.forEach(l => console.log(`  "${l.text}" opacity=${l.opacity} transform=${l.transform}`))
console.log('\n[히어로 배지]', result.heroBadge.map(b => `opacity=${b.opacity}`))
console.log('[히어로 버튼]', result.heroBtns.map(b => `opacity=${b.opacity} "${b.text}"`))
console.log('[히어로 메타]', result.heroMeta?.opacity)

await page.screenshot({ path: 'D:/dev/form-product/hero-check.png' })
await browser.close()
