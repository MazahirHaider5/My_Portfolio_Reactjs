

const aboutItems = [
  {
    label: "Project done",
    number: 15,
  },
  {
    label: "Years of experience",
    number: 4,
  },
];

const About = () => {
  return (
    <section id="about" className="section -mt-16 lg:-mt-20">
      <div className="container max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-700/60 bg-zinc-900/70 shadow-[0_0_80px_rgba(37,99,235,0.35)] backdrop-blur-2xl p-7 md:p-12 reveal-up">
          <div className="pointer-events-none absolute -top-24 right-[-4rem] h-48 w-48 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="relative md:grid md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] md:gap-10 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400/80 mb-4">
                About me
              </p>
              <p className="text-zinc-200 mb-4 md:mb-6 md:text-xl md:max-w-[60ch]">
                Hello! I&apos;m Mazahir Haider, a Full Stack Web Developer with a
                passion for creating modern, efficient, and user-friendly websites.
                I specialize in building solutions that are visually appealing, easy
                to use, and technically sound. With a strong focus on combining
                creativity and problem-solving, I strive to deliver exceptional
                digital experiences that meet both user and business needs.
              </p>
              <p className="text-sm text-zinc-400 md:max-w-[52ch]">
                From idea to deployment, I focus on writing clean, scalable code,
                designing intuitive interfaces, and delivering fast, reliable
                experiences for your users.
              </p>
            </div>

            <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-1.5">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="absolute bottom-2 -right-4 flex items-center gap-3 px-4 py-3">
              <img
                src="/images/logo-bg.png"
                alt="Logo"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
