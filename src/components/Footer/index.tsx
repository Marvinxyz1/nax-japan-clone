import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export default function Footer() {
  const footerLinks: {
    main: FooterLink[];
    company: FooterLink[];
    challenge: FooterLink[];
    other: FooterLink[];
  } = {
    main: [
      { label: 'HOME', href: '/' },
      { label: 'NEWS', href: '/news' },
      { label: 'SOLUTIONS', href: '/solutions' },
    ],
    company: [
      { label: 'PHILOSOPHY', href: '/philosophy' },
      { label: 'INFORMATION', href: '/information' },
      { label: 'HISTORY', href: '/history' },
      { label: 'OFFICE', href: '/office' },
    ],
    challenge: [
      { label: 'CHALLENGE', href: '/challenge' },
      { label: 'DIGITAL TRANSFORMATION', href: '/challenge/dx' },
      { label: 'ENVIRONMENT', href: '/environment' },
      { label: 'CERTIFICATION', href: '/challenge/certification' },
    ],
    other: [
      { label: 'PRIVACY', href: '/privacy' },
      { label: 'CUSTOMER HARASSMENT POLICY', href: '/customer-harassment-policy' },
      { label: 'RECRUIT', href: 'https://recruit.naxjapan.com/', external: true },
      { label: 'CONTACT', href: '/contact' },
    ],
  };

  const renderLink = (link: FooterLink) => {
    if (link.external) {
      return (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-sm font-din tracking-wider mb-3 hover:text-nax-orange transition-colors"
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        className="block text-sm font-din tracking-wider mb-3 hover:text-nax-orange transition-colors"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <footer className="bg-nax-dark text-white py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left: Company Info */}
          <div className="md:w-1/3">
            <Link to="/" className="inline-block mb-6">
              <img
                src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/common/logo_footer.webp"
                alt="NAX JAPAN"
                className="w-[130px]"
              />
            </Link>
            <p className="font-medium mb-4">NAX JAPAN株式会社</p>
            <p className="text-sm leading-relaxed text-neutral-400">
              〒104-0061
              <br />
              東京都中央区銀座5-13-3
              <br />
              いちかわビル4階
            </p>
            <p className="text-sm mt-4">
              <span className="text-neutral-400">Tel.</span>03-3541-3480
            </p>
          </div>

          {/* Right: Navigation Links */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Main Links */}
              <div>
                {footerLinks.main.map(renderLink)}
              </div>

              {/* Company Links */}
              <div>
                <p className="text-sm font-din tracking-wider mb-3 text-neutral-500">
                  COMPANY
                </p>
                {footerLinks.company.map(renderLink)}
              </div>

              {/* Challenge Links */}
              <div>
                {footerLinks.challenge.map(renderLink)}
              </div>

              {/* Other Links */}
              <div>
                {footerLinks.other.map(renderLink)}
              </div>
            </div>

            {/* Social & Language */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-neutral-800">
              <a
                href="https://www.youtube.com/channel/UCgS_9CWr_qiuuUXD7UIvGlg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/common/youtube-logo.webp"
                  alt="YouTube"
                  className="w-8"
                />
              </a>

              <div className="flex items-center gap-4">
                <Link to="/" className="text-sm font-din hover:text-nax-orange transition-colors">
                  JP
                </Link>
                <Link to="/" className="text-sm font-din hover:text-nax-orange transition-colors">
                  EN
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-neutral-500 mt-12">
          Copyright © NAX JAPAN All Rights Reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-8 bottom-8 flex items-center gap-2 text-white hover:opacity-70 transition-opacity"
      >
        <span className="w-6 h-6 flex items-center justify-center border border-white rounded-full">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </span>
        <span className="font-din text-sm tracking-wider">BACK TO TOP</span>
      </button>
    </footer>
  );
}
