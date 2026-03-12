/**
 * @copyright 2024 CodeWithHaiderr
 * @license Apache-2.0
 */

import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

const offerSlides = [
  {
    src: "/images/FullStackDeveloper.png",
    alt: "Full stack web developer services banner",
  },
  {
    src: "/images/BackendDeveloper.png",
    alt: "Backend developer services banner",
  },
  {
    src: "/images/FrontendDeveloper.png",
    alt: "Frontend developer services banner",
  },
  {
    src: "/images/Assignment.png",
    alt: "Professional assignment and research writing services banner",
  },
];

const SLIDE_INTERVAL = 2500;

const skillItem = [
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/dotnet.png",
    label: ".Net",
    desc: "Framework",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/ts.png",
    label: "TypeScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
];

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offerSlides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % offerSlides.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? offerSlides.length - 1 : prev - 1
    );
  };

  return (
    <section className="section pt-8" id="reviews">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400/80 mb-3 reveal-up">
              What I offer
            </p>
            <h2 className="headline-2 mb-3 reveal-up">
              Services & skill highlights
            </h2>
            <p className="text-sm text-zinc-400 max-w-[44ch] reveal-up">
              Explore the different ways I can help you, from assignments and
              academic work to full stack, frontend, and backend development.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-950 via-zinc-900 to-sky-950/40 shadow-[0_0_80px_rgba(15,23,42,0.85)]">
          <div className="pointer-events-none absolute -top-24 right-[-6rem] h-56 w-56 rounded-full bg-sky-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-[-4rem] h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="relative aspect-[16/9] w-full">
            {offerSlides.map(({ src, alt }, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="h-full w-full">
                    <img
                      src={src}
                      alt={alt}
                      className="h-full w-full object-cover rounded-[1.3rem] md:rounded-[1.6rem]"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                </div>
              </div>
            ))}

              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-sky-500/80  text-sky-700 shadow-xl transition hover:bg-sky-50 hover:border-sky-400"
              >
                <span className="text-xl leading-none">&#10094;</span>
              </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-sky-500/80 text-sky-700 shadow-xl transition hover:bg-sky-50 hover:border-sky-400"
            >
              <span className="text-xl leading-none">&#10095;</span>
            </button>
          </div>

          <div className="absolute left-1/2 bottom-4 flex -translate-x-1/2 gap-2">
            {offerSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-6 bg-sky-400"
                    : "w-2.5 bg-zinc-600/80 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="headline-2 mb-3 reveal-up">Essential tools I use</h3>
          <p className="text-zinc-400 mt-1 mb-8 max-w-[50ch] reveal-up">
            Explore the tools and technologies that empower me to design and
            develop outstanding, high-performing websites and applications with
            precision and creativity.
          </p>
          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] w-full max-w-screen-xl mx-auto">
            {skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;