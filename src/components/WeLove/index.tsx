export default function WeLove() {
  const features = [
    {
      title: 'Expertise',
      subtitle: '専門知識が必要な貨物',
      video: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/video/welove02.mp4',
      link: '/solutions#solutions01',
    },
    {
      title: 'Complex',
      subtitle: '煩雑な手続きが必要な貨物',
      video: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/video/welove03.mp4',
      link: '/solutions#solutions02',
    },
    {
      title: 'Time-Critical',
      subtitle: '緊急を要する貨物',
      video: 'https://naxjapan.com/wp/wp-content/themes/naxjapan-corp/assets/video/welove01.mp4',
      link: '/solutions#solutions03',
    },
  ];

  return (
    <section className="bg-white relative z-[5] py-[100px] md:py-[180px]">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Section Title */}
        <div className="flex items-start gap-8">
          <h2 className="text-neutral-900/90 section-title font-din font-normal text-[50px] md:text-[90px] my-0">
            WE LOVE
          </h2>
          <span className="text-neutral-900 section-subtitle font-dnp font-semibold text-sm md:text-lg block mt-1.5 pl-1.5">
            わたしたちが得意とするもの
          </span>
        </div>

        {/* Features Grid */}
        <div className="mt-16 space-y-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`fade-in flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Title */}
              <div className="w-full md:w-1/3">
                <h3 className="font-din text-4xl md:text-5xl tracking-wider mb-2">
                  {feature.title}
                </h3>
                <p className="font-dnp text-lg text-neutral-700">
                  {feature.subtitle}
                </p>
              </div>

              {/* Video */}
              <div className="w-full md:w-2/3 video-container aspect-video bg-neutral-100 relative group">
                <video
                  src={feature.video}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <a
                    href={feature.link}
                    className="inline-flex justify-center items-center px-8 py-4 border border-white text-white font-din text-lg tracking-wider hover:bg-white hover:text-black transition-colors"
                  >
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
