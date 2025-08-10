import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TeamMembers({
  isVisible,
  teamMembers,
  currentSlide,
  nextSlide,
  prevSlide,
  goToSlide,
}) {
  // Helper function to get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2); // Limit to 2 characters
  };

  // Helper function to generate background color based on name
  const getAvatarColor = (name) => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-indigo-500",
      "bg-teal-500",
      "bg-orange-500",
      "bg-cyan-500",
    ];
    const hash = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  // Calculate maximum slides for desktop (showing 5 items at a time)
  const maxDesktopSlides = Math.max(0, teamMembers.length - 5);
  
  // Handle infinite loop for desktop
  const getDesktopSlidePosition = () => {
    if (teamMembers.length <= 5) return 0;
    return (currentSlide % (maxDesktopSlides + 1)) * 20;
  };
  
  // Handle infinite loop for mobile
  const getMobileSlidePosition = () => {
    if (teamMembers.length <= 1) return 0;
    return (currentSlide % teamMembers.length) * 100;
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Desktop Horizontal Carousel Layout */}
      <div className="hidden md:block relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${getDesktopSlidePosition()}%)` }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`w-1/5 flex-shrink-0 px-4 transition-all duration-1000 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${member.delay || ""}`}
              >
                <div className="block group">
                  <div className="relative mb-6">
                    {member.src ? (
                      <div className="w-48 h-72 mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={member.src}
                          alt={member.alt}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-48 h-72 rounded-2xl mx-auto transition-all duration-500 shadow-lg group-hover:shadow-xl ${getAvatarColor(
                          member.name
                        )} flex items-center justify-center`}
                      >
                        <span className="text-white text-6xl font-bold">
                          {getInitials(member.name)}
                        </span>
                      </div>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                    {member.name}
                  </h4>
                  <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Carousel Controls */}
        {teamMembers.length > 5 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>
          </>
        )}

        {/* Desktop Carousel Indicators */}
        {teamMembers.length > 5 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from(
              { length: maxDesktopSlides + 1 },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    (currentSlide % (maxDesktopSlides + 1)) === index
                      ? "bg-indigo-600 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        )}
      </div>

      {/* Mobile Carousel Layout */}
      <div className="md:hidden relative">
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${getMobileSlidePosition()}%)` }}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-auto max-w-sm">
                  <div className="relative p-6">
                    {member.src ? (
                      <div className="w-64 h-96 mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={member.src}
                          alt={member.alt}
                          className="w-full h-full object-cover transition-all duration-500"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-64 h-96 rounded-2xl mx-auto transition-all duration-500 shadow-lg ${getAvatarColor(
                          member.name
                        )} flex items-center justify-center`}
                      >
                        <span className="text-white text-6xl font-bold">
                          {getInitials(member.name)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 capitalize text-center">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-lg text-center block">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel Controls */}
        {teamMembers.length > 1 && (
          <>
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
          </>
        )}

        {/* Mobile Carousel Indicators */}
        {teamMembers.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  (currentSlide % teamMembers.length) === index
                    ? "bg-indigo-600 scale-125"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}