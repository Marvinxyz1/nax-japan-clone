export default function Recruitment() {
  const recruitItems = [
    {
      title: '新卒採用',
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/common/recruit01.webp',
      link: 'https://recruit.naxjapan.com/',
    },
    {
      title: '中途採用',
      image: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/images/common/recruit02.webp',
      link: 'https://recruit.naxjapan.com/recruit/',
    },
  ];

  return (
    <section className="bg-nax-dark text-white py-16 md:py-24 border-b border-white">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Section Title */}
        <div className="flex items-start gap-6">
          <h2 className="font-din font-normal text-[28px] md:text-[40px] tracking-wider my-0">
            RECRUITMENT
          </h2>
          <span className="font-medium text-sm block">採用情報</span>
        </div>

        {/* Recruit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {recruitItems.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="fade-in group relative overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <div className="flex items-center justify-between w-full">
                  <p className="text-white text-xl font-medium">{item.title}</p>
                  <span className="w-8 h-8 flex items-center justify-center border border-white rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
