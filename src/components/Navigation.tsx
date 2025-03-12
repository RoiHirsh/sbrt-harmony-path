
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/", text: "דף הבית" },
    {
      text: "אודות",
      isDropdown: true,
      subItems: [
        { path: "/about", text: "על איתן ברוח" },
        { path: "/team", text: "צוות ההנהלה" },
        { path: "/legacy", text: "המורשת של יצחק (בנבה) בן בַּשָּׂט ז\"ל" }
      ]
    },
    { path: "/method", text: "השיטה" },
    { path: "/practice", text: "תרגול אישי" },
    { path: "/programs", text: "תוכניות והדרכות" },
    { path: "/testimonials", text: "המלצות" },
    { path: "/partners", text: "שותפויות" },
    { path: "/contact", text: "צור קשר" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-full mx-auto">
        <div className="flex justify-between items-center h-16 px-4">
          <Link to="/" className="text-xl font-bold">
            SBRT
          </Link>

          {/* Center Hamburger Menu Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-sbrt-600" />
              ) : (
                <Menu className="h-6 w-6 text-sbrt-600" />
              )}
            </button>
          </div>

          {/* Empty div to maintain flex justify-between */}
          <div className="w-[52px]"></div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="absolute top-16 right-0 w-full bg-white border-b border-gray-200 shadow-lg animate-slide-up">
            <div className="flex flex-col space-y-4 p-4">
              {links.map((link, index) => (
                <div key={index} className="flex flex-col items-center">
                  {link.isDropdown ? (
                    <div className="w-full flex flex-col items-center">
                      <button
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                        className="flex items-center gap-2 text-sm font-medium text-sbrt-500 hover:text-sbrt-600"
                      >
                        <span>{link.text}</span>
                        <ChevronDown 
                          className={`h-4 w-4 transform transition-transform ${
                            isAboutOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {isAboutOpen && (
                        <div className="mt-2 space-y-2 w-full flex flex-col items-center">
                          {link.subItems?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className={`block text-sm hover:text-sbrt-600 text-center ${
                                location.pathname === subItem.path
                                  ? "text-sbrt-800"
                                  : "text-sbrt-500"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
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
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
