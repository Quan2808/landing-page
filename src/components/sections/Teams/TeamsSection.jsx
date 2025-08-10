import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useIntersectionObserver from "@hooks/useIntersectionObserver.js";
import TeamIntro from "./TeamIntro";
import TeamMembers from "./TeamMembers";
import { Avatars } from "@images/avatars";

export default function TeamsSection() {
  const [sectionRef, isVisible] = useIntersectionObserver(0.6);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const teamMembers = [
    {
      name: "Văn Bá Vũ",
      src:  Avatars.vu,
      alt: "Team member Văn Bá Vũ",
      role: "Trưởng nhóm",
      delay: "delay-[1000ms]",
    },
    {
      name: "Nguyễn Ngọc Thống",
      src: Avatars.thong,
      alt: "Team member Nguyễn Ngọc Thống",
      role: "Thành viên",
      delay: "delay-[1200ms]",
    },
    {
      name: "Trần Đăng Khôi",
      src: Avatars.khoi,
      alt: "Team member Trần Đăng Khôi",
      role: "Thành viên",
      delay: "delay-[1400ms]",
    },
    {
      name: "Lê Thành Tín",
      src: Avatars.tin,
      alt: "Team member Lê Thành Tín",
      role: "Thành viên",
      delay: "delay-[1600ms]",
    },
    {
      name: "Nguyễn Thắng Nhật",
      src: Avatars.nhat,
      alt: "Team member Nguyễn Thắng Nhật",
      role: "Thành viên",
      delay: "delay-[1800ms]",
    },
    {
      name: "Trần Hữu Bảo",
      src: Avatars.bao,
      alt: "Team member Trần Hữu Bảo",
      role: "Operations Manager",
      delay: "delay-[2000ms]",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, teamMembers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 "
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Header Section */}
        <TeamIntro isVisible={isVisible} teamMembers={teamMembers} />

        {/* Team Members Section */}
        <TeamMembers
          isVisible={isVisible}
          teamMembers={teamMembers}
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          goToSlide={goToSlide}
        />
      </div>
    </section>
  );
}
