import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  Target,
  Users,
  Eye,
  Lightbulb,
  Play,
  Award,
  Heart,
} from "lucide-react";

const useIntersectionObserver = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return [elementRef, isVisible];
};

export default function BrandIntroductionSection() {
  const [sectionRef, isVisible] = useIntersectionObserver(0.2);

  const values = [
    {
      icon: Lightbulb,
      title: "Sáng tạo không giới hạn",
      description:
        "Biến mọi ý tưởng bay bổng thành hiện thực qua công nghệ 3D, kết hợp yếu tố hiện thực với sự sáng tạo nghệ thuật",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Star,
      title: "Học hỏi không ngừng",
      description:
        "Tự tìm tòi, chinh phục những thử thách kỹ thuật mới từ Maya, C4D đến Blender, CC4, iClone",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Target,
      title: "Ý nghĩa trong từng tác phẩm",
      description:
        "Mỗi dự án đều mang thông điệp tích cực, góp phần giáo dục và truyền cảm hứng cho cộng đồng",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Tinh thần đoàn kết",
      description:
        "Cùng nhau vượt qua mọi khó khăn, quản lý quy trình chuyên nghiệp để đạt được mục tiêu chung",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const achievements = [
    {
      icon: Play,
      title: "Phim 3D hoàn chỉnh",
      description: "10 phút nội dung chất lượng cao",
      color: "text-red-600",
    },
    {
      icon: Award,
      title: "Quy trình chuyên nghiệp",
      description: "Từ ý tưởng đến hậu kỳ hoàn thiện",
      color: "text-yellow-600",
    },
    {
      icon: Heart,
      title: "Thông điệp nhân văn",
      description: "Giáo dục lòng biết ơn và yêu nước",
      color: "text-pink-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-16 px-6 lg:px-8"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-green-200 to-cyan-200 rounded-full opacity-15"></div>
        <div className="absolute bottom-20 right-1/3 w-44 h-44 bg-gradient-to-br from-yellow-200 to-red-200 rounded-full opacity-10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-75"
            }`}
          >
            <h1 className="text-5xl font-bold text-[#f6a248] mb-4">
              Dream Draft
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
              Nhóm sinh viên Thiết kế Đồ họa với tinh thần "Làm khác đi"
            </p>
          </div>
        </div>
        {/* Featured Project Highlight */}
        {/* <div
          className={`mb-16 transition-all duration-1000 ease-out delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl shadow-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Dự án nổi bật</h2>
            <h3 className="text-4xl font-extrabold mb-4 text-[#f6a248] ">
              "Màu của hòa bình"
            </h3>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Bộ phim hoạt hình 3D về chiến tranh Việt Nam - Thể hiện khát vọng
              hòa bình qua ngôn ngữ điện ảnh hiện đại
            </p>
            <div className="flex justify-center space-x-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold text-sm">{achievement.title}</p>
                  <p className="text-xs opacity-90">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About & Mission */}
          <div className="space-y-12">
            {/* About Us */}
            <div
              className={`transition-all duration-1000 ease-out delay-300 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Về chúng tôi
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <span className="font-semibold text-[#f6a248] ">
                    Dream Draft
                  </span>{" "}
                  là nhóm sinh viên ngành Thiết kế Đồ họa tại
                  <span className="font-medium"> FPT Polytechnic Đà Nẵng</span>,
                  được thành lập với tinh thần
                  <span className="font-semibold text-purple-600">
                    {" "}
                    "Làm khác đi"
                  </span>{" "}
                  - không ngừng tìm tòi, khám phá và chinh phục những công cụ
                  mới trong lĩnh vực hoạt hình 3D.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Chúng tôi thành thạo các phần mềm chuyên nghiệp như
                  <span className="font-medium text-blue-600">
                    {" "}
                    Maya, Cinema 4D, Premiere Pro
                  </span>
                  , đồng thời chủ động nghiên cứu các công cụ mới như
                  <span className="font-medium text-green-600">
                    {" "}
                    Blender, CC4, iClone 8
                  </span>
                  để mang đến những trải nghiệm thị giác độc đáo và chuyên
                  nghiệp.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div
              className={`transition-all duration-1000 ease-out delay-500 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl p-8 border border-purple-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Sứ mệnh</h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Chúng tôi tin rằng nghệ thuật không chỉ là giải trí, mà còn là
                  phương tiện truyền tải những
                  <span className="font-semibold text-purple-600">
                    {" "}
                    thông điệp tích cực, ý nghĩa
                  </span>{" "}
                  đến cộng đồng. Mỗi dự án của Dream Draft đều hướng đến việc
                  tạo ra những sản phẩm có giá trị, góp phần xây dựng một thế
                  giới tốt đẹp hơn.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Dự án đại diện
                  <span className="font-bold text-[#f6a248] ">
                    "Màu của hòa bình"
                  </span>
                  - bộ phim hoạt hình 3D 10 phút về chiến tranh Việt Nam, thể
                  hiện khát vọng hòa bình qua ngôn ngữ điện ảnh hiện đại, nhằm
                  giáo dục lòng biết ơn và tinh thần yêu nước cho thế hệ trẻ.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div
              className={`transition-all duration-1000 ease-out delay-700 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-8 border border-blue-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Tầm nhìn</h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Dream Draft hướng tới việc trở thành một
                  <span className="font-semibold text-blue-600">
                    {" "}
                    thương hiệu sáng tạo nội dung hoạt hình 3D chuyên nghiệp
                  </span>
                  , được biết đến với những tác phẩm chất lượng cao và giàu ý
                  nghĩa nhân văn.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Chúng tôi không chỉ tạo ra sản phẩm giải trí, mà còn đóng vai
                  trò
                  <span className="font-medium text-indigo-600">
                    {" "}
                    "cầu nối"
                  </span>
                  giúp thế hệ trẻ hiểu sâu hơn về lịch sử dân tộc, góp phần xây
                  dựng ngành công nghiệp sáng tạo Việt Nam với những tác phẩm
                  mang đậm bản sắc và chiều sâu văn hóa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div
            className={`transition-all duration-1000 ease-out delay-400 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
                Giá trị cốt lõi
              </h2>
            </div>

            <div className="space-y-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ease-out transform ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${600 + index * 150}ms` }}
                  >
                    <div className="group hover:scale-105 transition-all duration-300">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/30 hover:shadow-2xl hover:border-white/50">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                              {value.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
