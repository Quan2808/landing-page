export default function TeamIntro({ isVisible, teamMembers }) {
  return (
    <div className="w-full max-w-lg mb-12">
      <div className="relative">
        <h2
          className={`font-bold text-4xl md:text-5xl lg:text-6xl text-slate-800 leading-tight mb-6 text-center transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          Đội ngũ{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dẫn đầu
          </span>
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            , Mạnh mẽ
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
            Sáng tạo
          </span>
        </h2>
      </div>

      {/* Team stats - positioned above the paragraph */}
      <div
        className={`flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 transition-all duration-1000 ease-out transform delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center sm:text-left">
          <div className="text-3xl font-bold text-blue-600">
            {teamMembers.length}+
          </div>
          <div className="text-sm text-slate-500">Thành viên</div>
        </div>
        <p className="text-lg md:text-xl text-slate-600 text-center sm:text-right max-w-xs sm:max-w-sm">
          Gặp gỡ các thành viên đầy nhiệt huyết làm việc không mệt mỏi để tạo ra
          sản phẩm tốt nhất có thể.
        </p>
      </div>
    </div>
  );
}
