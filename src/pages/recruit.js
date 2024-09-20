import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import { X, Menu } from 'react-feather';

// 네비게이션 컴포넌트
const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = () => {
    setIsNavExpanded(true);
  };

  const handleMouseLeave = (event) => {
    if (navRef.current && event.relatedTarget) {
      if (!navRef.current.contains(event.relatedTarget)) {
        setIsNavExpanded(false);
      }
    } else {
      setIsNavExpanded(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      title: '회사소개',
      subItems: [
        { name: '회사 소개', link: '/company' },
        { name: '연혁', link: '/history' },
        { name: '뉴스룸', link: '/news' },
      ],
    },
    {
      title: '서비스',
      subItems: [
        { name: '무물 서비스 소개', link: '/service-intro' },
        { name: '소상공인 솔루션', link: '/small-business-solution' },
        { name: '무인 매장 솔루션', link: '/unmanned-store-solution' },
        { name: '공공기관 솔루션', link: '/public-institution-solution' },
      ],
    },
    {
      title: '활용 사례',
      subItems: [
        { name: '고객 성공 사례', link: '/customer-success-stories' },
        { name: '고객 후기', link: '/customer-reviews' },
      ],
    },
    {
      title: '고객 지원',
      subItems: [
        { name: '공지사항', link: '/notice' },
        { name: 'FAQ', link: '/question' },
      ],
    },
    {
      title: '채용',
      subItems: [
        { name: '채용 정보', link: '/job-info' },
        { name: '팀 소개', link: '/team-introduction' },
      ],
    },
  ];

  return (
    <div>
      <div 
        ref={navRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
       <header 
        className="bg-white fixed top-0 left-0 w-full z-50 transition-all duration-300" 
        style={{
            boxShadow: scrollPosition > 50 ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
        }}
        >
        <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-600">MUMUL</Link>
            <nav className="hidden md:block">
                <ul className="flex justify-end space-x-8">
                {navItems.map((item, index) => (
                    <li key={index} className="relative group">
                    <span className="text-black hover:text-purple-600 transition duration-300 block py-2 cursor-pointer">
                        {item.title}
                    </span>
                    {/* 서브메뉴 */}
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ul>
                        {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                            <Link href={subItem.link} className="block px-4 py-2 text-gray-700 hover:bg-purple-100">
                                {subItem.name}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </li>
                ))}
                </ul>
            </nav>
            <button className="md:hidden z-50" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>
        </div>
        </header>
        {/* 데스크톱 서브메뉴 */}
        <div 
          className={`hidden md:block fixed w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isNavExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            top: '68px',
            zIndex: 40,
          }}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-5 gap-8">
              {navItems.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-4 text-purple-600">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.link} 
                              className="text-sm text-gray-700 hover:text-purple-600 block group">
                          <span className="relative">
                            {subItem.name}
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div className={`md:hidden fixed inset-0 bg-white z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-10">
            <Link href="/" className="text-2xl font-bold text-purple-600">MUMUL</Link>
            <button onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {navItems.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2 text-purple-600">{item.title}</h3>
                <ul className="space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.link} className="text-sm text-gray-700 hover:text-purple-600 block">
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ValueCard 컴포넌트
const ValueCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-sm aspect-square transition duration-300 ease-in-out hover:shadow-md cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className={`text-gray-600 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          {description.substring(0, 50)}...
        </p>
      </div>
      <div className={`absolute inset-0 bg-blue-500 text-white p-6 flex flex-col justify-center items-center text-center transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
        <h3 className="font-semibold text-xl mb-4">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

// WorkCultureItem 컴포넌트
const WorkCultureItem = ({ title, description, icon }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 transition duration-300 ease-in-out hover:shadow-md">
    <div className="text-3xl mb-4">{icon}</div>
    <h4 className="font-semibold text-lg mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
)

// BenefitCard 컴포넌트
const BenefitCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 transition duration-300 ease-in-out hover:shadow-md flex flex-col items-center text-center">
    <div className="text-blue-500 mb-4 text-4xl">{icon}</div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

// SectionTitle 컴포넌트
const SectionTitle = ({ title, description }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
  </div>
)

// 직원 인터뷰 섹션 컴포넌트
const EmployeeInterviewSection = ({ employees }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이전 슬라이드로 이동
  const prevSlide = () => {
    const index = currentIndex === 0 ? employees.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    const index = currentIndex === employees.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const currentEmployee = employees[currentIndex];

  return (
    <section className="mb-32 bg-gray-100 py-12">
      <SectionTitle 
        title="직원 인터뷰" 
        description="우리 회사에서 일하는 직원들의 생생한 이야기를 들어보세요. 그들의 경험과 성장이 여러분에게 영감을 줄 것입니다."
      />
      <div className="flex flex-col items-center">
        {/* 인터뷰 카드 */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xl h-auto flex flex-col items-center justify-center relative overflow-hidden">
          {/* 직원 사진 */}
          <img 
            src={currentEmployee.image || "https://via.placeholder.com/150"} 
            alt={`${currentEmployee.name} 사진`} 
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-purple-600"
          />
          
          {/* 직원 이름과 직급 */}
          <h3 className="text-xl font-semibold text-center mb-2">{currentEmployee.name}</h3>
          <p className="text-center text-gray-500 mb-4">{currentEmployee.position}</p>
          
          {/* 메시지 */}
          <p className="text-center text-gray-700 mb-6 italic">"{currentEmployee.description}"</p>
          
          {/* 슬라이드 버튼 */}
          <div className="flex space-x-4">
            <button 
              onClick={prevSlide} 
              className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition"
            >
              {/* 이전 아이콘 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide} 
              className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition"
            >
              {/* 다음 아이콘 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// 메인 컴포넌트
export default function RecruitmentPage() {
  const companyValues = [
    { title: "혁신", description: "우리는 항상 새로운 아이디어를 추구하고, 기존의 방식에 도전합니다. 변화를 두려워하지 않고 지속적인 개선을 추구합니다." },
    { title: "협력", description: "팀워크를 통해 더 큰 성과를 이뤄냅니다. 우리는 서로를 존중하고 지원하며, 개방적인 커뮤니케이션을 통해 시너지를 창출합니다." },
    { title: "성장", description: "개인과 조직의 지속적인 성장을 위해 노력합니다. 학습과 발전의 기회를 제공하며, 실패를 두려워하지 않는 도전적인 문화를 만듭니다." },
    { title: "고객 중심", description: "모든 결정의 중심에는 고객이 있습니다. 고객의 니즈를 이해하고 최상의 서비스를 제공하며, 고객의 성공이 곧 우리의 성공이라고 믿습니다." },
  ];

  const workCulture = [
    { title: "자율과 책임", description: "우리는 직원들의 자율성을 존중하며, 동시에 책임감 있는 결과를 추구합니다.", icon: "🚀" },
    { title: "지속적인 학습", description: "빠르게 변화하는 환경에 적응하기 위해 끊임없이 학습하고 성장하는 문화를 만듭니다.", icon: "📚" },
    { title: "열린 소통", description: "수평적인 조직 문화 속에서 자유롭게 의견을 나누고 피드백을 주고받습니다.", icon: "💬" },
    { title: "일과 삶의 균형", description: "직원들의 웰빙을 중요하게 여기며, 건강한 삶과 일의 조화를 추구합니다.", icon: "⚖️" },
  ];

  const benefits = [
    { title: "유연한 근무", description: "재택근무와 유연근무제를 통해 work-life balance를 실현합니다.", icon: "🏠" },
    { title: "성장 지원", description: "교육비 지원, 도서구입비 지원 등 다양한 성장 기회를 제공합니다.", icon: "🌱" },
    { title: "건강 관리", description: "정기 건강검진, 단체보험 가입으로 임직원의 건강을 책임집니다.", icon: "🏥" },
    { title: "리프레시", description: "장기근속자 휴가, 생일 휴가 등 다양한 휴가 제도를 운영합니다.", icon: "🌴" },
  ];

  const employees = [
    { 
      name: "이영희",
      position: "디자이너",
      description: "이영희는 우리 회사의 디자이너로, 사용자 경험을 개선하기 위해 노력합니다.",
      image: "/images/employee2.jpg" // 실제 이미지 파일이 없으면 Placeholder URL 사용
    },
    { 
      name: "김철수",
      position: "개발자",
      description: "김철수는 우리 회사의 개발자로, 최신 기술을 사용하여 웹 애플리케이션을 개발합니다.",
      image: "/images/employee1.jpg" // 실제 이미지 파일이 없으면 Placeholder URL 사용
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>채용 - 우리 회사</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 네비게이션 컴포넌트 */}
      <LandingPage />

      {/* Hero Section */}
      <div className="relative h-screen mt-16">
        <div className="absolute inset-0">
          <img 
            src="https://via.placeholder.com/1920x1080" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">우리의 삶을 더 낫게 바꾸는</h1>
          <h2 className="text-4xl font-semibold mb-8 text-center">최고의 동료들이 모이고 있어요</h2>
        </div>
      </div>

      <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* 팀 문화 섹션 */}
        <section className="mb-32 bg-white py-12 rounded-xl shadow-md">
          <SectionTitle 
            title="우리의 팀 문화" 
            description="우리는 혁신, 협력, 성장, 그리고 고객 중심이라는 네 가지 핵심 가치를 바탕으로 일합니다. 이러한 가치관은 우리의 모든 의사결정과 행동의 기준이 됩니다."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <ValueCard key={index} title={value.title} description={value.description} />
            ))}
          </div>
        </section>

        {/* 직원 인터뷰 섹션 */}
        <EmployeeInterviewSection employees={employees} />

        {/* 우리가 일하는 방식 섹션 */}
        <section className="mb-32 bg-white py-12 rounded-xl shadow-md">
          <SectionTitle 
            title="우리가 일하는 방식" 
            description="우리는 자율성과 책임감을 바탕으로, 지속적인 학습과 열린 소통을 통해 함께 성장합니다. 일과 삶의 균형을 중요하게 여기며, 이를 통해 더 나은 결과를 만들어냅니다."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workCulture.map((item, index) => (
              <WorkCultureItem key={index} title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>
        </section>

        {/* 복지 문화 섹션 */}
        <section className="mb-32 bg-white py-12 rounded-xl shadow-md">
          <SectionTitle 
            title="우리의 복지 문화" 
            description="직원들의 행복과 성장이 회사의 성장으로 이어진다고 믿습니다. 우리는 다양한 복지 제도를 통해 직원들의 삶의 질을 높이고, 일에 대한 열정을 지원합니다."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} title={benefit.title} description={benefit.description} icon={benefit.icon} />
            ))}
          </div>
        </section>

        {/* 지원하기 버튼 */}
        <div className="text-center">
          <a href="#" className="inline-block bg-purple-600 text-white font-semibold py-4 px-8 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1 text-lg">
            지금 지원하기
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">&copy; 2024 우리 회사. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}