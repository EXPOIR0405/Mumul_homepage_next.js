import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, ChevronUp, Award, Users, Database, Zap, Building, Briefcase, ExternalLink, ArrowLeft } from 'lucide-react';

const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" preserveAspectRatio="none">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.2)', stopOpacity: 1 }} />  // 흰색으로 변경
          <stop offset="50%" style={{ stopColor: 'rgba(149,76,233,0.2)', stopOpacity: 1 }} />  // 검정색 추가
          <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0.2)', stopOpacity: 1 }} />  // 흰색으로 변경
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad1)">
        <animate attributeName="x" from="-100%" to="100%" dur="20s" repeatCount="indefinite" />
      </rect>
      <rect width="100%" height="100%" fill="url(#grad1)">
        <animate attributeName="x" from="0%" to="200%" dur="20s" repeatCount="indefinite" />
      </rect>
      <rect width="100%" height="100%" fill="url(#grad1)">
        <animate attributeName="y" from="-100%" to="100%" dur="20s" repeatCount="indefinite" />
      </rect>
      <rect width="100%" height="100%" fill="url(#grad1)">
        <animate attributeName="y" from="0%" to="200%" dur="20s" repeatCount="indefinite" />
      </rect>
    </svg>
  </div>
);

const Section = ({ title, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isExpanded ? "expanded" : "collapsed");
  }, [isExpanded, controls]);

  return (
    <motion.div 
      className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 flex items-center justify-between cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          {icon}
          <h2 className="text-white text-xl font-bold ml-4">{title}</h2>
        </div>
        {isExpanded ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
      </motion.div>
      <motion.div 
        className="p-6"
        initial="collapsed"
        animate={controls}
        variants={{
          expanded: { height: "auto", opacity: 1 },
          collapsed: { height: 0, opacity: 0 }
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const PartnerGrid = ({ partners }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {partners.map((partner, index) => (
      <motion.div
        key={index}
        className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={partner} alt={`Partner ${index + 1}`} className="max-h-16 max-w-full object-contain" />
      </motion.div>
    ))}
  </div>
);

const CompanyIntroduction = () => {
  const awards = [
    "2020 4IR Awards AI 부문 대상",
    "제3회 서울혁신챌린지 최우수상",
    "2019 산학협동 AI 스타트업 창업 경진대회 우수상 (2등)",
    "2018 고려대 SW 중심대학 창업 경진대회 최우수상",
    "2017 대학창업보육 300 시제품 전시회 교육부 장관상"
  ];

  const partnerLogos = [
    "/images/uni8.png",
    "/images/uni1.png",
    "/images/uni2.png",
    "/images/uni3.png",
    "/images/uni4.png",
    "/images/uni5.png",
    "/images/uni6.png",
    "/images/uni7.jpg",
    "/images/uni8.png",
    "/images/uni9.png",
  ];

  return (
    <div className="min-h-screen p-8 relative">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center mb-4 justify-between"> 
          <div className="flex items-center">
            <ArrowLeft className="h-6 w-6 text-purple-600 cursor-pointer" onClick={() => window.history.back()} />
            <span className="ml-2 text-purple-600 cursor-pointer" onClick={() => window.history.back()}>뒤로가기</span>
          </div>
          <motion.h1 
            className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-12 mx-auto" // 중앙 정렬을 위해 mx-auto 추가
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            린에이아이 회사 소개
          </motion.h1>
        </div>

        <Section title="소상공인 AI 솔루션 개발에 최적화된 팀" icon={<Users className="h-6 w-6 text-white" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Award />, title: "Specialized Team", content: "AI 솔루션 개발에 특화된 팀입니다. 카이스트 연구원과 재직 중인 기술이사로 구성되어, 명문대 출신 개발팀의 최고 인재들이 참여하고 있습니다." },
              { icon: <Users />, title: "Communication", content: "정부지원사업 구조를 정확히 파악하고 있는 7년 경력의 사업 담당자들로 구성된 실무진이 빠르고 명확한 커뮤니케이션 서비스를 제공합니다." },
              { icon: <Database />, title: "Crowd Sourcing", content: "자체 크라우드 소싱 플랫폼 'Lean-AI'를 통해 300여 명의 명문대 출신 전문가들로 이루어진 풀(Pool)에서 산업별 맞춤 데이터 수집/가공 작업이 가능합니다." },
              { icon: <Zap />, title: "Young Team", content: "젊고 창의적인 팀으로, 과감한 도전 정신을 가지고 문제 해결에 나서며, 미래 지향적인 솔루션을 개발합니다." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white bg-opacity-50 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center mb-4">
                  <span className="bg-purple-100 p-2 rounded-full mr-4">
                    {React.cloneElement(item.icon, { className: "h-6 w-6 text-purple-600" })}
                  </span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p>{item.content}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="수상 내역 및 인증" icon={<Award className="h-6 w-6 text-white" />}>
          <div className="space-y-6">
            <h3 className="font-bold text-lg mb-4">수상 내역</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="bg-purple-100 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="text-purple-800 font-semibold">{award}</p>
                </motion.div>
              ))}
            </div>
            <h3 className="font-bold text-lg mt-8 mb-4">인증</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>과학정보통신부 지원 'AI바우처 지원사업' 공급기업</li>
              <li>데이터바우처 지원사업 공급기업</li>
              <li>AI Tech 기업, 기술 인증 (한국인공지능협회)</li>
            </ul>
          </div>
        </Section>

        <Section title="주요 협업 및 지원 관계" icon={<Building className="h-6 w-6 text-white" />}>
          <p className="mb-6">마이크로소프트, SK 텔레콤, 포스텍, 고려대학교 등 다양한 대기업 및 명문 기관들과의 협력으로 기술력을 더욱 강화해왔습니다.</p>
          <PartnerGrid partners={partnerLogos} />
          <p className="mt-6">IBK 기업은행, 현대차 정몽구 재단 등 금융 및 대기업과의 네트워크를 바탕으로 산업의 혁신을 이루어내고 있습니다.</p>
        </Section>

        <Section title="소상공인과의 협업 성과" icon={<Briefcase className="h-6 w-6 text-white" />}>
          <h3 className="font-bold text-lg mb-6">주요 성과</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Database />, content: "데이터바우처 지원사업으로 32개사의 소상공인 대상 솔루션을 개발" },
              { icon: <Zap />, content: "AI 바우처 지원사업으로 25개사 소상공인 대상 AI 솔루션 개발" },
              { icon: <Users />, content: "전국 600여 개의 소상공인 대상 솔루션 구축 경험" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-purple-100 p-3 rounded-full mb-4">
                  {React.cloneElement(item.icon, { className: "h-8 w-8 text-purple-600" })}
                </span>
                <p>{item.content}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default CompanyIntroduction;