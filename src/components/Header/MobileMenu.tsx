import { useState } from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// 展开/收起箭头
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (key: string) => {
    setExpandedItems((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <nav
      className={`fixed inset-0 bg-white z-[1200] transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <Link to="/" onClick={onClose} className="flex items-center">
          <img
            src="https://www.top-sbl.jp/wp-content/uploads/2025/01/logo-e1740473656212.png"
            alt="SBL株式会社"
            className="h-8 w-auto"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="メニューを閉じる"
          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Menu Content */}
      <div className="h-[calc(100%-72px)] overflow-y-auto">
        <div className="py-4">
          {/* HOME */}
          <Link
            to="/"
            onClick={onClose}
            className="block px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-nax-orange transition-colors"
          >
            ホーム
            <span className="block text-sm text-gray-400 mt-0.5">HOME</span>
          </Link>

          {/* 事業紹介 - Expandable */}
          <div className="border-t border-gray-100">
            <button
              type="button"
              onClick={() => toggleExpand('services')}
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <span>
                事業紹介
                <span className="block text-sm text-gray-400 mt-0.5">SERVICES</span>
              </span>
              <ChevronIcon isOpen={expandedItems.includes('services')} />
            </button>
            {expandedItems.includes('services') && (
              <div className="bg-gray-50 py-2">
                <Link
                  to="/services/international"
                  onClick={onClose}
                  className="block px-10 py-3 text-gray-600 hover:text-nax-orange transition-colors"
                >
                  国際輸送
                  <span className="text-sm text-gray-400 ml-2">International</span>
                </Link>
                <Link
                  to="/services/domestic"
                  onClick={onClose}
                  className="block px-10 py-3 text-gray-600 hover:text-nax-orange transition-colors"
                >
                  国内配送
                  <span className="text-sm text-gray-400 ml-2">Domestic</span>
                </Link>
                <Link
                  to="/services/warehouse"
                  onClick={onClose}
                  className="block px-10 py-3 text-gray-600 hover:text-nax-orange transition-colors"
                >
                  倉庫管理
                  <span className="text-sm text-gray-400 ml-2">Warehouse</span>
                </Link>
              </div>
            )}
          </div>

          {/* ソリューション - Expandable */}
          <div className="border-t border-gray-100">
            <button
              type="button"
              onClick={() => toggleExpand('solutions')}
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <span>
                ソリューション
                <span className="block text-sm text-gray-400 mt-0.5">SOLUTIONS</span>
              </span>
              <ChevronIcon isOpen={expandedItems.includes('solutions')} />
            </button>
            {expandedItems.includes('solutions') && (
              <div className="bg-gray-50 py-2">
                <Link
                  to="/solutions/business"
                  onClick={onClose}
                  className="block px-10 py-3 text-gray-600 hover:text-nax-orange transition-colors"
                >
                  企業向け
                  <span className="text-sm text-gray-400 ml-2">For Business</span>
                </Link>
                <Link
                  to="/solutions/personal"
                  onClick={onClose}
                  className="block px-10 py-3 text-gray-600 hover:text-nax-orange transition-colors"
                >
                  個人向け
                  <span className="text-sm text-gray-400 ml-2">For Personal</span>
                </Link>
              </div>
            )}
          </div>

          {/* 会社概要 */}
          <Link
            to="/about"
            onClick={onClose}
            className="block px-6 py-4 text-lg font-medium text-gray-800 border-t border-gray-100 hover:bg-gray-50 hover:text-nax-orange transition-colors"
          >
            会社概要
            <span className="block text-sm text-gray-400 mt-0.5">ABOUT</span>
          </Link>

          {/* ニュース */}
          <Link
            to="/news"
            onClick={onClose}
            className="block px-6 py-4 text-lg font-medium text-gray-800 border-t border-gray-100 hover:bg-gray-50 hover:text-nax-orange transition-colors"
          >
            ニュース
            <span className="block text-sm text-gray-400 mt-0.5">NEWS</span>
          </Link>

          {/* 採用情報 */}
          <Link
            to="/careers"
            onClick={onClose}
            className="block px-6 py-4 text-lg font-medium text-gray-800 border-t border-gray-100 hover:bg-gray-50 hover:text-nax-orange transition-colors"
          >
            採用情報
            <span className="block text-sm text-gray-400 mt-0.5">CAREERS</span>
          </Link>

          {/* お問い合わせ */}
          <Link
            to="/contact"
            onClick={onClose}
            className="block px-6 py-4 text-lg font-medium text-gray-800 border-t border-gray-100 hover:bg-gray-50 hover:text-nax-orange transition-colors"
          >
            お問い合わせ
            <span className="block text-sm text-gray-400 mt-0.5">CONTACT</span>
          </Link>
        </div>

        {/* Language Switcher */}
        <div className="px-6 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">言語 / Language</p>
          <div className="flex gap-2">
            <button type="button" className="px-4 py-2 text-sm bg-gray-800 text-white rounded">
              日本語
            </button>
            <button type="button" className="px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded hover:bg-gray-200">
              English
            </button>
            <button type="button" className="px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded hover:bg-gray-200">
              中文
            </button>
          </div>
        </div>

        {/* Contact Button */}
        <div className="px-6 py-6">
          <Link
            to="/contact"
            onClick={onClose}
            className="block w-full py-4 text-center text-white bg-nax-orange font-medium hover:bg-opacity-90 transition-colors"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </div>
    </nav>
  );
}
