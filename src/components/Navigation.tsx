
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const handleAboutToggle = () => {
    setIsAboutOpen(!isAboutOpen);
  };

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
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            SBRT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map((link, index) => (
              <div key={index} className="relative group">
                {link.isDropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer text-sm font-medium text-sbrt-500 hover:text-sbrt-600">
                    <span>{link.text}</span>
                    <ChevronDown className="h-4 w-4" />
                    {/* Dropdown Menu */}
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="py-2">
                        {link.subItems?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`block px-4 py-2 text-sm hover:bg-sbrt-50 ${
                              location.pathname === subItem.path
                                ? "text-sbrt-800 bg-sbrt-50"
                                : "text-sbrt-500"
                            }`}
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-sbrt-600 ${
                      location.pathname === link.path
                        ? "text-sbrt-800"
                        : "text-sbrt-500"
                    }`}
                  >
                    {link.text}
                  </Link>
                )}
              </div>
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
              {links.map((link, index) => (
                <div key={index}>
                  {link.isDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                        className="flex items-center justify-between w-full text-sm font-medium text-sbrt-500 hover:text-sbrt-600"
                      >
                        <span>{link.text}</span>
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isAboutOpen && (
                        <div className="mt-2 mr-4 space-y-2">
                          {link.subItems?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className={`block text-sm hover:text-sbrt-600 ${
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
