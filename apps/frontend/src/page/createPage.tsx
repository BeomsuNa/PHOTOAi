import React, { useState } from 'react'

interface keywords {
  [key: string]: string;
  resume: string;
  develop: string;
  photographer: string;
  wedding: string;
}

const CreatePage = () => {
  const [prompt, setPrompt] = useState('')

  // 카테고리별 미리 준비된 키워드
  const keywords : keywords = {
    resume: '프로페셔널 이력서 작성, 경력 강조, 성과 중심',
    develop: '코드 최적화, 최신 개발 트렌드, 기술 스택 소개',
    photographer: '사진 편집, 촬영 테크닉, 장비 추천',
    wedding: '웨딩 사진 스타일, 촬영 컨셉, 감성 표현',
  }

  // 버튼 클릭 시 키워드를 프롬프트에 세팅
  const handleKeywordClick = (key: keyof keywords) => {
    setPrompt(keywords[key])
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
        AI 생성 프롬프트 만들기
      </h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="여기에 생성할 프롬프트를 입력하세요"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
        />
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">키워드 선택</h2>
        <div className="flex flex-wrap gap-4">
          {Object.keys(keywords).map((key) => (
            <button
              key={key}
              onClick={() => handleKeywordClick(key)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-5 rounded-lg shadow hover:scale-105 transition-transform duration-300"
            >
              {key}
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CreatePage
