import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Contact from '../components/Contact';
import { getServiceBySlug, serviceCategories, getAllServices } from '../data/services';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = getAllServices().filter((s) => s.slug !== slug);

  return (
    <>
      {/* Page Header */}
      <div
        className="w-full bg-nax-dark bg-no-repeat bg-cover pt-36"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(2, 34, 92, 0.95) 0%, rgba(0, 4, 62, 0.9) 100%)`,
        }}
      >
        <div className="h-full max-w-[1310px] relative mx-auto px-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-nax-orange font-din text-sm tracking-wider">
              {service.category}
            </span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300 font-din text-sm tracking-wider">
              {service.subtitle}
            </span>
          </div>
          <h1 className="text-white leading-none font-din font-normal text-[70px] tracking-[1.6px] mt-0 mb-4">
            {service.titleEn}
            <span className="font-dnp font-semibold text-[22px] tracking-[0.9px] block mt-4 pl-1.5 text-gray-200">
              {service.title}
            </span>
          </h1>
          <ul className="font-din flex justify-end items-center list-none my-0 pl-0 pb-20">
            <li className="text-gray-400 text-[14px] whitespace-nowrap pr-2.5">
              <Link to="/" className="text-gray-300 whitespace-nowrap hover:text-nax-orange transition-colors">
                TOP
              </Link>
            </li>
            <li className="text-gray-400 text-[14px] whitespace-nowrap relative pl-3.5">
              <Link to="/services" className="text-gray-300 whitespace-nowrap hover:text-nax-orange transition-colors">
                SERVICE
              </Link>
            </li>
            <li className="text-gray-400 text-[14px] whitespace-nowrap relative pl-3.5">
              {service.title}
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div className="fade-in">
              <h2 className="text-nax-dark font-dnp font-semibold text-[32px] leading-tight mb-8">
                {service.title}サービスについて
              </h2>
              <p className="text-nax-dark leading-[1.9] text-[16px] mb-8">
                {service.description}
              </p>

              {/* Features List */}
              {service.features && service.features.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-nax-dark font-dnp font-semibold text-[20px] mb-6">
                    主なサービス内容
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-nax-orange flex-shrink-0 mt-0.5" />
                        <span className="text-nax-dark leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sections */}
              {service.sections && service.sections.length > 0 && (
                <div className="mt-10 space-y-8">
                  {service.sections.map((section, index) => (
                    <div key={index} className="border-l-4 border-nax-orange pl-6">
                      <h3 className="text-nax-dark font-dnp font-semibold text-[18px] mb-3">
                        {section.title}
                      </h3>
                      <p className="text-nax-dark leading-[1.8] text-[15px]">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-nax-dark leading-[1.9] text-[15px] mt-10 p-6 bg-gray-50 rounded-lg">
                日本国内および中国を中心としたアジア地域に対応しており、個人・法人問わず柔軟にサポート可能です。
                確実でスピーディーな対応により、お客様のビジネスを円滑に支援いたします。
              </p>
            </div>

            {/* Image */}
            <div className="fade-in lg:sticky lg:top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              {/* CTA Box */}
              <div className="mt-8 bg-gradient-to-br from-nax-dark to-[#02225c] rounded-xl p-8 text-white">
                <h3 className="font-dnp font-semibold text-[20px] mb-4">
                  お問い合わせ
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {service.title}についてのご質問・ご相談は
                  お気軽にお問い合わせください。
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-nax-orange hover:bg-orange-500 transition-colors text-white font-semibold px-6 py-3 rounded-lg"
                >
                  お問い合わせ
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-5">
          <h2 className="text-nax-dark font-din font-normal text-[48px] mb-2 fade-in">
            OTHER SERVICES
          </h2>
          <p className="text-nax-dark font-dnp text-[16px] mb-12 fade-in">
            その他のサービス
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 6).map((otherService) => (
              <Link
                key={otherService.slug}
                to={`/service/${otherService.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 fade-in"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={otherService.image}
                    alt={otherService.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-nax-orange text-xs font-din tracking-wider">
                    {otherService.category}
                  </span>
                  <h3 className="text-nax-dark font-dnp font-semibold text-[18px] mt-2 mb-2 group-hover:text-nax-orange transition-colors">
                    {otherService.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {otherService.subtitle}
                  </p>
                  <div className="mt-4 flex items-center text-nax-orange text-sm font-medium">
                    詳しく見る
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-nax-dark text-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <h2 className="font-din font-normal text-[48px] mb-2 fade-in">
            SERVICE CATEGORIES
          </h2>
          <p className="font-dnp text-[16px] mb-12 text-gray-300 fade-in">
            サービスカテゴリー
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category) => (
              <div
                key={category.slug}
                className="bg-white/5 backdrop-blur rounded-xl p-6 hover:bg-white/10 transition-colors fade-in"
              >
                <h3 className="font-din text-[24px] text-nax-orange mb-2">
                  {category.titleEn}
                </h3>
                <p className="font-dnp font-semibold text-[16px] mb-4">
                  {category.title}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  {category.subtitle}
                </p>
                <ul className="space-y-2">
                  {category.services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/service/${s.slug}`}
                        className={`text-sm flex items-center gap-2 hover:text-nax-orange transition-colors ${
                          s.slug === slug ? 'text-nax-orange' : 'text-gray-300'
                        }`}
                      >
                        <ArrowRight className="w-3 h-3" />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </>
  );
}
