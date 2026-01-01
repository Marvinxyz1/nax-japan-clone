import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <nav
      className={`fixed inset-0 bg-nax-orange z-[1200] transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Top Right: EN & Close Button */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <button className="w-[60px] h-[60px] bg-[#f5d5c8] text-nax-orange font-din text-sm flex items-center justify-center hover:opacity-80 transition-opacity">
          EN
        </button>
        <button
          onClick={onClose}
          className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="h-full flex flex-row-reverse justify-between overflow-y-auto">
        {/* Menu Links */}
        <div className="min-w-[300px] md:min-w-[500px] pt-[100px] pb-5 px-8 md:pr-20">
          <ul className="flex flex-col gap-1">
            {/* HOME */}
            <li>
              <Link
                to="/"
                onClick={onClose}
                className="text-white font-din text-3xl md:text-[40px] tracking-wider hover:text-nax-gray transition-colors"
              >
                HOME
              </Link>
            </li>

            {/* NEWS */}
            <li className="mt-2">
              <Link
                to="/news"
                onClick={onClose}
                className="text-white font-din text-3xl md:text-[40px] tracking-wider hover:text-nax-gray transition-colors"
              >
                NEWS
              </Link>
            </li>

            {/* SOLUTIONS */}
            <li className="mt-2">
              <Link
                to="/solutions"
                onClick={onClose}
                className="text-white font-din text-3xl md:text-[40px] tracking-wider hover:text-nax-gray transition-colors"
              >
                SOLUTIONS
              </Link>
            </li>

            {/* COMPANY with sub-links */}
            <li className="mt-4">
              <span className="text-white font-din text-3xl md:text-[40px] tracking-wider">
                COMPANY
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
                <Link
                  to="/philosophy"
                  onClick={onClose}
                  className="text-white font-din text-sm md:text-base tracking-wider hover:text-nax-gray transition-colors"
                >
                  PHILOSOPHY
                </Link>
                <Link
                  to="/information"
                  onClick={onClose}
                  className="text-white font-din text-sm md:text-base tracking-wider hover:text-nax-gray transition-colors"
                >
                  INFORMATION
                </Link>
                <Link
                  to="/history"
                  onClick={onClose}
                  className="text-white font-din text-sm md:text-base tracking-wider hover:text-nax-gray transition-colors"
                >
                  HISTORY
                </Link>
                <Link
                  to="/office"
                  onClick={onClose}
                  className="text-white font-din text-sm md:text-base tracking-wider hover:text-nax-gray transition-colors"
                >
                  OFFICE
                </Link>
              </div>
            </li>

            {/* CHALLENGE with sub-links */}
            <li className="mt-6">
              <span className="text-white font-din text-3xl md:text-[40px] tracking-wider">
                CHALLENGE
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
                <Link
                  to="/challenge/dx"
                  onClick={onClose}
                  className="text-white font-din text-sm md:text-base tracking-wider hover:text-nax-gray transition-colors"
                >
                  DIGITAL TRANSFORMATION
                </Link>
                <Link
                  to="/challenge/environment"
                  onClick={onClose}
                  className="text-white font-din text-sm md:text-base tracking-wider hover:text-nax-gray transition-colors"
                >
                  ENVIRONMENT
                </Link>
                <Link
                  to="/challenge/certification"
                  onClick={onClose}
                  className="text-white font-din text-sm md:text-base tracking-wider hover:text-nax-gray transition-colors"
                >
                  CERTIFICATION
                </Link>
              </div>
            </li>
          </ul>

          {/* Contact Button */}
          <div className="mt-16">
            <Link
              to="/contact"
              onClick={onClose}
              className="text-white font-din text-xl md:text-2xl tracking-tight text-center w-full md:w-[320px] h-[80px] inline-flex justify-center items-center border-2 border-white hover:bg-white hover:text-nax-orange transition-colors"
            >
              CONTACT US
            </Link>
          </div>
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
