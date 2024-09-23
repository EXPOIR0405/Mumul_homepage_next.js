import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Link from 'next/link';

const VideoBackgroundCarousel = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById(`video-${currentVideoIndex}`);
    if (videoElement) {
      videoElement.play();
    }
  }, [currentVideoIndex]);

  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setNextVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsTransitioning(false);
      }, 1000); // 1초 동안 페이드 효과
    }, 5000); // 각 비디오를 5초 동안 재생

    return () => clearTimeout(transitionTimer);
  }, [currentVideoIndex, videos.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {videos.map((video, index) => (
        <video
          key={index}
          id={`video-${index}`}
          src={video}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex
              ? 'opacity-100'
              : index === nextVideoIndex && isTransitioning
              ? 'opacity-100'
              : 'opacity-0'
          }`}
          muted
          loop
          playsInline
        />
      ))}
    </div>
  );
};

const InvestorSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-block animate-slider infinite whitespace-nowrap"
      >
        {/* 이미지 리스트를 두 세트 반복 */}
        <img src="/images/uni5.png" alt="벤처투자" className="h-50 inline-block mx-4" />
        <img src="/images/uni9.png" alt="FAST VENTURES" className="h-50 inline-block mx-4" />
        <img src="/images/uni8.png" alt="WE ventures" className="h-50 inline-block mx-4" />
        <img src="/images/uni7.jpg" alt="벤처투자" className="h-50 inline-block mx-4" />
        <img src="/images/uni6.png" alt="FAST VENTURES" className="h-50 inline-block mx-4" />
        <img src="/images/uni5.png" alt="WE ventures" className="h-50 inline-block mx-4" />
        <img src="/images/uni4.png" alt="WE ventures" className="h-50 inline-block mx-4" />
        <img src="/images/uni3.png" alt="WE ventures" className="h-50 inline-block mx-4" />
        <img src="/images/uni2.png" alt="WE ventures" className="h-50 inline-block mx-4" />
        <img src="/images/uni1.png" alt="WE ventures" className="h-50 inline-block mx-4" />
        
        {/* 이미지 반복 (자연스럽게 이어지는 효과) */}
        <img src="/images/uni5.png" alt="벤처투자" className="h-50 inline-block mx-4" />
        <img src="/images/uni9.png" alt="FAST VENTURES" className="h-50 inline-block mx-4" />
        <img src="/images/uni8.png" alt="WE ventures" className="h-50 inline-block mx-4" />
        <img src="/images/uni7.jpg" alt="벤처투자" className="h-50 inline-block mx-4" />
        <img src="/images/uni6.png" alt="FAST VENTURES" className="h-50 inline-block mx-4" />
        <img src="/images/uni5.png" alt="WE ventures" className="h-50 inline-block mx-4" />
        <img src="/images/uni4.png" alt="WE ventures" className="h-50 inline-block mx-4" />
        <img src="/images/uni3.png" alt="WE ventures" className="h-50 inline-block mx-4" />
        <img src="/images/uni2.png" alt="WE ventures" className="h-50 inline-block mx-4" />
        <img src="/images/uni1.png" alt="WE ventures" className="h-50 inline-block mx-4" />
      </div>
    </div>
  );
};

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoUrls = [
    '/images/video1.mp4',
    '/images/video2.mp4',
    '/images/video3.mp4',
  ];

  return (
    <div className="font-sans">
      <Head>
        <title>무물</title>
        <meta name="description" content="무물로 당신에게 맞는 ai를 찾아보세요." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* 비디오 섹션*/}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <VideoBackgroundCarousel videos={videoUrls} />

          {/* 컨텐츠 오버레이 */}
          <div className="relative z-20 container mx-auto px-4 text-white">
            <div className="md:w-1/2">
              <h2 className="text-blue-300 font-bold mb-2">(주)린에이아이의 비전</h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                모두를 위한<br />맞춤형 AI 챗봇 서비스
              </h1>

            </div>
          </div>
        </section>

        {/* 무물 서비스 섹션 */}
        <section className="py-20 min-h-screen flex items-center" ref={ref}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">무물 서비스</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <img src="/images/bot_1.jpg" alt="Wello 앱" className="w-full rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">24시간 고객 응대</h3>
                <p className="text-gray-600">
                  무물 AI 챗봇은 24시간 고객 응대를 제공합니다.<br />
                  고객의 문의를 빠르게 처리하고 매출을 향상시킬 수 있습니다.
                </p>
              </div>
              <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <img src="/images/bot_2.jpg" alt="Wello 대시보드" className="w-full rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">소상공인을 위한 맞춤형 AI 챗봇</h3>
                <p className="text-gray-600">
                  챗봇을 통해 단순 반복 문의를 자동으로 처리하고<br />
                  소상공인이 더 중요한 업무에 집중할 수 있도록 좋습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white min-h-screen flex items-center" ref={ref}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">무물의 성과</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-5xl font-bold mb-2">
                  {inView && <CountUp end={85} duration={2.5} suffix="%" />}
                </div>
                <p>고객 응대 시간 절감률</p>
              </div>
              <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-5xl font-bold mb-2">
                  {inView && <CountUp end={30} duration={2.5} suffix="%" />}
                </div>
                <p>매출 상승률</p>
              </div>
              <div className={`transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-5xl font-bold mb-2">
                  {inView && <CountUp end={100} duration={2.5} suffix="%" />}
                </div>
                <p>만족도 지수</p>
              </div>
            </div>
          </div>
        </section>

        {/* 무물 서비스 효과 섹션*/}
        <section className="py-20 bg-gray-100 min-h-screen flex items-center">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src="/images/bot_3.jpg" alt="무물 서비스 혜택" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-6">무물 서비스를 통해 얻을 수 있는 다양한 이점</h2>
              <div className="text-5xl font-bold mb-4">
                <CountUp end={80} duration={2.5} suffix="%" />
              </div>
              <p className="text-xl">
                무물 서비스를 도입한 고객의 80%가 더 나은 고객 관리와 시간 절감을 경험하고 있습니다.<br />
                이를 통해 업무 효율을 높이고, 더 많은 고객과의 소통이 가능해졌습니다.
              </p>
              <p className="text-xl mt-4">
                지금 무물을 도입하여 시간 절약, 고객 만족도 향상, 그리고 비즈니스 성장을 직접 체험해보세요!
              </p>
            </div>
          </div>
        </section>

        {/*협력사 섹션 */}
        <section className="py-20 bg-white min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-40">무물의 파트너를 소개합니다</h2>
            <InvestorSlider />
          </div>
        </section>
      </main>

   {/* 푸터 섹션: 페이지 하단의 추가 정보 및 링크 */}
   <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">(주)린에이아이</h3>
              <p className="text-gray-400">소상공인부터 더 넓은 분야까지. AI로 혁신을 선도합니다.</p>
              <p className="text-gray-400">서울특별시 관악구 봉천로 545, 2층(서울창업센터 관악) </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
              <ul className="space-y-2">
                <li><Link href="/service-intro" className="text-gray-400 hover:text-white transition duration-300">서비스 소개</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition duration-300">요금제</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition duration-300">이용 약관</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">문의하기</h4>
              <p className="text-gray-400">ch@lean-ai.com</p>
              <p className="text-gray-400">02-6951-1510</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 (주)린에이아이. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;