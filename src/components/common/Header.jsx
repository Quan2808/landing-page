import { useState, useEffect, useRef } from "react";
import logo from "@/assets/images/logo/text-logo.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef(null);

  // Navigation items
  const navigationItems = [
    { id: "hero", label: "Trang chủ" },
    { id: "BrandIntroduction", label: "Dream Draft" },
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
          // Adjust for mobile header height
          const headerOffset = window.innerWidth < 768 ? 80 : 100;
          return rect.top <= headerOffset && rect.bottom >= headerOffset;
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

  // Update underline position when active section changes
  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(
        `[data-section="${activeSection}"]`
      );
      if (activeLink) {
        const navContainer = navRef.current;
        const containerRect = navContainer.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        const left = linkRect.left - containerRect.left;
        const width = linkRect.width;

        setUnderlineStyle({
          left: `${left}px`,
          width: `${width}px`,
          opacity: 1,
        });
      }
    }
  }, [activeSection, isVisible]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Different header heights for mobile and desktop
      const headerHeight = window.innerWidth < 768 ? 70 : 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out">
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg transition-all duration-500 ease-in-out">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-16">
            {/* Logo bên trái - Responsive sizing */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-16 sm:h-20 lg:h-24 mr-2 sm:mr-3"
                />
                <div className="hidden sm:block">
                  <h1
                    className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                      isVisible ? "text-[#425261]" : "text-white"
                    }`}
                  >
                    <span>Màu Của </span>
                    <span className="text-[#f89e39]">Hòa Bình</span>
                  </h1>
                </div>
              </div>
            </div>

            {/* Navigation Menu - Desktop */}
            <nav
              className="hidden md:flex space-x-6 lg:space-x-8 relative"
              ref={navRef}
            >
              {/* Animated underline */}
              <div
                className="absolute bottom-0 h-0.5 bg-[#f89e39] rounded-full transition-all duration-300 ease-out"
                style={underlineStyle}
              />

              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  data-section={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`text-xs lg:text-sm font-medium transition-all duration-300 hover:text-[#f89e39] relative no-underline px-2 py-1 whitespace-nowrap ${
                    activeSection === item.id
                      ? "text-[#f89e39]"
                      : isVisible
                      ? "text-[#425261]"
                      : "text-white"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`inline-flex items-center justify-center p-2 hover:text-[#f89e39] transition-colors duration-300 ${
                  isVisible ? "text-[#425261]" : "text-white"
                }`}
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-80 overflow-y-auto">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-3 text-sm font-medium transition-all duration-300 hover:text-[#f89e39] hover:bg-white/20 rounded-lg ${
                    activeSection === item.id
                      ? "text-[#f89e39] bg-white/10 border-l-3 border-[#f89e39]"
                      : "text-[#425261]"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
