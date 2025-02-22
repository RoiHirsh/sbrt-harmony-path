
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/", text: "דף הבית" },
    { path: "/about", text: "אודות" },
    { path: "/method", text: "השיטה" },
    { path: "/practice", text: "תרגול אישי" },
    { path: "/programs", text: "תוכניות והדרכות" },
    { path: "/testimonials", text: "המלצות" },
    { path: "/partners", text: "שותפויות" },
    { path: "/contact", text: "צור קשר" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            SBRT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-sbrt-600 ${
                  location.pathname === link.path
                    ? "text-sbrt-800"
                    : "text-sbrt-500"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 right-0 w-full bg-white border-b border-gray-200 animate-slide-up">
            <div className="flex flex-col space-y-4 p-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-sbrt-600 ${
                    location.pathname === link.path
                      ? "text-sbrt-800"
                      : "text-sbrt-500"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
