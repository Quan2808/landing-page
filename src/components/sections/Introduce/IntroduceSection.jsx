import logo from "@/assets/images/logo.png";
import React from "react";
import { Quote, BookOpen, Heart, Palette } from "lucide-react";
import useIntersectionObserver from "@hooks/useIntersectionObserver.js";

export default function IntroduceSection() {
  const [sectionRef, isVisible] = useIntersectionObserver(0.6);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-16 px-6 lg:px-8"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-red-200 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-yellow-200 rounded-full opacity-8"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Logo section */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-75"
            }`}
          >
            {/* Replace with actual logo */}
            <img
              alt="FPT Polytechnic Logo"
              src={logo}
              className={`mx-auto h-12 transition-all duration-1000 ease-in-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            />
          </div>
        </div>

        {/* Instructor information */}
        {/* <div
          className={`text-center mb-16 transition-all duration-1000 ease-out delay-300 transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="flex items-center justify-center space-x-3 text-lg">
            <div className="font-semibold text-gray-900">
              Thầy Nguyễn Đông Kỳ
            </div>
            <svg
              width={3}
              height={3}
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="fill-gray-900"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            <div className="text-gray-600">Giảng viên hướng dẫn</div>
          </div>
        </div> */}

        {/* Main content section */}
        <div className="space-y-12">
          {/* Tóm tắt nội dung phim */}
          <div
            className={`transition-all duration-1000 ease-out delay-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Tóm tắt nội dung phim
              </h2>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50">
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-500/30" />
                <div className="text-lg leading-relaxed text-gray-800 space-y-4 pl-6">
                  <p>
                    Cu Tuấn là một cậu bé làm nhiệm vụ tiếp tế đạn dược thời
                    chiến tranh, giữa thời điểm tàn khốc của lịch sử, cậu như
                    một tia nắng ấm nơi chiến trường. Cu Tuấn bị các bác chọc là
                    còn quá nhỏ để làm bộ đội.
                  </p>

                  <p>
                    Thế nhưng với lòng dũng cảm cậu đã một mình băng qua các làn
                    khói để tiếp đạn cho quân ta kịp thời. Đến một trận đánh
                    lớn, khi quân số và vũ khí của quân địch được tăng cường rất
                    cao, chúng đã càn vào và bắn chết rất nhiều chiến sĩ của ta.
                  </p>

                  <p>
                    Trong lúc vẫn còn đang đi tiếp đạn thì Cu Tuấn bị địch tấn
                    công nhưng được anh Luân hi sinh cứu sống. Nhưng chưa chạy
                    được bao xa thì Tuấn cũng bị bắt và bị bắn bởi quân địch.
                  </p>

                  <p>
                    Chuyển cảnh sang thực tại, Tuấn thức dậy và nhận ra chỉ là
                    mơ, thật ra ông của cậu là chiến sĩ chinh chiến năm xưa và
                    kể lại cho cậu nghe. Cu Tuấn nhận ra vẻ đẹp của hòa bình quý
                    báu và vô cùng biết ơn sự hi sinh của các thế hệ đi trước để
                    chúng ta có được ngày hôm nay.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Thông điệp truyền tải */}
          <div
            className={`transition-all duration-1000 ease-out delay-700 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Thông điệp truyền tải
              </h2>
            </div>

            <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 rounded-2xl shadow-xl p-8 border border-amber-200/50">
              <div className="relative">
                <Palette className="absolute -top-2 -left-2 w-8 h-8 text-amber-500/30" />
                <blockquote className="text-xl leading-relaxed font-medium text-gray-800 pl-6">
                  <span className="text-2xl text-amber-600 font-bold">"</span>
                  Ông cha ta đã hi sinh sống trong một bức tranh đầy khói bụi và
                  tang thương để bây giờ chúng ta có thể cầm cọ vẽ tiếp những
                  bức tranh mơ ước bằng{" "}
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-bold">
                    màu của hòa bình
                  </span>
                  .<span className="text-2xl text-amber-600 font-bold">"</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
