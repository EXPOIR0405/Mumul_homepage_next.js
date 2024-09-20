import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

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
        {/* Hero Section with Video Background Carousel */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <VideoBackgroundCarousel videos={videoUrls} />

          {/* Content Overlay */}
          <div className="relative z-20 container mx-auto px-4 text-white">
            <div className="md:w-1/2">
              <h2 className="text-blue-300 font-bold mb-2">무물의 비전</h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                소상공인을 위한<br />맞춤형 AI 챗봇 서비스
              </h1>
              <p className="text-xl mb-8">
                무물은 소상공인들이 효율적으로 고객 문의를 처리하고,<br />
                매출을 향상시킬 수 있도록 돕는 AI챗봇입니다. 고객 응대 시간을 줄이고, 더 나은 비지니스 결과를 얻을 수 있도록 돕습니다.
              </p>
              <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                무물 시작하기
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
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

        {/* Mumul Service Benefits Section */}
        <section className="py-20 bg-gray-100 min-h-screen flex items-center">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src="/images/bot_3.jpg" alt="무물 서비스 혜택" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-6">무물 서비스로 절감된 비용</h2>
              <div className="text-5xl font-bold mb-4">
                <CountUp end={120} duration={2.5} suffix="억원" />
              </div>
              <p className="text-xl">
                무물 서비스를 도입한 소상공인 80%가 고객 응대 시간을 줄이고,<br />
                운영 비용을 절감하여 더욱 효율적으로 비즈니스를 운영하고 있습니다.
              </p>
              <p className="text-xl mt-4">
                지금 바로 무물을 도입하고, 비용 절감과 비즈니스 성장을 경험해보세요!
              </p>
            </div>
          </div>
        </section>

        {/* Investors Section */}
        <section className="py-20 bg-white min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-40">무물의 파트너를 소개합니다</h2>
            <InvestorSlider />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 (주)린에이아이. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;