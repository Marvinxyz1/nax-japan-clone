export default function Solutions() {
  return (
    <section
      className="sticky-section sticky z-[4] solutions-bg pt-[90px] pb-[500px] top-0"
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
          {/* Icons */}
          <div className="w-full md:w-[450px] max-w-[513px] aspect-square relative mx-auto">
            <img
              loading="lazy"
              src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/solutions01.svg"
              alt="AirFreight"
              className="fade-in w-[55%] absolute left-0 top-0"
            />
            <img
              loading="lazy"
              src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/solutions02.svg"
              alt="Ocean Freight"
              className="fade-in w-[55%] absolute right-0 top-0"
              style={{ animationDelay: '0.2s' }}
            />
            <img
              loading="lazy"
              src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/solutions03.svg"
              alt="Warehousing"
              className="fade-in w-[55%] absolute left-1/2 -translate-x-1/2 bottom-0"
              style={{ animationDelay: '0.4s' }}
            />
          </div>

          {/* Text Content */}
          <div className="max-w-[513px]">
            <p className="fade-in text-white leading-relaxed font-dnp text-sm md:text-base mb-6">
              NAX JAPANは、国内外に独自のネットワークを築き、迅速且つ確実なサービスの拡大を追求しております。
            </p>
            <p className="fade-in text-white leading-relaxed font-dnp text-sm md:text-base mb-6">
              国内においては日本の主要国際空港である成田空港・関西空港及び東京港の近郊に自社倉庫を構え、お客様が求める多様な要望を具現化します。
            </p>
            <p className="fade-in text-white leading-relaxed font-dnp text-sm md:text-base mb-10">
              海外においてはアメリカ、香港、中国、タイ、ベトナムに拠点を置く現地法人との連携のみならず、世界中に提携代理店を有する航空機部品の緊急輸送を担う『ALN(Aviation Logistics Network) 』や医薬品輸送の協会である『MiPharma global 』の一員として、各ネットワークを活かし、緊急性が高く、取扱技術を要する貨物輸送を求める世界中のお客様のニーズにお応えします。
            </p>

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
