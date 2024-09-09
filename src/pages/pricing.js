import React from 'react';
import { Check } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: "스타터",
      price: "49,000",
      features: [
        "AI 챗봇 기본 기능",
        "월 1,000건 고객 응대",
        "기본 데이터 분석",
        "이메일 지원",
      ],
      recommended: false
    },
    {
      name: "프로",
      price: "99,000",
      features: [
        "AI 챗봇 고급 기능",
        "무제한 고객 응대",
        "고급 데이터 분석 및 리포트",
        "우선 이메일 및 전화 지원",
        "맞춤형 프로모션 추천"
      ],
      recommended: true
    },
    {
      name: "엔터프라이즈",
      price: "문의",
      features: [
        "모든 프로 기능 포함",
        "전용 계정 관리자",
        "맞춤형 AI 모델 개발",
        "온프레미스 설치 옵션",
        "24/7 프리미엄 지원"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">합리적인 <span className="text-indigo-600">가격 정책</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ${plan.recommended ? 'border-4 border-indigo-500' : ''}`}>
              {plan.recommended && (
                <div className="bg-indigo-500 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-6">추천</div>
              )}
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{plan.name}</h2>
              <div className="text-4xl font-bold mb-6 text-indigo-600">
                ₩{plan.price}<span className="text-base font-normal text-gray-600">/월</span>
              </div>
              <ul className="mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center mb-3">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-semibold transition duration-300 ${plan.recommended ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                {plan.price === "문의" ? "상담 요청하기" : "선택하기"}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-12 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">궁금한 점이 있으신가요?</h2>
          <p className="text-xl mb-8 text-gray-600">우리 팀이 귀하의 비즈니스에 가장 적합한 솔루션을 찾아드리겠습니다.</p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            문의하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;