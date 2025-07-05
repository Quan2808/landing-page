import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TeamMembers({
  isVisible,
  teamMembers,
  currentSlide,
  nextSlide,
  prevSlide,
  goToSlide,
}) {
  return (
    <div className="w-full max-w-lg">
      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`group transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } ${member.delay} ${index % 2 === 1 ? "md:mt-12" : ""} ${
              index === 4 ? "md:-mt-12" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.src}
                  alt={member.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-200">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel Layout */}
      <div className="md:hidden relative">
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-auto max-w-sm">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.src}
                      alt={member.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-xl text-slate-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-slate-600 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-5 h-5 text-slate-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
          aria-label="Next team member"
        >
          <ChevronRight className="w-5 h-5 text-slate-700" />
        </button>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-600 scale-125"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
