export default function Message() {
  const messages = [
    '多様な物流ニーズを、シンプルに。\nそれを叶えるのがSBL株式会社の使命です。',
    '無論、一筋縄ではいきません。\n常に、試行錯誤の連続です。\n過失リスクやクレームとも隣り合わせですから、\n普通なら避けるべき道なのかもしれません。',
    'しかし、二の足を踏んでいるようでは、\nSBL株式会社の仕事とは言えないのです。',
    '覚悟を持った挑戦心こそが、道を切り拓く。',
    '人間を人間たらしめるような心根こそが、\n私たちの原点であり、未来なのだと思います。',
    'きっとお客様から信頼いただいてるのも、\n他ならぬこの人間力なのではないでしょうか。',
    '空であろうと、陸であろうと、海であろうと。',
    'そこに困難な壁が立ちはだかっていれば、\n私たちの出番です。\nテクノロジーがいくら進歩しても、\n時代を歩むのは人間。',
    '私たちは、「覚悟」「挑戦」「品格」という力を\n決して忘れません。\nそして、どんな変化にも対応し、\nあらゆる困難を超え続けていきたいと\n思っています。',
  ];

  return (
    <section className="bg-white relative z-[100] py-[100px] md:py-[140px]">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: Sticky Title */}
          <div className="w-full md:w-[395px]">
            <div className="md:sticky md:top-[210px]">
              <img
                loading="lazy"
                src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_text01.svg"
                alt="人間力で、超えていく。"
                className="w-full max-w-[324px] object-contain mb-8"
              />
              <img
                loading="lazy"
                src="https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/top/fv_text02.svg"
                alt="GLOBAL LOGISTICS CONCIERGE"
                className="max-w-[178px] block"
              />
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
