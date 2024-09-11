import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; 

export default function Signup2() {
  const [form, setForm] = useState({
    businessType: '',
    businessName: '',
    businessAddress: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-indigo-100">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
        {/* 상단 뒤로 가기 화살표와 회원가입 텍스트 */}
        <div className="flex items-center mb-6">
          <Link href="signup1" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
            <ArrowLeft className="mr-2 text-2xl" /> {/* 화살표 아이콘 크기 조정 */}
            <span className="text-xl font-bold text-purple-600">회원가입</span>
          </Link>
        </div>

        {/* 환영 메시지 */}
        <h1 className="text-2xl font-bold mb-4 text-gray-800">어떤 사업장을 운영하고 계신가요?</h1>
        <p className="mb-6 text-lg text-gray-600">사업장의 정보를 입력하면 Mumul의 서비스를 < br/> 여러분의 필요에 맞게 최적화할 수 있습니다</p>

        {/* 사업장 선택 드롭박스 */}
        <form>
          <div className="mb-4">
          <div className="flex items-center">
            <label className="text-red-500">*</label>
            <span className="ml-1 text-gray-700">사업장을 선택해주세요</span>
          </div>
            <select name="businessType" value={form.businessType} onChange={handleChange} className="w-full border rounded-md px-3 py-2">
              <option value="">사업장 선택</option>
              <option value="음식점">음식점</option>
              <option value="도소매점">도소매점</option>
              <option value="공공기관">공공기관</option>
              <option value="기타">기타</option>
            </select>
          </div>


          {/* 업소명 */}
          <div className="mb-4">
            <input 
              type="text" 
              name="businessName" 
              value={form.businessName} 
              onChange={handleChange} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="업소명을 입력해주세요"  // placeholder 추가
            />
          </div>

          <div className="mb-4">
            <input 
              type="text" 
              name="businessAddress" 
              value={form.businessAddress} 
              onChange={handleChange} 
              className="w-full border rounded-md px-3 py-2" 
              placeholder="업소 주소를 입력해주세요"  // placeholder 추가
            />
          </div>


          <div className="mb-4 flex items-center">
            <input type="checkbox" name="terms" className="mr-2" />
            <label className="text-gray-700 underline">이용약관 및 개인정보 수집 동의 (필수)</label>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" name="marketing" className="mr-2" />
            <label className="text-gray-700 underline">마케팅 활용 동의 (선택)</label>
          </div>
          <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-md">회원가입</button>
        </form>
      </div>
    </div>
  );
}