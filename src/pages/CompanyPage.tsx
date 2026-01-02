import { Link } from 'react-router-dom';
import { MapPin, Phone, Printer, Users, Building2, Calendar, Banknote, Ruler } from 'lucide-react';
import Contact from '../components/Contact';

export default function CompanyPage() {
  const companyInfo = [
    { label: '会社名', value: 'SBL株式会社', icon: Building2 },
    {
      label: '所在地',
      value: '〒276-0013 千葉県八千代市保品1809-2\nプロロジスパーク八千代2 3F',
      icon: MapPin
    },
    { label: 'TEL', value: '047-637-8508', icon: Phone },
    { label: 'FAX', value: '047-637-8535', icon: Printer },
    { label: '面積', value: '10,000m²', icon: Ruler },
    { label: '資本金', value: '800万円', icon: Banknote },
    { label: '設立', value: '2023年10月', icon: Calendar },
    { label: '従業員', value: '30人（パート含）', icon: Users },
  ];

  const businessAreas = [
    '輸出入通関',
    'FBA納品',
    '３PLサービス',
    '国内運送',
    '動植物検疫',
  ];

  const strengths = [
    {
      number: '01',
      title: '競争力のある価格',
      titleEn: 'Competitive Pricing',
      description: '当社の跨境物流サービスは、徹底したコスト管理と効率的な運営システムにより、業界でも競争力のある低価格を実現しています。大量輸送によるスケールメリットや、最適なルート設計を通じて、お客様の物流コストを大幅に削減します。',
      details: '透明性の高い料金体系を採用しており、隠れた費用や追加料金が発生しないため、予算管理がしやすい点も特徴です。',
    },
    {
      number: '02',
      title: '柔軟な対応',
      titleEn: 'Flexible Response',
      description: '当社は、お客様の多様なニーズに迅速かつ柔軟に対応することを重視しています。急な輸送スケジュールの変更や、特別な梱包・ラベリングのご要望にも、柔軟に対応いたします。',
      details: 'リアルタイムでの状況確認や、トラブル発生時の迅速な対応体制も整えており、お客様の安心をサポートします。',
    },
  ];

  return (
    <>
      {/* Page Header - Dynamic diagonal design */}
      <div className="relative min-h-[420px] bg-gradient-to-br from-nax-dark via-nax-gray to-nax-dark overflow-hidden">
        {/* Animated geometric background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-nax-orange/5 transform skew-x-[-15deg] translate-x-20" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-nax-orange/3 transform skew-x-[10deg] -translate-x-10" />
          {/* Decorative lines */}
          <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-nax-orange/30 to-transparent" />
          <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-nax-orange/20 via-transparent to-nax-orange/20" />
        </div>

        <div className="relative h-full max-w-[1310px] mx-auto px-5 pt-36">
          {/* Main title with dramatic typography */}
          <div className="relative">
            <h1 className="text-white leading-none font-din font-normal text-[72px] md:text-[110px] tracking-[4px] mt-0 mb-4 animate-fade-in">
              COMPANY
              <span className="font-dnp font-semibold text-[16px] md:text-[20px] tracking-[1.5px] block mt-4 pl-1 text-nax-orange">
                会社概要
              </span>
            </h1>
            {/* Decorative accent */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-20 bg-nax-orange hidden md:block" />
          </div>

          {/* Breadcrumb */}
          <ul className="font-din flex items-center list-none my-0 pl-0 pb-10 mt-8">
            <li className="text-white/60 text-[14px] whitespace-nowrap pr-2.5">
              <Link to="/" className="text-white/80 whitespace-nowrap hover:text-nax-orange transition-colors duration-300">
                TOP
              </Link>
            </li>
            <li className="text-white/40 text-[14px] whitespace-nowrap relative pl-3.5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-[1px] before:bg-white/40">
              COMPANY
            </li>
          </ul>
        </div>
      </div>

      {/* CEO Message Section */}
      <section className="bg-white relative z-10 py-24 md:py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        <div className="max-w-[1310px] mx-auto px-5 relative">
          {/* Section header */}
          <div className="fade-in mb-16 md:mb-24">
            <p className="text-nax-orange font-din text-[14px] tracking-[3px] mb-3">MESSAGE</p>
            <h2 className="text-nax-dark font-dnp font-semibold text-[28px] md:text-[36px]">
              CEOメッセージ
            </h2>
            <div className="w-16 h-[3px] bg-nax-orange mt-6" />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left: Company philosophy */}
            <div className="flex-1 fade-in">
              <h3 className="text-nax-dark font-dnp font-semibold text-[20px] md:text-[26px] leading-relaxed mb-10">
                SBL株式会社 の社名には、<br className="hidden md:block" />
                私たちのビジョンと使命が込められています
              </h3>

              {/* Philosophy breakdown - Bridge concept visualization */}
              <div className="space-y-8">
                {[
                  { letter: 'S', meaning: 'Smart（スマート）', description: '革新的かつ効率的な物流ソリューションを提供することを目指しています。' },
                  { letter: 'B', meaning: 'Bridge（ブリッジ）', description: 'お客様と世界のビジネスを繋ぐ架け橋となることを示しています。' },
                  { letter: 'L', meaning: 'Logistics（ロジスティクス）', description: '高品質な物流サービスを通じて、ビジネスの成長を支えることを使命としています。' },
                ].map((item, index) => (
                  <div
                    key={item.letter}
                    className="fade-in flex gap-6 items-start group"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-nax-dark text-white flex items-center justify-center font-din text-[28px] rounded-sm group-hover:bg-nax-orange transition-colors duration-300">
                      {item.letter}
                    </div>
                    <div>
                      <p className="text-nax-orange font-din text-[15px] tracking-wide mb-1">{item.meaning}</p>
                      <p className="text-nax-gray leading-relaxed text-[15px]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bridge tagline */}
              <div className="mt-12 p-6 bg-gradient-to-r from-nax-dark to-nax-gray text-white rounded-sm">
                <p className="font-din text-[18px] md:text-[22px] tracking-wide mb-2">Smart Bridge Logistics</p>
                <p className="text-white/80 text-[14px] md:text-[15px] leading-relaxed">
                  私たちはスマートな発想と確かな物流技術で、世界中のビジネスをシームレスに繋げるパートナーです。
                </p>
              </div>
            </div>

            {/* Right: CEO signature area */}
            <div className="lg:w-[320px] fade-in">
              <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 rounded-sm relative">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-nax-orange" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-nax-orange" />

                <div className="relative z-10">
                  <p className="text-nax-gray/60 text-[13px] mb-4 tracking-wide">代表取締役社長</p>
                  <p className="font-dnp font-semibold text-nax-dark text-[32px] tracking-wider">
                    劉 伯意
                  </p>
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <p className="text-nax-gray text-[13px] leading-relaxed">
                      お客様のビジネス成長を全力でサポートし、物流の可能性を広げ続けます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="bg-neutral-50 py-24 md:py-32 relative overflow-hidden">
        {/* Geometric accent */}
        <div className="absolute -right-20 top-1/4 w-40 h-40 border border-nax-orange/20 rotate-45" />
        <div className="absolute -left-10 bottom-1/4 w-24 h-24 border border-nax-orange/10 rotate-12" />

        <div className="max-w-[1310px] mx-auto px-5 relative">
          {/* Section header */}
          <div className="fade-in mb-16">
            <p className="text-nax-orange font-din text-[14px] tracking-[3px] mb-3">PROFILE</p>
            <h2 className="text-nax-dark font-dnp font-semibold text-[28px] md:text-[36px]">
              会社情報
            </h2>
            <div className="w-16 h-[3px] bg-nax-orange mt-6" />
          </div>

          {/* Company info grid */}
          <div className="bg-white rounded-sm shadow-sm overflow-hidden fade-in">
            <div className="grid md:grid-cols-2">
              {companyInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex gap-4 p-6 border-b border-neutral-100 ${index % 2 === 0 ? 'md:border-r' : ''} hover:bg-neutral-50/50 transition-colors duration-300`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-nax-orange/10 text-nax-orange flex items-center justify-center rounded-sm">
                      <IconComponent size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-nax-gray/60 text-[12px] mb-1 tracking-wide">{item.label}</p>
                      <p className="text-nax-dark text-[15px] leading-relaxed whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Business areas */}
            <div className="p-6 bg-gradient-to-r from-nax-dark to-nax-gray">
              <p className="text-white/60 text-[12px] mb-4 tracking-wide">事業内容</p>
              <div className="flex flex-wrap gap-3">
                {businessAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-white/10 text-white text-[14px] rounded-sm hover:bg-nax-orange/80 transition-colors duration-300 cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="relative py-20 md:py-28 bg-nax-dark overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-nax-orange/20 via-transparent to-nax-orange/10" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="max-w-[1100px] mx-auto px-5 relative">
          <div className="text-center fade-in">
            <p className="text-nax-orange font-din text-[13px] tracking-[4px] mb-6">PHILOSOPHY</p>
            <p className="text-white font-dnp font-semibold text-[22px] md:text-[32px] leading-relaxed">
              全力を尽くし、物流を簡単に、<br className="hidden md:block" />
              そしてお客様の成長を支える
            </p>
            <div className="w-12 h-[2px] bg-nax-orange mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1310px] mx-auto px-5">
          {/* Section header */}
          <div className="fade-in mb-16 md:mb-24">
            <p className="text-nax-orange font-din text-[14px] tracking-[3px] mb-3">STRENGTHS</p>
            <h2 className="text-nax-dark font-dnp font-semibold text-[28px] md:text-[36px]">
              当社の強み
            </h2>
            <div className="w-16 h-[3px] bg-nax-orange mt-6" />
          </div>

          {/* Strengths cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={strength.number}
                className="fade-in group relative bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-nax-orange group-hover:h-full transition-all duration-500" />

                <div className="p-8 md:p-10">
                  {/* Number */}
                  <span className="text-nax-orange/20 font-din text-[80px] md:text-[100px] leading-none absolute -top-4 -right-2 group-hover:text-nax-orange/30 transition-colors duration-500">
                    {strength.number}
                  </span>

                  <div className="relative z-10">
                    <p className="text-nax-orange font-din text-[13px] tracking-[2px] mb-2">{strength.titleEn}</p>
                    <h3 className="text-nax-dark font-dnp font-semibold text-[22px] md:text-[26px] mb-6">
                      {strength.title}
                    </h3>
                    <p className="text-nax-gray leading-relaxed text-[15px] mb-4">
                      {strength.description}
                    </p>
                    <p className="text-nax-gray/70 leading-relaxed text-[14px]">
                      {strength.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="bg-neutral-50 py-24 md:py-32">
        <div className="max-w-[1310px] mx-auto px-5">
          {/* Section header */}
          <div className="fade-in mb-16">
            <p className="text-nax-orange font-din text-[14px] tracking-[3px] mb-3">ACCESS</p>
            <h2 className="text-nax-dark font-dnp font-semibold text-[28px] md:text-[36px]">
              アクセス
            </h2>
            <div className="w-16 h-[3px] bg-nax-orange mt-6" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Address info */}
            <div className="fade-in bg-white p-8 rounded-sm shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-nax-orange text-white flex items-center justify-center rounded-sm">
                  <MapPin size={18} />
                </div>
                <h3 className="font-dnp font-semibold text-nax-dark text-[18px]">SBL株式会社</h3>
              </div>

              <div className="space-y-4 text-[15px] text-nax-gray">
                <p className="leading-relaxed">
                  〒276-0013<br />
                  千葉県八千代市保品1809-2<br />
                  プロロジスパーク八千代2<br />
                  3F
                </p>
                <div className="pt-4 border-t border-neutral-100">
                  <p className="text-[13px] text-nax-gray/60 mb-1">最寄駅</p>
                  <p>八千代緑が丘駅</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=プロロジスパーク八千代2+千葉県八千代市保品1809-2"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-nax-orange hover:text-nax-dark transition-colors duration-300 text-[14px] font-medium"
              >
                <span>Googleマップでルートを見る</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Map embed */}
            <div className="lg:col-span-2 fade-in">
              <div className="bg-white rounded-sm shadow-sm overflow-hidden h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.5!2d140.0647!3d35.7297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022f3e8c8b9d555%3A0x1234567890abcdef!2z44OX44Ot44Ot44K444K544OR44O844Kv5YWr5Y2D5Luj!5e0!3m2!1sja!2sjp!4v1704000000000!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SBL株式会社 所在地"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </>
  );
}
