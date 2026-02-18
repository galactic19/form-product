'use client'

import { useState } from 'react'

function generateTemplateHTML(
  formHTML: string,
  config: {
    topImage?: string
    bottomImage?: string
    brandColor: string
    companyName: string
    companyPhone: string
    companyAddress?: string
    businessNumber?: string
  },
): string {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.companyName} 상담 신청</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif; background: #F8F9FA; color: #111; }
    .container { max-width: 480px; margin: 0 auto; background: white; min-height: 100vh; }
    .top-image { width: 100%; display: block; }
    .form-wrap { padding: 24px 20px; }
    .form-title { font-size: 22px; font-weight: 900; color: #111; margin-bottom: 6px; }
    .form-subtitle { font-size: 13px; color: #888; margin-bottom: 24px; }
    .form-group { margin-bottom: 14px; }
    .form-label { font-size: 13px; font-weight: 700; color: #333; margin-bottom: 6px; display: block; }
    .required { color: #E8522A; }
    .form-input, .form-select, .form-textarea {
      width: 100%; border: 1.5px solid #DDD; border-radius: 12px;
      padding: 14px 16px; font-size: 15px; font-family: inherit;
      outline: none; transition: border-color 0.2s;
    }
    .form-input:focus, .form-select:focus, .form-textarea:focus {
      border-color: ${config.brandColor};
      box-shadow: 0 0 0 3px ${config.brandColor}20;
    }
    .form-textarea { resize: vertical; }
    .radio-group, .checkbox-group { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .radio-label, .checkbox-label {
      display: flex; align-items: center; gap: 8px; padding: 12px;
      border: 1.5px solid #DDD; border-radius: 12px;
      font-size: 13px; font-weight: 700; cursor: pointer;
    }
    .agreement-box { background: #F8F8F8; border-radius: 12px; padding: 14px; margin-bottom: 14px; }
    .agreement-label { display: flex; align-items: flex-start; gap: 10px; font-size: 12px; color: #666; cursor: pointer; }
    .submit-btn {
      width: 100%; height: 56px; background: ${config.brandColor}; color: white;
      border: none; border-radius: 12px; font-size: 16px; font-weight: 900; cursor: pointer;
      box-shadow: 0 6px 20px ${config.brandColor}40;
    }
    .bottom-image { width: 100%; display: block; }
    .footer { background: #111; padding: 28px 20px; text-align: center; }
    .footer-name { font-size: 14px; font-weight: 700; color: white; }
    .footer-phone { font-size: 12px; color: rgba(255,255,255,0.45); margin-top: 4px; }
    .footer-copy { font-size: 10px; color: rgba(255,255,255,0.25); margin-top: 16px; }
  </style>
</head>
<body>
  <div class="container">
    ${config.topImage ? `<img src="${config.topImage}" alt="상단 이미지" class="top-image">` : ''}
    <div class="form-wrap">
      ${formHTML}
    </div>
    ${config.bottomImage ? `<img src="${config.bottomImage}" alt="하단 이미지" class="bottom-image">` : ''}
    <footer class="footer">
      <p class="footer-name">${config.companyName}</p>
      <p class="footer-phone">📞 ${config.companyPhone}</p>
      ${config.companyAddress ? `<p class="footer-phone">${config.companyAddress}</p>` : ''}
      ${config.businessNumber ? `<p class="footer-phone">사업자번호: ${config.businessNumber}</p>` : ''}
      <p class="footer-copy">© 2026 양지바른웹</p>
    </footer>
  </div>
</body>
</html>`
}

export default function ExportPage() {
  const [selectedTemplate, setSelectedTemplate] = useState('internet')
  const [config, setConfig] = useState({
    topImage: '',
    bottomImage: '',
    brandColor: '#2563EB',
    companyName: 'OO대리점',
    companyPhone: '1588-XXXX',
    companyAddress: '',
    businessNumber: '',
  })
  const [showHTML, setShowHTML] = useState(false)
  const [generatedHTML, setGeneratedHTML] = useState('')

  const templates = {
    internet: {
      name: '인터넷/TV',
      formHTML: `
        <h1 class="form-title">인터넷/TV 가입 신청</h1>
        <p class="form-subtitle">최적의 요금제를 추천해 드립니다</p>
        
        <form>
          <div class="form-group">
            <label class="form-label">이름 <span class="required">*</span></label>
            <input type="text" class="form-input" placeholder="홍길동" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">연락처 <span class="required">*</span></label>
            <input type="tel" class="form-input" placeholder="010-0000-0000" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">설치 주소 <span class="required">*</span></label>
            <input type="text" class="form-input" placeholder="서울시 강남구 테헤란로 123" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">상품 유형 <span class="required">*</span></label>
            <select class="form-select" required>
              <option value="">선택해주세요</option>
              <option value="internet-only">인터넷 단독</option>
              <option value="internet-tv">인터넷 + TV</option>
              <option value="internet-phone">인터넷 + 전화</option>
              <option value="internet-tv-phone">인터넷 + TV + 전화</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label">희망 통신사</label>
            <div class="radio-group">
              <label class="radio-label"><input type="radio" name="provider" value="KT"> KT</label>
              <label class="radio-label"><input type="radio" name="provider" value="SK"> SK브로드밴드</label>
              <label class="radio-label"><input type="radio" name="provider" value="LG"> LG U+</label>
              <label class="radio-label"><input type="radio" name="provider" value="current"> 현재 사용 중</label>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">희망 설치일</label>
            <input type="date" class="form-input">
          </div>
          
          <div class="form-group">
            <label class="form-label">추가 문의사항</label>
            <textarea class="form-textarea" rows="3" placeholder="요금제 문의나 특이사항이 있으시면 입력해주세요"></textarea>
          </div>
          
          <div class="agreement-box">
            <label class="agreement-label">
              <input type="checkbox" required>
              <span class="agreement-text"><strong>[필수]</strong> 개인정보 수집 및 이용에 동의합니다.</span>
            </label>
          </div>
          
          <button type="submit" class="submit-btn">신청하기</button>
        </form>
      `,
      defaultColor: '#2563EB',
    },
    rental: {
      name: '정수기/렌탈',
      formHTML: `
        <h1 class="form-title">정수기/렌탈 상담 신청</h1>
        <p class="form-subtitle">최적의 제품과 혜택을 안내해 드립니다</p>
        
        <form>
          <div class="form-group">
            <label class="form-label">이름 <span class="required">*</span></label>
            <input type="text" class="form-input" placeholder="홍길동" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">연락처 <span class="required">*</span></label>
            <input type="tel" class="form-input" placeholder="010-0000-0000" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">설치 주소 <span class="required">*</span></label>
            <input type="text" class="form-input" placeholder="서울시 강남구 테헤란로 123" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">관심 제품 <span class="required">*</span></label>
            <select class="form-select" required>
              <option value="">선택해주세요</option>
              <option value="water">정수기</option>
              <option value="air">공기청정기</option>
              <option value="bed">매트리스</option>
              <option value="etc">기타 (비데, 안마의자 등)</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label">렌탈 기간</label>
            <div class="radio-group">
              <label class="radio-label"><input type="radio" name="period" value="3"> 3년</label>
              <label class="radio-label"><input type="radio" name="period" value="5"> 5년</label>
              <label class="radio-label"><input type="radio" name="period" value="unlimited"> 무기한</label>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">사은품 선호도</label>
            <div class="radio-group">
              <label class="radio-label"><input type="radio" name="gift" value="cash"> 현금 최대</label>
              <label class="radio-label"><input type="radio" name="gift" value="appliance"> 가전제품</label>
              <label class="radio-label"><input type="radio" name="gift" value="point"> 포인트 적립</label>
            </div>
          </div>
          
          <div class="agreement-box">
            <label class="agreement-label">
              <input type="checkbox" required>
              <span class="agreement-text"><strong>[필수]</strong> 개인정보 수집 및 이용에 동의합니다.</span>
            </label>
          </div>
          
          <button type="submit" class="submit-btn">상담 신청하기</button>
        </form>
      `,
      defaultColor: '#0891B2',
    },
    insurance: {
      name: '보험 상담',
      formHTML: `
        <h1 class="form-title">보험 상담 신청</h1>
        <p class="form-subtitle">당신에게 꼭 필요한 보험을 설계해 드립니다</p>
        
        <form>
          <div class="form-group">
            <label class="form-label">이름 <span class="required">*</span></label>
            <input type="text" class="form-input" placeholder="홍길동" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">연락처 <span class="required">*</span></label>
            <input type="tel" class="form-input" placeholder="010-0000-0000" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">관심 보험 <span class="required">*</span></label>
            <div class="checkbox-group">
              <label class="checkbox-label"><input type="checkbox" value="life"> 생명보험</label>
              <label class="checkbox-label"><input type="checkbox" value="health"> 건강보험</label>
              <label class="checkbox-label"><input type="checkbox" value="accident"> 상해보험</label>
              <label class="checkbox-label"><input type="checkbox" value="child"> 어린이보험</label>
              <label class="checkbox-label"><input type="checkbox" value="pension"> 연금보험</label>
              <label class="checkbox-label"><input type="checkbox" value="total"> 종합보험</label>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">상담 주제 <span class="required">*</span></label>
            <select class="form-select" required>
              <option value="">선택해주세요</option>
              <option value="new">새로운 보험 가입</option>
              <option value="review">기존 보험 점검</option>
              <option value="change">보험 변경/해지</option>
              <option value="inquiry">단순 문의</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label">월 보험료 예산</label>
            <div class="radio-group">
              <label class="radio-label"><input type="radio" name="budget" value="10"> 10만원 이하</label>
              <label class="radio-label"><input type="radio" name="budget" value="30"> 10~30만원</label>
              <label class="radio-label"><input type="radio" name="budget" value="50"> 30~50만원</label>
            </div>
          </div>
          
          <div class="agreement-box">
            <label class="agreement-label">
              <input type="checkbox" required>
              <span class="agreement-text"><strong>[필수]</strong> 개인정보 수집 및 이용에 동의합니다.</span>
            </label>
          </div>
          
          <button type="submit" class="submit-btn">상담 신청하기</button>
        </form>
      `,
      defaultColor: '#059669',
    },
    general: {
      name: '범용 상담',
      formHTML: `
        <h1 class="form-title">상담 신청</h1>
        <p class="form-subtitle">궁금하신 점을 남겨주세요</p>
        
        <form>
          <div class="form-group">
            <label class="form-label">이름 <span class="required">*</span></label>
            <input type="text" class="form-input" placeholder="홍길동" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">연락처 <span class="required">*</span></label>
            <input type="tel" class="form-input" placeholder="010-0000-0000" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">관심 상품 <span class="required">*</span></label>
            <input type="text" class="form-input" placeholder="어떤 상품에 관심이 있으신가요?" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">문의 유형 <span class="required">*</span></label>
            <div class="radio-group">
              <label class="radio-label"><input type="radio" name="type" value="purchase"> 구매 상담</label>
              <label class="radio-label"><input type="radio" name="type" value="inquiry"> 단순 문의</label>
              <label class="radio-label"><input type="radio" name="type" value="visit"> 방문 예약</label>
              <label class="radio-label"><input type="radio" name="type" value="estimate"> 견적 요청</label>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label">문의 내용</label>
            <textarea class="form-textarea" rows="4" placeholder="궁금하신 점이나 필요하신 내용을 자유롭게 입력해주세요"></textarea>
          </div>
          
          <div class="agreement-box">
            <label class="agreement-label">
              <input type="checkbox" required>
              <span class="agreement-text"><strong>[필수]</strong> 개인정보 수집 및 이용에 동의합니다.</span>
            </label>
          </div>
          
          <button type="submit" class="submit-btn">신청하기</button>
        </form>
      `,
      defaultColor: '#7C3AED',
    },
  }

  const handleGenerate = () => {
    const template = templates[selectedTemplate as keyof typeof templates]
    const html = generateTemplateHTML(template.formHTML, {
      ...config,
      brandColor: config.brandColor || template.defaultColor,
    })
    setGeneratedHTML(html)
    setShowHTML(true)
  }

  const handleDownload = () => {
    const blob = new Blob([generatedHTML], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `form-template-${selectedTemplate}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">템플릿 HTML 난출</h1>
        <p className="text-gray-600 mb-8">고객에게 전달할 HTML 폼을 생성합니다</p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* 설정 패널 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">템플릿 선택</h2>
              <select
                value={selectedTemplate}
                onChange={(e) => {
                  setSelectedTemplate(e.target.value)
                  setConfig(prev => ({
                    ...prev,
                    brandColor: templates[e.target.value as keyof typeof templates].defaultColor
                  }))
                }}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              >
                {Object.entries(templates).map(([key, template]) => (
                  <option key={key} value={key}>{template.name}</option>
                ))}
              </select>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">브랜딩 설정</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">브랜드 색상</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={config.brandColor}
                      onChange={(e) => setConfig({ ...config, brandColor: e.target.value })}
                      className="h-10 w-10 rounded border border-gray-300"
                    />
                    <input
                      type="text"
                      value={config.brandColor}
                      onChange={(e) => setConfig({ ...config, brandColor: e.target.value })}
                      className="flex-1 rounded-lg border border-gray-300 px-3 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">회사명</label>
                  <input
                    type="text"
                    value={config.companyName}
                    onChange={(e) => setConfig({ ...config, companyName: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                  <input
                    type="text"
                    value={config.companyPhone}
                    onChange={(e) => setConfig({ ...config, companyPhone: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">주소 (선택)</label>
                  <input
                    type="text"
                    value={config.companyAddress}
                    onChange={(e) => setConfig({ ...config, companyAddress: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">사업자번호 (선택)</label>
                  <input
                    type="text"
                    value={config.businessNumber}
                    onChange={(e) => setConfig({ ...config, businessNumber: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">상단 이미지 URL (선택)</label>
                  <input
                    type="text"
                    value={config.topImage}
                    onChange={(e) => setConfig({ ...config, topImage: e.target.value })}
                    placeholder="https://example.com/top-banner.jpg"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">하단 이미지 URL (선택)</label>
                  <input
                    type="text"
                    value={config.bottomImage}
                    onChange={(e) => setConfig({ ...config, bottomImage: e.target.value })}
                    placeholder="https://example.com/bottom-banner.jpg"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              className="w-full rounded-lg bg-blue-600 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-700 transition-colors"
            >
              HTML 생성하기
            </button>
          </div>

          {/* 미리보기 */}
          <div>
            {showHTML ? (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <button
                    onClick={handleDownload}
                    className="flex-1 rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 transition-colors"
                  >
                    📥 HTML 다운로드
                  </button>
                  <button
                    onClick={() => setShowHTML(false)}
                    className="rounded-lg bg-gray-200 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-300 transition-colors"
                  >
                    새로 만들기
                  </button>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-4">
                  <p className="text-gray-400 text-sm mb-2">HTML 미리보기 (처음 500자)</p>
                  <pre className="text-green-400 text-xs overflow-x-auto whitespace-pre-wrap break-all h-96 overflow-y-auto">
                    {generatedHTML.slice(0, 500)}...
                  </pre>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>💡 사용 방법:</strong><br />
                    1. HTML 파일을 다운로드합니다<br />
                    2. 자신의 웹호스팅에 업로드하거나<br />
                    3. 고객에게 파일로 전달합니다<br />
                    4. form action 속성을 수정하여 데이터 수신 URL을 설정하세요
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center shadow-sm">
                <div className="text-6xl mb-4">📄</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">HTML 파일을 생성하세요</h3>
                <p className="text-gray-500">왼쪽에서 설정을 입력하고<br />HTML 생성 버튼을 클릭하세요</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
