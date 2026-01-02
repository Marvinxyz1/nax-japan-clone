export default function Contact() {
  return (
    <section className="bg-nax-dark text-white overflow-hidden relative z-[8]">
      <a
        href="/contact"
        className="block text-center py-24 md:py-36 group relative overflow-hidden"
      >
        {/* Orange background slide-in effect - full width */}
        <div className="absolute inset-0 bg-nax-orange -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

        {/* Content */}
        <div className="relative z-10 max-w-[1100px] mx-auto px-5">
          <p className="font-noto font-light text-sm tracking-wider mb-10">
            お問い合わせはこちら
          </p>
          <p className="font-din text-[60px] md:text-[120px] leading-none tracking-tight mb-12">
            CONTACT US
          </p>
          <span className="inline-flex justify-center items-center px-8 py-4 border border-white font-dnp font-semibold tracking-wider">
            お問い合わせフォーム
          </span>
        </div>
      </a>
    </section>
  );
}
