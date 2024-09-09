import React from 'react';
import { Zap, Shield, Rocket } from 'lucide-react';

const ServiceIntroPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">BiZBot <span className="text-indigo-600">서비스 소개</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Zap className="text-indigo-600 w-12 h-12 mb-6" />
            <h2 className="text-2xl font-semibold mb-4">AI 기반 자동화</h2>
            <p className="text-gray-600">최첨단 AI 기술을 활용하여 비즈니스 프로세스를 자동화하고 효율성을 극대화합니다.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Shield className="text-indigo-600 w-12 h-12 mb-6" />
            <h2 className="text-2xl font-semibold mb-4">데이터 보안</h2>
            <p className="text-gray-600">고객 데이터를 철저히 보호하며, 최고 수준의 보안 프로토콜을 적용합니다.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Rocket className="text-indigo-600 w-12 h-12 mb-6" />
            <h2 className="text-2xl font-semibold mb-4">비즈니스 성장</h2>
            <p className="text-gray-600">데이터 기반 인사이트를 제공하여 비즈니스의 지속적인 성장을 지원합니다.</p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-xl shadow-lg mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">BiZBot이 제공하는 가치</h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-600">
            <li>24/7 고객 응대로 고객 만족도 향상</li>
            <li>데이터 분석을 통한 맞춤형 마케팅 전략 수립</li>
            <li>업무 자동화로 인한 비용 절감 및 생산성 향상</li>
            <li>실시간 비즈니스 인사이트 제공으로 신속한 의사결정 지원</li>
            <li>손쉬운 통합으로 기존 비즈니스 프로세스와의 원활한 연동</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">BiZBot과 함께 성장하세요</h2>
          <p className="text-xl mb-8 text-gray-600">소상공인의 디지털 혁신을 위한 최고의 파트너, BiZBot이 함께합니다.</p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition duration-300">
            지금 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntroPage;