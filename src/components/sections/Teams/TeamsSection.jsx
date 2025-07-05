import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useIntersectionObserver from "@hooks/useIntersectionObserver.js";
import TeamIntro from "./TeamIntro";
import TeamMembers from "./TeamMembers";

export default function TeamsSection() {
  const [sectionRef, isVisible] = useIntersectionObserver(0.6);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const teamMembers = [
    {
      name: "Trịnh Trần Phương Tứn",
      src: "https://images2.thanhnien.vn/528068263637045248/2025/5/26/edit-48427799012203294996640565770072566130465660n-174827854706467715024.jpeg",
      alt: "Team member Trịnh Trần Phương Tứn",
      role: "Creative Director",
      delay: "delay-[1000ms]",
    },
    {
      name: "Tuấn Trịnh",
      src: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/3/13/1314771/Jack-1-1.jpeg",
      alt: "Team member Tuấn Trịnh",
      role: "Lead Designer",
      delay: "delay-[1200ms]",
    },
    {
      name: "J97",
      src: "https://cdn.24h.com.vn/upload/3-2022/images/2022-07-22/MV-moi-gay-nhieu-tranh-cai-Jack-kiem-duoc-bao-nhieu-tien-tu-kenh-YouTube-anh-1-1658471533-451-width739height663.jpg",
      alt: "Team member J97",
      role: "Technical Lead",
      delay: "delay-[1400ms]",
    },
    {
      name: "Jack",
      src: "https://thanhnien.mediacdn.vn/Uploaded/haoph/2021_10_21/jack-va-thien-an-5805.jpeg",
      alt: "Team member Jack",
      role: "Product Manager",
      delay: "delay-[1600ms]",
    },
    {
      name: "Meo Meo",
      src: "https://vcdn1-giaitri.vnecdn.net/2021/01/17/jack-2-3889-1610846872.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=R_oQZ2idkj_DYhYQed_Jmw",
      alt: "Team member Meo Meo",
      role: "Marketing Director",
      delay: "delay-[1800ms]",
    },
    {
      name: "Borcon",
      src: "https://scontent.fdad2-1.fna.fbcdn.net/v/t51.75761-15/505433084_18125454988445889_8437539079780816781_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7rpMiXX6KhQQ7kNvwGu4voe&_nc_oc=Adnn4zdTD-tDsVVPZW6H4wMVqD41ULWi0LNjAKlRmfrYfV0L2E-9ifEM-4wZxYKtHo4&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=5mMUUje67dSUUUns-U94xQ&oh=00_AfOfWhZ-oqo4uF06wqAYOkhRhKaGbeD2BAkWf1R5pF1VFA&oe=6855FCD5",
      alt: "Team member Borcon",
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
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 from-slate-50 to-blue-50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30"></div>
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
