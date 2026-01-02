import { Package, Warehouse, Truck, FileCheck } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'FBA納品',
    desc: 'Amazon納品作業',
  },
  {
    icon: Warehouse,
    title: '倉庫作業',
    desc: 'B2C発送・3PL',
  },
  {
    icon: Truck,
    title: '国内運送',
    desc: '国内輸送サービス',
  },
  {
    icon: FileCheck,
    title: '輸出入通関',
    desc: '通関・検疫業務',
  },
];

export default function Solutions() {
  return (
    <section
      className="sticky-section z-[4] solutions-bg pt-[90px] pb-[100px] md:pb-[500px]"
    >
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Section Title */}
        <div className="flex items-start gap-8">
          <h2 className="text-white/90 section-title font-din font-normal text-[50px] md:text-[90px] my-0">
            SOLUTIONS
          </h2>
          <span className="text-white section-subtitle font-dnp font-semibold text-sm md:text-lg block mt-1.5 pl-1.5">
            事業案内
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-10">
          {/* Icons - Inverted Triangle Layout */}
          <div
            className="w-full md:w-[450px] max-w-[513px] relative shrink-0"
            style={{ aspectRatio: '331 / 313' }}
          >
            {/* FBA納品 - Top Left */}
            <img
              loading="lazy"
              src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/solutions01.svg"
              alt="FBA納品"
              className="fade-in w-[55%] absolute left-0 top-0"
            />
            {/* 倉庫作業 - Top Right */}
            <img
              loading="lazy"
              src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/solutions02.svg"
              alt="倉庫作業"
              className="fade-in w-[55%] absolute right-0 top-0"
              style={{ animationDelay: '0.2s' }}
            />
            {/* 国内運送 - Bottom Center (22.5% = (100% - 55%) / 2) */}
            <img
              loading="lazy"
              src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/solutions03.svg"
              alt="国内運送"
              className="fade-in w-[55%] absolute bottom-0"
              style={{ animationDelay: '0.4s', left: '22.5%' }}
            />
          </div>

          {/* Service Cards */}
          <div className="max-w-[513px]">
            <div className="grid grid-cols-2 gap-4 mb-10">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.title}
                    className="fade-in bg-white/10 backdrop-blur-sm rounded-lg p-5 hover:bg-white/20 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="w-8 h-8 text-nax-orange mb-3" />
                    <h3 className="text-white font-bold text-base mb-1">{service.title}</h3>
                    <p className="text-white/70 text-sm">{service.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* View More Button */}
            <div className="text-right">
              <a
                href="/solutions-and-cases"
                className="inline-flex justify-center items-center w-[213px] h-[72px] border border-white text-white font-din text-xl tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
