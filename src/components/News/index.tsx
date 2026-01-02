export default function News() {
  const newsItems = [
    {
      date: '2025-08-08',
      category: 'お知らせ',
      title: '夏季休業のお知らせ',
      link: '/news/summer-holiday/',
    },
    {
      date: '2025-05-01',
      category: 'お知らせ',
      title: '倉庫拡大のお知らせ',
      link: '/news/warehouse-expansion/',
    },
    {
      date: '2025-04-23',
      category: 'お知らせ',
      title: 'GW休業のお知らせ',
      link: '/news/gw-holiday/',
    },
    {
      date: '2024-12-20',
      category: '会社の動向',
      title: '年末年始の営業スケジュールについて',
      link: '/news/year-end-schedule/',
    },
  ];

  return (
    <section
      className="sticky-section sticky z-[7] news-bg py-[100px] md:py-[140px] top-0"
    >
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Section Title */}
        <div className="flex items-start gap-8">
          <h2 className="text-neutral-900/90 section-title font-din font-normal text-[50px] md:text-[90px] my-0">
            NEWS
          </h2>
          <span className="text-neutral-900 section-subtitle font-dnp font-semibold text-sm md:text-lg block mt-1.5 pl-1.5">
            お知らせ
          </span>
        </div>

        {/* News List */}
        <ul className="max-w-[792px] ml-auto mt-10 space-y-0">
          {newsItems.map((item, index) => (
            <li
              key={index}
              className="fade-in border-b border-neutral-300 first:border-t"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={item.link}
                className="block py-6 hover:bg-neutral-50 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                  <time className="font-din text-sm tracking-wider text-neutral-600">
                    {item.date}
                  </time>
                  <span className="inline-block px-3 py-1 bg-neutral-200 text-xs font-medium w-fit">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-dnp text-base md:text-lg group-hover:text-nax-orange transition-colors">
                  {item.title}
                </h3>
              </a>
            </li>
          ))}
        </ul>

        {/* View More Button */}
        <div className="text-right mt-10">
          <a
            href="/news"
            className="inline-flex justify-center items-center w-[213px] h-[72px] border border-black text-black font-din text-xl tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            VIEW MORE
          </a>
        </div>
      </div>
    </section>
  );
}
