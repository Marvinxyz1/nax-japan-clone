import { Link } from 'react-router-dom';
import { serviceCategories } from '../../data/services';

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

// 获取分类的第一个服务的图片作为分类图片
const getCategoryImage = (categorySlug: string): string => {
  const category = serviceCategories.find((c) => c.slug === categorySlug);
  if (category && category.services.length > 0) {
    return category.services[0].image;
  }
  return 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=770&h=520&fit=crop';
};

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
                key={category.slug}
                className={`
                  w-[280px] flex-shrink-0
                  ${index > 0 ? 'border-l border-gray-100' : ''}
                `}
              >
                {/* Card Image */}
                <Link
                  to={`/service/${category.services[0]?.slug || ''}`}
                  className="block overflow-hidden group"
                  onClick={onClose}
                >
                  <div className="aspect-[340/140] overflow-hidden">
                    <img
                      src={getCategoryImage(category.slug)}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Link>

                {/* Card Content */}
                <div className="px-8 py-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <Link
                    to={`/service/${category.services[0]?.slug || ''}`}
                    className="group inline-flex items-center text-[#02225c] text-sm hover:text-nax-orange transition-colors"
                    onClick={onClose}
                  >
                    <span>{category.subtitle}</span>
                    <ArrowIcon />
                  </Link>
                </div>

                {/* Sub Links */}
                <div className="px-8 pb-8 space-y-3">
                  {category.services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/service/${service.slug}`}
                      className="group flex items-center text-gray-600 text-sm hover:text-nax-orange transition-colors"
                      onClick={onClose}
                    >
                      <span>{service.title}</span>
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
