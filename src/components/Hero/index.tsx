export default function Hero() {
  return (
    <section className="hero-section w-full h-screen relative overflow-hidden">
      {/* Background Sky */}
      <div className="w-full h-full">
        <img
          src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_bg_pc.webp"
          alt="背景 空"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Jacket Image with Parallax */}
      <div className="parallax-jacket absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 w-[900px] lg:w-[1000px]">
        <img
          src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_jacket.webp"
          alt="NAX JAPAN JACKET"
          className="w-full block"
        />
      </div>

      {/* Main Text - Positioned to match original */}
      <h1 className="absolute z-[1000] flex flex-col gap-6 right-[5%] md:right-[8%] lg:right-[10%] bottom-[20%] md:bottom-[25%]">
        <img
          src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_text01.svg"
          alt="人間力で、超えていく。"
          className="w-[280px] md:w-[420px] lg:w-[520px] block animate-slide-in-right"
          style={{ animationDelay: '0.3s' }}
        />
        <img
          src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_text02.svg"
          alt="GLOBAL LOGISTICS CONCIERGE"
          className="w-[180px] md:w-[260px] lg:w-[320px] block animate-slide-in-right"
          style={{ animationDelay: '0.6s' }}
        />
        <span className="sr-only">人間力で、超えていく。</span>
      </h1>
    </section>
  );
}
