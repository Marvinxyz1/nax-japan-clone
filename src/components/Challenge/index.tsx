export default function Challenge() {
  return (
    <section
      className="sticky-section sticky z-[6] challenge-bg pt-[100px] md:pt-[140px] pb-[400px] md:pb-[500px] top-0"
    >
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Section Title */}
        <div>
          <h2 className="text-neutral-900/90 section-title font-din font-normal text-[50px] md:text-[90px] my-0">
            CHALLENGE
          </h2>
          <span className="text-neutral-900 section-subtitle font-dnp font-semibold text-sm md:text-lg block pl-1.5">
            取り組み
          </span>
        </div>

        {/* Content */}
        <div className="mt-8">
          <div className="fade-in text-nax-dark leading-relaxed font-dnp font-semibold text-xl md:text-[32px] tracking-wide mb-[60px]">
            失敗の無い人生は、
            <br />
            失敗の人生である
          </div>

          {/* View More Button */}
          <div>
            <a
              href="/challenge"
              className="inline-flex justify-center items-center w-[213px] h-[72px] border border-black text-black font-din text-xl tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              VIEW MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
