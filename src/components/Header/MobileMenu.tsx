import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuLinks = [
    { href: '/', label: 'HOME' },
    { href: '/news', label: 'NEWS' },
    { href: '/solutions', label: 'SOLUTIONS' },
    { href: '/philosophy', label: 'PHILOSOPHY' },
    { href: '/information', label: 'INFORMATION' },
    { href: '/history', label: 'HISTORY' },
    { href: '/office', label: 'OFFICE' },
    { href: '/challenge', label: 'CHALLENGE' },
    { href: '/challenge/dx', label: 'DIGITAL TRANSFORMATION' },
    { href: '/challenge/environment', label: 'ENVIRONMENT' },
    { href: '/challenge/certification', label: 'CERTIFICATION' },
  ];

  return (
    <nav
      className={`fixed inset-0 bg-nax-orange z-[1200] transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full flex flex-row-reverse justify-between overflow-y-auto">
        {/* Menu Links */}
        <div className="min-w-[300px] md:min-w-[483px] pt-[120px] pb-5 px-8 md:pr-28">
          <ul className="flex flex-col gap-4">
            {menuLinks.map((link) => (
              <li key={link.href} className="pt-2">
                <Link
                  to={link.href}
                  onClick={onClose}
                  className="text-white font-din text-2xl md:text-[32px] tracking-wider hover:text-nax-gray transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="mt-20">
            <Link
              to="/contact"
              onClick={onClose}
              className="bg-nax-orange text-white font-din text-xl md:text-2xl tracking-tight text-center w-full md:w-[312px] h-[70px] inline-flex justify-center items-center border border-white hover:text-nax-gray hover:border-nax-gray transition-colors"
            >
              CONTACT US
            </Link>
          </div>

          {/* Language Switch */}
          <div className="flex items-center gap-4 mt-10">
            <Link to="/" className="text-white font-din text-lg hover:text-nax-gray">JP</Link>
            <span className="text-white">|</span>
            <Link to="/" className="text-white font-din text-lg hover:text-nax-gray">EN</Link>
          </div>

          {/* Copyright */}
          <p className="text-white font-din font-light text-sm mt-10">
            Copyright © NAX JAPAN All Rights Reserved.
          </p>
        </div>

        {/* Background Image */}
        <div className="hidden md:block flex-grow">
          <img
            src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/common/bg_header_pc.webp"
            alt=""
            className="w-full h-full object-cover object-right"
          />
        </div>
      </div>
    </nav>
  );
}
