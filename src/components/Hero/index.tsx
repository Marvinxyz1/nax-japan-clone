export default function Hero() {
  return (
    <section className="hero-section w-full h-screen relative overflow-hidden">
      {/* Background Sky */}
      <div className="w-full h-full absolute inset-0">
        <img
          src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_bg_pc.webp"
          alt="背景 空"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Jacket Image with Parallax - Responsive positioning */}
      <div className="parallax-jacket absolute
        left-1/2 top-1/2 -translate-y-1/2
        -translate-x-[60%] md:-translate-x-[40%] lg:-translate-x-1/4
        w-[140vw] sm:w-[120vw] md:w-[900px] lg:w-[1000px]
        max-w-none">
        <img
          src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_jacket.webp"
          alt="SBL株式会社"
          className="w-full block"
        />
      </div>

      {/* Main Text - Responsive positioning */}
      <h1 className="absolute z-[1000] flex flex-col
        gap-3 sm:gap-4 md:gap-6
        left-1/2 -translate-x-1/2 bottom-[15%]
        md:left-auto md:translate-x-0 md:right-[8%] md:bottom-[25%]
        lg:right-[10%]
        items-center md:items-end">
        <img
          src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_text01.svg"
          alt="人間力で、超えていく。"
          className="w-[220px] sm:w-[280px] md:w-[420px] lg:w-[520px] block animate-slide-in-right"
          style={{ animationDelay: '0.3s' }}
        />
        <img
          src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_text02.svg"
          alt="GLOBAL LOGISTICS CONCIERGE"
          className="w-[140px] sm:w-[180px] md:w-[260px] lg:w-[320px] block animate-slide-in-right"
          style={{ animationDelay: '0.6s' }}
        />
        <span className="sr-only">人間力で、超えていく。</span>
      </h1>
    </section>
  );
}
