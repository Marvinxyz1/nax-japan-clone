import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import ServiceMegaMenu from './ServiceMegaMenu';

// 下拉箭头 SVG 组件
const ChevronDown = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 28 16"
    className="align-middle w-2.5 h-2.5 inline-block overflow-hidden ml-1"
  >
    <path
      d="M1.57 1.59l12.76 12.77L27.1 1.59"
      strokeWidth="2px"
      stroke="currentColor"
      fill="none"
    />
  </svg>
);

// 搜索图标
const SearchIcon = () => (
  <svg viewBox="0 0 64 64" className="w-6 h-6">
    <path
      d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
);

// 电话图标
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// 导航数据
const navItems = [
  {
    label: '事業紹介',
    labelEn: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { label: '国際輸送', labelEn: 'International', href: '/services/international' },
      { label: '国内配送', labelEn: 'Domestic', href: '/services/domestic' },
      { label: '倉庫管理', labelEn: 'Warehouse', href: '/services/warehouse' },
    ],
  },
  {
    label: 'ソリューション',
    labelEn: 'Solutions',
    href: '/solutions',
    hasDropdown: true,
    dropdownItems: [
      { label: '企業向け', labelEn: 'For Business', href: '/solutions/business' },
      { label: '個人向け', labelEn: 'For Personal', href: '/solutions/personal' },
    ],
  },
  {
    label: '会社概要',
    labelEn: 'About',
    href: '/about',
    hasDropdown: false,
  },
  {
    label: 'ニュース',
    labelEn: 'News',
    href: '/news',
    hasDropdown: false,
  },
  {
    label: '採用情報',
    labelEn: 'Careers',
    href: '/careers',
    hasDropdown: false,
  },
  {
    label: 'お問い合わせ',
    labelEn: 'Contact',
    href: '/contact',
    hasDropdown: false,
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      // 当滚动超过 50px 时显示白色背景
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // 初始检查
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 根据滚动状态决定样式
  const headerBg = isScrolled
    ? 'bg-white border-b border-gray-200 shadow-sm'
    : 'bg-transparent border-b border-transparent';

  const textColor = isScrolled ? 'text-gray-700' : 'text-white';
  const textColorHover = isScrolled ? 'hover:text-nax-orange' : 'hover:text-nax-orange';
  const iconColor = isScrolled ? 'text-gray-600' : 'text-white';
  const menuBtnStyle = isScrolled
    ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
    : 'border-white text-white hover:bg-white hover:text-gray-900';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[2000] transition-all duration-300 ${headerBg}`}
      >
        {/* メインヘッダー */}
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center h-[80px]">
            {/* Logo */}
            <div className="min-w-[100px] flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="https://www.top-sbl.jp/wp-content/uploads/2025/01/logo-e1740473656212.png"
                  alt="SBL株式会社"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-grow">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.href} className="relative group">
                    {/* 事業紹介 使用 Megamenu - hover 触发 */}
                    {item.label === '事業紹介' ? (
                      <button
                        type="button"
                        onMouseEnter={() => setIsServiceMenuOpen(true)}
                        className={`inline-flex items-center px-3 py-2.5 text-[15px] font-medium tracking-wide transition-colors ${textColor} ${textColorHover} ${isServiceMenuOpen ? 'text-nax-orange' : ''}`}
                      >
                        {item.label}
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 28 16"
                          className={`align-middle w-2.5 h-2.5 inline-block overflow-hidden ml-1 transition-transform ${isServiceMenuOpen ? 'rotate-180' : ''}`}
                        >
                          <path
                            d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            strokeWidth="2px"
                            stroke="currentColor"
                            fill="none"
                          />
                        </svg>
                      </button>
                    ) : (
                      <>
                        <Link
                          to={item.href}
                          className={`inline-flex items-center px-3 py-2.5 text-[15px] font-medium tracking-wide transition-colors ${textColor} ${textColorHover}`}
                        >
                          {item.label}
                          {item.hasDropdown && <ChevronDown />}
                        </Link>

                        {/* Dropdown Menu (for other items) */}
                        {item.hasDropdown && item.dropdownItems && (
                          <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div className="bg-white min-w-[200px] py-4 shadow-lg border border-gray-100 rounded-sm">
                              {item.dropdownItems.map((dropItem) => (
                                <Link
                                  key={dropItem.href}
                                  to={dropItem.href}
                                  className="block px-6 py-3 text-[14px] text-gray-600 hover:text-nax-orange hover:bg-gray-50 transition-colors"
                                >
                                  <span className="block font-medium">{dropItem.label}</span>
                                  <span className="block text-[12px] text-gray-400 mt-0.5">
                                    {dropItem.labelEn}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Language Switcher - Desktop (EN Button) */}
              <button
                type="button"
                className="hidden lg:flex items-center justify-center w-8 h-8 relative"
              >
                <span className="bg-white/20 text-[#3a3a3a] font-[din-condensed,sans-serif] font-medium text-center text-sm w-full h-full flex justify-center items-center rounded-sm hover:bg-white/40 transition-colors">
                  EN
                </span>
              </button>

              {/* Search Icon - Desktop */}
              <Link
                to="/search"
                className={`hidden lg:flex items-center justify-center w-10 h-10 transition-colors ${iconColor} hover:opacity-80`}
              >
                <SearchIcon />
              </Link>

              {/* Contact Icon - Desktop */}
              <Link
                to="/contact"
                className={`hidden lg:flex items-center justify-center w-10 h-10 transition-colors ${iconColor} hover:opacity-80`}
              >
                <PhoneIcon />
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden flex items-center gap-2 px-4 py-2 border transition-colors ${menuBtnStyle}`}
              >
                <span className="text-sm font-medium tracking-wider">MENU</span>
                <span className="flex flex-col gap-1">
                  <span
                    className={`w-5 h-0.5 bg-current transition-transform ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  />
                  <span
                    className={`w-5 h-0.5 bg-current transition-opacity ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`w-5 h-0.5 bg-current transition-transform ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Service Megamenu */}
      <ServiceMegaMenu
        isOpen={isServiceMenuOpen}
        onClose={() => setIsServiceMenuOpen(false)}
      />

    </>
  );
}
