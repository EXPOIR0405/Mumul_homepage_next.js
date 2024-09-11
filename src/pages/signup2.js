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
      <div className="flex justify-center items-center mb-6">
          <Link href="/login" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
            <ArrowLeft className="mr-2 text-5xl" />
            <h1 className="text-2xl font-bold">Mumul에 오신 것을 환영합니다!</h1>
          </Link>
        </div>
        <p className="mb-4 text-xl text-gray-600">사업장 정보를 입력하면 서비스를 맞춤화할 수 있습니다.</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">*사업장을 선택해주세요</label>
            <select name="businessType" value={form.businessType} onChange={handleChange} className="w-full border rounded-md px-3 py-2">
              <option value="">사업장 선택</option>
              <option value="음식점">음식점</option>
              <option value="도소매점">도소매점</option>
              <option value="공공기관">공공기관</option>
              <option value="기타">기타</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">*업소명</label>
            <input type="text" name="businessName" value={form.businessName} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">*업소 주소</label>
            <input type="text" name="businessAddress" value={form.businessAddress} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" name="terms" className="mr-2" />
            <label className="text-gray-700">이용약관 및 개인정보 수집 동의 (필수)</label>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" name="marketing" className="mr-2" />
            <label className="text-gray-700">마케팅 활용 동의 (선택)</label>
          </div>
          <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-md">회원가입</button>
        </form>
      </div>
    </div>
  );
}