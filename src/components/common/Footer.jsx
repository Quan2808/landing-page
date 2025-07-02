import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import logo from "@/assets/images/logo.png"; // Adjust path if different
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = [
  {
    label: "YouTube",
    icon: <FontAwesomeIcon icon={faYoutube} size="xl" />,
    href: "https://youtube.com/@dreamdraft",
  },
  {
    label: "TikTok",
    icon: <FontAwesomeIcon icon={faTiktok} size="xl" />,
    href: "https://tiktok.com/@dreamdraft_36",
  },
  {
    label: "Facebook",
    icon: <FontAwesomeIcon icon={faFacebook} size="xl" />,
    href: "https://facebook.com/61577429309445",
  },
  {
    label: "Instagram",
    icon: <FontAwesomeIcon icon={faInstagram} size="xl" />,
    href: "https://instagram.com/dreamdraft_36",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-b border-white/20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-12 bg-cover bg-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Dream Draft Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#425261]">
              <span>DREAM </span>
              <span className="text-[#f6a248]">DRAFT</span>
            </span>
          </a>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
            <div>
              <span className="block text-sm font-medium text-[#425261] mb-2">
                Contact us at:
              </span>
              <ul className="flex items-center text-sm font-medium text-[#425261]">
                <li className="hover:underline">
                  <a
                    href="mailto:draftdream36@gmail.com"
                    className="text-[#425261] hover:text-[#6B7280] transition-colors duration-300 flex items-center gap-2 no-underline"
                    aria-label="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={24} />
                    draftdream36@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="block text-sm font-medium text-[#425261] mb-2">
                Social links:
              </span>
              <ul className="flex items-center text-sm font-medium text-[#425261]">
                {socialLinks.map((link) => (
                  <li key={link.label} className="hover:underline me-4">
                    <a
                      href={link.href}
                      className="text-[#425261] hover:text-[#6B7280]  transition-colors duration-300"
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-96 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <span className="block text-sm text-[#425261] sm:text-center">
          © {new Date().getFullYear()} Dream Draft, Inc. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
