

import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 lg:pt-24"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-24 mt-10">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/MH.JPG"
                alt="Mazahir Haider avatar"
                width={50}
                height={50}
                className="img-cover"
              ></img>
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for Work
            </div>
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-400/80 mt-6">
            Full Stack Web Developer
          </p>
          <h1 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-3 mb-4 bg-gradient-to-r from-white via-sky-100 to-sky-400 bg-clip-text text-transparent">
            Building Scalable Modern Websites for the Future
          </h1>
          <p className="text-sm text-zinc-400 mb-6 max-w-[46ch]">
            I design and build modern, high-performance web experiences that feel fast,
            look premium, and are crafted with clean, scalable code.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="/files/Mazahir_Haider_CV.pdf"
              target="_blank"
            />

            <ButtonOutline
              label="Scroll down"
              href="#about"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="mt-10 lg:mt-0 flex justify-center lg:block">
          <figure className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-b from-sky-500/40 via-sky-500/0 to-emerald-500/40 blur-3xl" />
            <div className="relative rounded-[2.25rem] border border-zinc-700/60 bg-zinc-900/60 shadow-[0_0_120px_rgba(37,99,235,0.35)] backdrop-blur-3xl overflow-hidden">
              <img
                src="/images/mybgless.PNG"
                alt="Mazahir Haider"
                className="w-full h-[500px] object-cover scale-110"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
