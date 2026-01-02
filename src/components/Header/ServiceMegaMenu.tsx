import { Link } from 'react-router-dom';

// 服务数据
const serviceCategories = [
  {
    id: 'trade-customs',
    title: '輸出入通関',
    subtitle: '海外貿易の通関業務',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=770&h=520&fit=crop',
    imagePosition: 'center',
    href: '/services/trade-customs',
    subLinks: [
      { label: '輸出入通関', href: '/services/import-export-customs' },
      { label: '動植物検疫', href: '/services/animal-plant-quarantine' },
    ],
  },
  {
    id: 'warehouse',
    title: '倉庫作業',
    subtitle: '倉庫作業全般をお任せします',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=770&h=520&fit=crop',
    imagePosition: 'center 40%',
    href: '/services/warehouse',
    subLinks: [
      { label: 'B2C発送代行', href: '/services/b2c-shipping' },
      { label: '3PLサービス', href: '/services/3pl-service' },
    ],
  },
  {
    id: 'fba',
    title: 'FBA納品',
    subtitle: 'Amazon納品作業',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=770&h=520&fit=crop',
    imagePosition: 'center 60%',
    href: '/services/fba',
    subLinks: [
      { label: 'FBA納品', href: '/services/fba-delivery' },
    ],
  },
  {
    id: 'domestic',
    title: '国内運送',
    subtitle: '国内輸送サービス',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=770&h=520&fit=crop',
    imagePosition: 'center 30%',
    href: '/services/domestic-transport',
    subLinks: [
      { label: '国内運送', href: '/services/domestic-delivery' },
    ],
  },
];

// 箭头图标
const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

interface ServiceMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceMegaMenu({ isOpen, onClose }: ServiceMegaMenuProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[1998]"
          onClick={onClose}
        />
      )}

      {/* Megamenu Panel */}
      <div
        onMouseLeave={onClose}
        className={`
          fixed left-0 right-0 top-[80px] z-[1999]
          bg-white border-t border-gray-200 shadow-xl
          transition-all duration-300 ease-out
          ${isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }
        `}
      >
        <div className="max-w-[1400px] mx-auto flex">
          {/* Left Section - Title */}
          <div className="w-[280px] flex-shrink-0 py-12 px-10 border-r border-gray-100 bg-gray-50">
            <p className="text-[#02225c] text-sm font-semibold tracking-wider mb-4">
              SERVICE
            </p>
            <Link
              to="/services"
              className="group flex items-center text-[#02225c] text-lg font-medium hover:text-nax-orange transition-colors"
              onClick={onClose}
            >
              <span>
                信頼を運び、<br />価値を届ける
              </span>
              <ArrowIcon />
            </Link>
          </div>

          {/* Right Section - Service Cards */}
          <div className="flex-1 flex overflow-x-auto">
            {serviceCategories.map((category, index) => (
              <div
                key={category.id}
                className={`
                  w-[280px] flex-shrink-0
                  ${index > 0 ? 'border-l border-gray-100' : ''}
                `}
              >
                {/* Card Image */}
                <Link
                  to={category.href}
                  className="block overflow-hidden group"
                  onClick={onClose}
                >
                  <div className="aspect-[340/140] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ objectPosition: category.imagePosition || 'center' }}
                    />
                  </div>
                </Link>

                {/* Card Content */}
                <div className="px-8 py-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <Link
                    to={category.href}
                    className="group inline-flex items-center text-[#02225c] text-sm hover:text-nax-orange transition-colors"
                    onClick={onClose}
                  >
                    <span>{category.subtitle}</span>
                    <ArrowIcon />
                  </Link>
                </div>

                {/* Sub Links */}
                <div className="px-8 pb-8 space-y-3">
                  {category.subLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="group flex items-center text-gray-600 text-sm hover:text-nax-orange transition-colors"
                      onClick={onClose}
                    >
                      <span>{link.label}</span>
                      <ArrowIcon />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
