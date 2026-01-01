import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

export default function SolutionsPage() {
  const expertise = [
    {
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-008.webp',
      title: 'フルーツ・野菜',
    },
    {
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-009.webp',
      title: '鮮魚',
    },
    {
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-010.webp',
      title: '米軍関連貨物',
    },
  ];

  const procedures = [
    {
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-011.webp',
      title: '日本酒',
    },
    {
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-013.webp',
      title: '盆栽',
    },
    {
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-012.webp',
      title: '和牛',
    },
  ];

  const timeCritical = [
    {
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-005.webp',
      title: 'AOG（航空機部品）',
    },
    {
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-006.webp',
      title: '錦鯉',
    },
    {
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-007.webp',
      title: '医薬品',
    },
  ];

  const otherInfo = [
    {
      href: '/philosophy',
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/company/company02.webp',
      label: '企業理念',
      title: 'PHILOSOPHY',
    },
    {
      href: '/history',
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/company/company04.webp',
      label: '沿革',
      title: 'HISTORY',
    },
    {
      href: '/office',
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/company/company03.webp',
      label: '事業所一覧',
      title: 'OFFICE',
    },
    {
      href: '/information',
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/company/company01.webp',
      label: '会社概要',
      title: 'INFORMATION',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div
        className="w-full bg-no-repeat bg-cover pt-36"
        style={{
          backgroundImage: `url('https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/bg_solutions_pc.webp')`,
        }}
      >
        <div className="h-full max-w-[1310px] relative mx-auto px-5">
          <h1 className="text-nax-gray leading-none font-din font-normal text-[90px] tracking-[1.6px] mt-0 mb-6">
            SOLUTIONS
            <span className="font-dnp font-semibold text-[18px] tracking-[0.9px] block mt-2.5 pl-1.5">
              事業紹介
            </span>
          </h1>
          <ul className="font-din flex justify-end items-center list-none my-0 pl-0 pb-20">
            <li className="text-[#afafaf] text-[14px] whitespace-nowrap pr-2.5">
              <Link to="/" className="text-nax-gray whitespace-nowrap hover:text-nax-orange transition-colors">
                TOP
              </Link>
            </li>
            <li className="text-[#afafaf] text-[14px] whitespace-nowrap relative pl-3.5">
              SOLUTIONS
            </li>
          </ul>
        </div>
      </div>

      {/* Introduction Section */}
      <section>
        <div className="max-w-[1310px] mx-auto px-5">
          <div className="border-b border-neutral-900 pt-[180px] pb-[120px]">
            <div className="flex justify-between items-center">
              <div className="pr-3.5">
                <h2 className="text-nax-dark leading-[1.6] font-dnp font-semibold text-[47px] mt-0 mb-14">
                  航空貨物・船舶貨物を取り扱い、
                  <br />
                  トータル輸送を目指します
                </h2>
                <h3 className="text-nax-dark leading-[1.8] font-dnp font-semibold text-[23px] mt-0 mb-8">
                  SBL株式会社は、多様な物流ニーズをシンプルに解決し、
                  <br />
                  迅速且つ確実なサービスを追求しております。
                </h3>
                <p className="text-nax-dark leading-[1.9] font-noto tracking-[0.08px] mt-0">
                  国内においては日本の主要国際空港である成田空港・関西空港及び東京港の近郊に自社倉庫を構え、お客様が求める多様な要望を具現化します。
                </p>
                <p className="text-nax-dark leading-[1.9] font-noto tracking-[0.08px] mt-0">
                  海外においてはアメリカ、香港、中国、タイ、ベトナムに拠点を置く現地法人との連携のみならず、世界中に提携代理店を有する航空機部品の緊急輸送を担う『ALN(Aviation
                  Logistics Network) 』や医薬品輸送の協会である『MiPharma global
                  』の一員として、各ネットワークを活かし、緊急性が高く、取扱技術を要する貨物輸送を求める世界中のお客様のニーズにお応えします。
                </p>
              </div>
              <img
                src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-001.webp"
                alt="Air Freight,Ocean Freight,Warehousing"
                className="w-[530px] max-w-full max-h-full block"
              />
            </div>
            <div className="grid gap-x-2 grid-cols-3 mt-[100px]">
              <img
                src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-002.webp"
                alt="飛行機"
                className="max-w-full max-h-full block"
              />
              <img
                src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-003.webp"
                alt="倉庫"
                className="max-w-full max-h-full block"
              />
              <img
                src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/solutions/solutions-img-004.webp"
                alt="貨物船"
                className="max-w-full max-h-full block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WE LOVE Section Header */}
      <section className="pt-[120px]">
        <div className="max-w-[1310px] mx-auto px-5">
          <h2 className="text-nax-dark leading-none font-din font-normal text-[90px] my-0">
            WE LOVE
          </h2>
          <p className="text-nax-dark leading-none font-dnp font-semibold text-[18px] tracking-[0.09px] my-0">
            わたしたちが得意とするもの
          </p>
        </div>
      </section>

      {/* 01 Expertise Section */}
      <section id="solutions01" className="pt-40">
        <div className="max-w-[1310px] mx-auto px-5">
          <div className="flex items-center">
            <p className="mb-[-40px] text-nax-dark leading-none font-din text-[126px] mt-0">
              01
            </p>
            <div className="ml-10 pl-8 border-l border-[#989898]">
              <h2 className="text-nax-dark leading-[1.1] font-din font-normal text-[64px] my-0">
                Expertise
              </h2>
              <p className="text-nax-dark leading-[1.6] font-dnp font-semibold text-[22px] my-0">
                専門知識が必要な貨物
              </p>
            </div>
          </div>
          <p className="text-nax-dark leading-loose font-dnp font-semibold text-[22px] mt-12 mb-16">
            鮮度が重要とされる生鮮食品の輸出入では、品種や向け先によって異なる検疫条件等あらゆる専門知識が必要となりますが、
            <br />
            業務に精通したプロフェッショナルが対応します。
          </p>
          <div className="max-w-[1110px] grid gap-x-2 grid-cols-3">
            {expertise.map((item) => (
              <div key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-full aspect-[365/250] object-cover"
                />
                <p className="text-nax-dark leading-loose font-dnp font-semibold text-[22px] mt-5 mb-0">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Elaborate Procedures Section */}
      <section id="solutions02" className="pt-40 pb-[120px]">
        <div className="max-w-[1310px] mx-auto px-5">
          <div className="flex items-center">
            <p className="mb-[-40px] text-nax-dark leading-none font-din text-[126px] mt-0">
              02
            </p>
            <div className="ml-10 pl-8 border-l border-[#989898]">
              <h2 className="text-nax-dark leading-[1.1] font-din font-normal text-[64px] my-0">
                Elaborate Procedures
              </h2>
              <p className="text-nax-dark leading-[1.6] font-dnp font-semibold text-[22px] my-0">
                煩雑な手続きが必要な貨物
              </p>
            </div>
          </div>
          <p className="text-nax-dark leading-loose font-dnp font-semibold text-[22px] mt-12 mb-16">
            植物防疫や動物検疫等の他法令手続きや一部の衛生証明書の発行などの複雑な業務面で、
            <br />
            経験とノウハウを活かした正確かつ迅速な対応に高い評価をいただいております。
          </p>
          <div className="max-w-[1110px] grid gap-x-2 grid-cols-3">
            {procedures.map((item) => (
              <div key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-full aspect-[365/250] object-cover"
                />
                <p className="text-nax-dark leading-loose font-dnp font-semibold text-[22px] mt-5 mb-0">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Time-Critical Section */}
      <section id="solutions03" className="pt-40">
        <div className="max-w-[1310px] mx-auto px-5">
          <div className="flex items-center">
            <p className="mb-[-40px] text-nax-dark leading-none font-din text-[126px] mt-0">
              03
            </p>
            <div className="ml-10 pl-8 border-l border-[#989898]">
              <h2 className="text-nax-dark leading-[1.1] font-din font-normal text-[64px] my-0">
                Time-Critical
              </h2>
              <p className="text-nax-dark leading-[1.6] font-dnp font-semibold text-[22px] my-0">
                緊急を要する貨物
              </p>
            </div>
          </div>
          <p className="text-nax-dark leading-loose font-dnp font-semibold text-[22px] mt-12 mb-16">
            航空機パーツをはじめ、緊急性の高い貨物の取り扱いを得意としております。
            <br />
            納期短縮、多品種といったお客様ごとの課題を解決する最適なロジスティクスをご提案します。
          </p>
          <div className="max-w-[1110px] grid gap-x-2 grid-cols-3">
            {timeCritical.map((item) => (
              <div key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-full aspect-[365/250] object-cover"
                />
                <p className="text-nax-dark leading-loose font-dnp font-semibold text-[22px] mt-5 mb-0">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER INFORMATION Section */}
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="my-[124px]">
          <h2 className="text-[#333333] font-din font-normal text-[34px] tracking-[-0.34px] mt-0 mb-[47px]">
            OTHER INFORMATION
          </h2>
          <div className="max-w-[1120px] grid gap-x-3 grid-cols-4 mx-auto">
            {otherInfo.map((item) => (
              <div key={item.title} className="relative overflow-hidden rounded">
                <Link
                  to={item.href}
                  className="leading-[0] w-full relative block pt-[67%] group"
                >
                  <h4 className="text-white leading-none font-din font-normal text-[36px] tracking-[-0.36px] absolute z-[5] my-0 left-5 bottom-2.5">
                    <span className="font-dnp text-[14px] tracking-[0.7px] flex items-center mb-2.5">
                      {item.label}
                    </span>
                    {item.title}
                  </h4>
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full max-w-full max-h-full absolute z-[1] block object-cover left-0 top-0 transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recruitment Section */}
      <div className="bg-nax-dark text-white py-24 border-white border-b">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="flex items-start">
            <h2 className="leading-[1.1] font-din font-normal text-[40px] tracking-[1.2px] my-0">
              RECRUITMENT
            </h2>
            <span className="font-medium text-[14px] block ml-6">採用情報</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-10">
            <a
              href="https://recruit.naxjapan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden group"
            >
              <img
                src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/recruit/recruit_img01.webp"
                alt="新卒採用"
                className="w-full aspect-[530/305] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-din text-[48px] leading-none">NEW GRADUATES</p>
                  <p className="font-dnp text-sm mt-2">新卒採用</p>
                </div>
              </div>
            </a>
            <a
              href="https://recruit.naxjapan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden group"
            >
              <img
                src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/recruit/recruit_img02.webp"
                alt="中途採用"
                className="w-full aspect-[530/305] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-din text-[48px] leading-none">MID-CAREER</p>
                  <p className="font-dnp text-sm mt-2">中途採用</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </>
  );
}
