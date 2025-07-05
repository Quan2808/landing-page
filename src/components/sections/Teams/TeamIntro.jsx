export default function TeamIntro({ isVisible, teamMembers }) {
  return (
    <div className="w-full max-w-4xl mb-16 text-center">
      {/* Pre-title */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-sm font-semibold text-indigo-700 mb-6 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="text-sm font-medium text-blue-600">
          🎬 Gặp gỡ nhóm Dream Draft
        </span>
      </div>

      {/* Main Title */}
      <h2
        className={`font-bold text-4xl md:text-5xl lg:text-6xl text-slate-800 leading-tight mb-6 transition-all duration-1000 ease-out transform delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Sinh viên{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Thiết kế Đồ họa
        </span>{" "}
        <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Đam mê
        </span>{" "}
        &{" "}
        <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
          Sáng tạo
        </span>
      </h2>

      {/* Description */}
      <p
        className={`text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto transition-all duration-1000 ease-out transform delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Dự án tốt nghiệp “Màu của hoà bình” là thành quả của quá trình hợp tác
        nghiêm túc, sáng tạo và đầy nhiệt huyết, thể hiện sự trưởng thành về
        chuyên môn cũng như tư duy nghệ thuật của nhóm.
      </p>

      {/* Team stats */}
      <div
        className={`max-w-2xl mx-auto transition-all duration-1000 ease-out transform delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {teamMembers.length}+
          </div>
          <div className="text-sm md:text-base text-slate-500 font-medium">
            Thành viên
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-12 transition-all duration-1000 ease-out transform delay-800 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      />
    </div>
  );
}
