import React, { useState, useEffect } from 'react';
import { MessageSquare, TrendingUp, PieChart, ChevronRight } from 'lucide-react';
import Link from 'next/link';


const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Header */}
      <header className="bg-white bg-opacity-90 fixed w-full z-10 transition-all duration-300" style={{
        boxShadow: scrollPosition > 50 ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
      }}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">BiZBot</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/service-intro" className="text-gray-600 hover:text-indigo-600 transition duration-300">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 hover:text-indigo-600 transition duration-300">
                  기능
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-indigo-600 transition duration-300">
                  가격
                </Link>
              </li>
              <li>
                <Link href="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
                  무료 체험
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 leading-tight text-gray-800">
              소상공인의 <span className="text-indigo-600">디지털 파트너</span><br />
              BiZBot이 함께합니다
            </h1>
            <p className="text-xl mb-8 text-gray-600">24/7 고객 응대, 매출 증대, 데이터 분석까지.<br />AI로 비즈니스의 새로운 지평을 열어보세요.</p>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              지금 시작하기 <ChevronRight className="inline ml-2" />
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-80 h-80 bg-indigo-300 rounded-full absolute top-0 right-0 z-0 animate-pulse"></div>
            <img src="/api/placeholder/500/500" alt="BiZBot 대시보드 이미지" className="relative z-10 rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white skew-y-3">
        <div className="container mx-auto px-4 -skew-y-3">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">비즈니스를 한 단계 끌어올리는 <span className="text-indigo-600">핵심 기능</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <MessageSquare size={48} className="text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">24/7 스마트 응대</h3>
              <p className="text-gray-600">AI가 고객의 문의에 실시간으로 응답하여 고객 만족도를 높이고 업무 효율을 극대화합니다.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <TrendingUp size={48} className="text-purple-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">매출 최적화</h3>
              <p className="text-gray-600">고객 데이터를 분석하여 개인화된 프로모션을 제안, 매출 증대에 직접적으로 기여합니다.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <PieChart size={48} className="text-pink-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">인사이트 도출</h3>
              <p className="text-gray-600">빅데이터 분석을 통해 비즈니스 트렌드를 파악하고 전략적 의사결정을 지원합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 -skew-y-3 mt-20">
        <div className="container mx-auto px-4 text-center skew-y-3">
          <h2 className="text-4xl font-bold mb-6 text-white">비즈니스의 미래를 지금 경험하세요</h2>
          <p className="text-xl mb-10 text-indigo-100">7일 무료 체험으로 BiZBot의 강력한 기능을 직접 확인해보세요</p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            무료 체험 시작하기 <ChevronRight className="inline ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">BiZBot</h3>
              <p className="text-gray-400">소상공인의 디지털 혁신을 선도합니다.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">서비스 소개</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">요금제</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition duration-300">고객 지원</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">문의하기</h4>
              <p className="text-gray-400">support@bizbot.com</p>
              <p className="text-gray-400">02-1234-5678</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 BiZBot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;