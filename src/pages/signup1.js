import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; 

export default function Signup1() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    birthdate: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-indigo-100">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
        {/* 상단 뒤로 가기 화살표와 회원가입 텍스트 */}
        <div className="flex items-center mb-6">
          <Link href="/login" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
            <ArrowLeft className="mr-2 text-2xl" /> {/* 화살표 아이콘 크기 조정 */}
            <span className="text-xl font-bold text-purple-600">회원가입</span>
          </Link>
        </div>

        {/* 환영 메시지 */}
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Mumul에 오신 것을 환영합니다!</h1>
        <p className="mb-6 text-lg text-gray-600">더 나은 서비스를 위해 여러분의 기본 정보를 입력해주세요</p>

        <form>
          {/* 아이디 입력 및 중복확인 */}
          <div className="flex items-center mb-4 space-x-4">
            <div className="flex-grow relative">
              <input 
                type="text" 
                name="username" 
                value={form.username} 
                onChange={handleChange} 
                className="w-full border rounded-md px-3 py-2 h-10 pt-5" 
                placeholder="아이디 (필수)"
              />
            </div>
            <button type="button" className="bg-purple-500 text-white py-2 px-4 rounded-md">
              중복확인
            </button>
          </div>
          
          {/* 비밀번호 입력 */}
          <div className="mb-4 relative">
            <input 
              type="password" 
              name="password" 
              value={form.password} 
              onChange={handleChange} 
              className="w-full border rounded-md px-3 py-2 h-10 pt-5" 
              placeholder="비밀번호 (필수)"
            />
          </div>
          
          {/* 비밀번호 확인 */}
          <div className="mb-4 relative">
            <input 
              type="password" 
              name="confirmPassword" 
              value={form.confirmPassword} 
              onChange={handleChange} 
              className="w-full border rounded-md px-3 py-2 h-10 pt-5" 
              placeholder="비밀번호 확인 (필수)"
            />
          </div>

          {/* 이름과 생년월일 */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                className="w-full border rounded-md px-3 py-2 h-10 pt-5" 
                placeholder="이름 (필수)"
              />
            </div>
            <div className="relative">
              <input 
                type="text" 
                name="birthdate" 
                placeholder="생년월일 (YYMMDD)" 
                value={form.birthdate} 
                onChange={handleChange} 
                className="w-full border rounded-md px-3 py-2 h-10 pt-5" 
              />
            </div>
          </div>

          {/* 휴대폰 번호와 인증번호 버튼 */}
          <div className="flex items-center mb-4 space-x-4">
            <div className="flex-grow relative">
              <input 
                type="text" 
                name="phone" 
                value={form.phone} 
                onChange={handleChange} 
                className="w-full border rounded-md px-3 py-2 h-10 pt-5" 
                placeholder="휴대폰 번호 (필수)"
              />
            </div>
            <button type="button" className="bg-purple-500 text-white py-2 px-4 rounded-md">
              인증번호 받기
            </button>
          </div>

          {/* 이메일 입력 */}
          <div className="mb-4 relative">
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              className="w-full border rounded-md px-3 py-2 h-10 pt-5" 
              placeholder="이메일 (선택)"
            />
          </div>
          
          {/* 다음 버튼 */}
          <Link href="/signup2">
            <button
              type="button" 
              className="w-full bg-purple-500 text-white py-2 rounded-md" 
            >
              다음
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}