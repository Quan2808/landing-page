import { useState, useEffect } from "react";
import logo from "@/assets/images/lg2.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navigationItems = [
    { id: "hero", label: "Trang chủ" },
    { id: "introduce", label: "Giới thiệu" },
    { id: "characterIntroduce", label: "Nhân vật" },
    { id: "teams", label: "Đội ngũ" },
    { id: "Technical", label: "Kỹ thuật" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Show header background when scrolling past HeroSection
        setIsVisible(scrollPosition > heroHeight - 100);
      }

      // Determine active section
      const sections = navigationItems.map((item) => item.id);
      const currentSection = sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out">
      <div
        className={`transition-all duration-500 ease-in-out ${
          isVisible
            ? "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo bên trái */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src={logo} alt="Logo" className="h-24 mr-3" />
                <div>
                  <h1
                    className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                      isVisible ? "text-[#425261]" : "text-white"
                    }`}
                  >
                    <span>Màu Của </span>
                    <span className="text-[#f6a248]">Hòa Bình</span>
                  </h1>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`text-sm font-medium transition-all duration-300 hover:text-[#f6a248] relative no-underline ${
                    activeSection === item.id
                      ? "text-[#f6a248]"
                      : isVisible
                      ? "text-[#425261]"
                      : "text-white"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#f6a248] rounded-full"></span>
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`inline-flex items-center justify-center p-2 hover:text-[#f6a248] transition-colors duration-300 ${
                  isVisible ? "text-[#425261]" : "text-white"
                }`}
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:text-[#f6a248] ${
                    activeSection === item.id
                      ? "text-[#f6a248] border-l-2 border-[#f6a248]"
                      : isVisible
                      ? "text-[#425261]"
                      : "text-white"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
