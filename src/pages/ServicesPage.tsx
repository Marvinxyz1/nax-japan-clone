import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Contact from '../components/Contact';
import { serviceCategories } from '../data/services';

export default function ServicesPage() {
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
          <h1 className="text-white leading-none font-din font-normal text-[90px] tracking-[1.6px] mt-0 mb-6">
            SERVICE
            <span className="font-dnp font-semibold text-[18px] tracking-[0.9px] block mt-2.5 pl-1.5 text-gray-200">
              サービス一覧
            </span>
          </h1>
          <p className="text-gray-300 leading-relaxed max-w-2xl mb-8">
            信頼を運び、価値を届ける。多様な物流ニーズをシンプルに解決し、
            迅速かつ確実なサービスを追求しております。
          </p>
          <ul className="font-din flex justify-end items-center list-none my-0 pl-0 pb-20">
            <li className="text-gray-400 text-[14px] whitespace-nowrap pr-2.5">
              <Link to="/" className="text-gray-300 whitespace-nowrap hover:text-nax-orange transition-colors">
                TOP
              </Link>
            </li>
            <li className="text-gray-400 text-[14px] whitespace-nowrap relative pl-3.5">
              SERVICE
            </li>
          </ul>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto fade-in">
            <h2 className="text-nax-dark font-din font-normal text-[48px] mb-4">
              Smart Bridge Logistics
            </h2>
            <p className="text-nax-orange font-dnp font-semibold text-[20px] mb-8">
              柔軟な対応力とワンストップソリューションで、物流課題を解決します
            </p>
            <p className="text-nax-dark leading-[1.9] text-[16px]">
              私たちの倉庫運輸サービスは、迅速で柔軟な対応力と、幅広い物流ソリューションを通じて、
              お客様のビジネスを力強くサポートします。配送から保管、梱包、在庫管理に至るまで、
              ワンストップで対応し、効率的かつ信頼性の高い物流を実現します。
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.slug}
          className={`py-24 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-[1310px] mx-auto px-5">
            {/* Category Header */}
            <div className="flex items-end justify-between mb-16 fade-in">
              <div>
                <h2 className="text-nax-dark font-din font-normal text-[64px] leading-none mb-2">
                  {category.titleEn}
                </h2>
                <p className="text-nax-dark font-dnp font-semibold text-[22px]">
                  {category.title}
                </p>
                <p className="text-gray-500 text-[15px] mt-2">
                  {category.subtitle}
                </p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-gray-300 mx-8 mb-6" />
              <span className="text-nax-orange font-din text-[80px] leading-none opacity-20">
                0{categoryIndex + 1}
              </span>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <Link
                  key={service.slug}
                  to={`/service/${service.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 fade-in"
                  style={{ animationDelay: `${serviceIndex * 0.1}s` }}
                >
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block bg-nax-orange text-white text-xs font-din px-3 py-1 rounded-full mb-3">
                        {category.title}
                      </span>
                      <h3 className="text-white font-din font-normal text-[28px] leading-tight">
                        {service.titleEn}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-nax-dark font-dnp font-semibold text-[22px] mb-3 group-hover:text-nax-orange transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-[15px] line-clamp-3 mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-nax-orange font-din text-sm flex items-center gap-2">
                        詳しく見る
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </span>
                      {service.features && (
                        <span className="text-gray-400 text-xs">
                          {service.features.length}項目のサービス
                        </span>
                      )}
                      {service.sections && (
                        <span className="text-gray-400 text-xs">
                          {service.sections.length}項目のサービス
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-nax-dark text-white">
        <div className="max-w-[1100px] mx-auto px-5 text-center">
          <h2 className="font-din font-normal text-[48px] mb-4 fade-in">
            CONTACT US
          </h2>
          <p className="font-dnp text-[18px] mb-8 text-gray-300 fade-in">
            お気軽にお問い合わせください
          </p>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12 fade-in">
            物流に関するご相談、お見積もりのご依頼など、どんなことでもお気軽にお問い合わせください。
            専門スタッフが丁寧に対応いたします。
          </p>
          <div className="flex flex-wrap justify-center gap-4 fade-in">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-nax-orange hover:bg-orange-500 transition-colors text-white font-semibold px-8 py-4 rounded-lg text-lg"
            >
              お問い合わせ
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0476-37-8508"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold px-8 py-4 rounded-lg text-lg"
            >
              Tel: 0476-37-8508
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </>
  );
}
