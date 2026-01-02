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
          alt="Smart Bridge Logistics"
          className="w-full block"
        />
      </div>

      {/* Main Text - Right bottom */}
      <h1 className="absolute z-[1000] flex flex-col gap-5
        left-[78%] -translate-x-1/2 bottom-[27%]">
        <span
          className="text-white text-[28px] md:text-[42px] font-bold leading-tight animate-slide-in-right whitespace-nowrap"
          style={{ animationDelay: '0.3s', textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
        >
          Smart Bridge Logistics
        </span>
        <span
          className="text-white text-[14px] md:text-[18px] font-medium tracking-wider animate-slide-in-right"
          style={{ animationDelay: '0.6s', textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}
        >
          世界をつなぐ、無限の可能性
        </span>
        <span className="sr-only">Smart Bridge Logistics - 世界をつなぐ、無限の可能性</span>
      </h1>
    </section>
  );
}
