module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // pages 폴더 안의 모든 파일
    './components/**/*.{js,ts,jsx,tsx}',  // components 폴더 안의 모든 파일
    './app/**/*.{js,ts,jsx,tsx}',  // 필요한 경우 app 폴더 추가
    './src/**/*.{js,ts,jsx,tsx}',  // src 폴더도 포함 가능
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};