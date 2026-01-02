export default function Message() {
  const messages = [
    '多様な物流ニーズを、シンプルに。\nそれを叶えるのがSBL株式会社の使命です。',
    '当社の跨境物流サービスは、\n圧倒的な価格競争力と柔軟な対応が\n最大の強みです。',
    'コストパフォーマンスに優れた料金体系で、\nお客様の負担を軽減しながらも、\n迅速かつ効率的な物流を実現します。',
    'さらに、多様なニーズに応じて\n柔軟に対応いたしますので、\n急な変更や特別なご要望にも\nスムーズにお応えします。',
    '競争力のある価格と高品質なサービスを\n両立させ、お客様のビジネスを\n全力でサポートいたします。',
    '私たちの倉庫運輸サービスは、\n迅速で柔軟な対応力と、\n幅広い物流ソリューションを通じて、\nお客様のビジネスを力強くサポートします。',
    '配送から保管、梱包、在庫管理に至るまで、\nワンストップで対応し、\n効率的かつ信頼性の高い物流を実現します。',
  ];

  return (
    <section className="bg-white relative z-[100] py-[100px] md:py-[140px]">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: Sticky Title */}
          <div className="w-full md:w-[395px]">
            <div className="md:sticky md:top-[210px]">
              <h2 className="text-nax-dark text-[32px] md:text-[48px] font-bold leading-tight mb-8">
                Smart Bridge<br />Logistics
              </h2>
              <p className="text-nax-orange text-[14px] md:text-[16px] font-medium tracking-wider">
                選ばれる理由
              </p>
            </div>
          </div>

          {/* Right: Message Text */}
          <div className="max-w-[593px] flex flex-col gap-6 pt-5">
            {messages.map((message, index) => (
              <p
                key={index}
                className="fade-in text-nax-dark leading-loose font-dnp font-semibold text-lg md:text-2xl whitespace-pre-line"
              >
                {message}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
