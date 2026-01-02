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

      {/* Jacket Image with Parallax - Left center */}
      <div className="parallax-jacket absolute
        left-[25%] top-1/2 -translate-y-1/2 -translate-x-1/2
        w-[500px] md:w-[700px] lg:w-[840px]">
        <img
          src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_jacket.webp"
          alt="SBL株式会社"
          className="w-full block"
        />
      </div>

      {/* Main Text - Right bottom */}
      <h1 className="absolute z-[1000] flex flex-col gap-5
        left-[78%] -translate-x-1/2 bottom-[27%]">
        <img
          src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_text01.svg"
          alt="人間力で、超えていく。"
          className="w-[200px] md:w-[324px] block animate-slide-in-right"
          style={{ animationDelay: '0.3s' }}
        />
        <img
          src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_text02.svg"
          alt="GLOBAL LOGISTICS CONCIERGE"
          className="w-[120px] md:w-[178px] block animate-slide-in-right"
          style={{ animationDelay: '0.6s' }}
        />
        <span className="sr-only">人間力で、超えていく。</span>
      </h1>
    </section>
  );
}
