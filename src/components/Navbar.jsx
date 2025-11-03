import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Track scrolling to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "specials", "about", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 80; // adjust for navbar height
          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function for active link styling
  const linkClass = (id) =>
    activeSection === id
      ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
      : "hover:text-yellow-300";

  return (
    <nav className="bg-[var(--brand-color)] text-white fixed top-0 left-0 w-full shadow-md backdrop-blur-sm z-50 pl-3 pr-3">

      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img 
            src="/Mainimage.png" 
            alt="Aha Amma Vanta Amrutham" 
            className="h-10 w-10 rounded-full"
          />
         <h1 className="text-4xl font-village">Aha Inti Vanta</h1>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-village space-x-6 text-lg">
          <li><a href="#home" className={linkClass("home")}>Home</a></li>
          <li><a href="#menu" className={linkClass("menu")}>Menu</a></li>
          <li><a href="#specials" className={linkClass("specials")}>Specials</a></li>
          <li><a href="#about" className={linkClass("about")}>About</a></li>
          <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-red-700/95 backdrop-blur-sm">
          <ul className="flex flex-col space-y-4 p-4 text-lg">
            <li><a href="#home" onClick={toggleMenu} className={linkClass("home")}>Home</a></li>
            <li><a href="#menu" onClick={toggleMenu} className={linkClass("menu")}>Menu</a></li>
            <li><a href="#specials" onClick={toggleMenu} className={linkClass("specials")}>Specials</a></li>
            <li><a href="#about" onClick={toggleMenu} className={linkClass("about")}>About</a></li>
            <li><a href="#contact" onClick={toggleMenu} className={linkClass("contact")}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
