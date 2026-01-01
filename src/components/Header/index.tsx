import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed z-[2000]">
      <div className="w-full flex justify-between items-center px-5 md:px-10 py-10">
        {/* Logo */}
        <div>
          <Link to="/" className="w-[130px] flex items-center">
            <img
              src="https://www.top-sbl.jp/wp-content/uploads/2025/01/logo-e1740473656212.png"
              alt="SBL株式会社"
              className="w-full max-w-full block"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/philosophy" className="text-white font-din text-sm tracking-wider hover:opacity-70 transition-opacity">
            PHILOSOPHY
          </Link>
          <Link to="/information" className="text-white font-din text-sm tracking-wider hover:opacity-70 transition-opacity">
            INFORMATION
          </Link>
          <Link to="/history" className="text-white font-din text-sm tracking-wider hover:opacity-70 transition-opacity">
            HISTORY
          </Link>
          <Link to="/office" className="text-white font-din text-sm tracking-wider hover:opacity-70 transition-opacity">
            OFFICE
          </Link>
          <Link to="/challenge/dx" className="text-white font-din text-sm tracking-wider hover:opacity-70 transition-opacity">
            DIGITAL TRANSFORMATION
          </Link>
          <Link to="/challenge/environment" className="text-white font-din text-sm tracking-wider hover:opacity-70 transition-opacity">
            ENVIRONMENT
          </Link>
          <Link to="/challenge/certification" className="text-white font-din text-sm tracking-wider hover:opacity-70 transition-opacity">
            CERTIFICATION
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Language Switch */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className="text-white text-sm hover:opacity-70">EN</Link>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            <span className="font-din text-sm tracking-wider">MENU</span>
            <span className="flex flex-col gap-1">
              <span className={`w-5 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
