/**
 * @copyright 2024 CodeWithHaiderr
 * @license Apache-2.0
 */
import React from "react";
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/CodeWithHaiderr",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mazahirhaider/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithhaiderr/profilecard/?igsh=cng4dngzZzA0cnJm",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923341666680",
  },
];

const Footer = () => {
  return (
    <footer className="section border-t border-zinc-900/80 bg-gradient-to-t from-black/70 via-zinc-950/40 to-transparent">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/70 px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12 backdrop-blur-2xl mb-10">
          <div className="pointer-events-none absolute -top-24 right-[-5rem] h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-[-4rem] h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl" />

          <div className="relative lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="mb-10 lg:mb-0">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400/80 mb-3">
                Let&apos;s collaborate
              </p>
              <h2 className="headline-1 mb-4 lg:max-w-[14ch]">
                Let&apos;s work together today!
              </h2>
              <p className="text-sm text-zinc-400 mb-6 max-w-[40ch]">
                Have an idea in mind or need help with an existing product? Reach out and
                let&apos;s build something you&apos;re excited to ship.
              </p>
              <ButtonPrimary
                href="mailto:Mazahirhaider98@gmail.com"
                label="Start Project"
                icon="chevron_right"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 lg:pl-6">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Sitemap
                </p>
                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-zinc-400 py-1.5 transition-colors hover:text-zinc-100"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Socials
                </p>
                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-zinc-400 py-1.5 transition-colors hover:text-zinc-100"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 py-4 text-center md:flex-row md:justify-between">
  <a href="/" className="logo flex items-center gap-3">
    <img
      src="/images/logo-bg.png"
      width={56}
      height={56}
      alt="Logo"
      className="rounded-2xl"
    />
    <span className="text-sm font-medium text-zinc-100 tracking-wide">
      Mazahir Haider
    </span>
  </a>
  <p className="text-zinc-300 text-xs md:text-sm mt-2 md:mt-0">
    &copy; 2024 <span className="text-zinc-50">CodeWithHaiderr</span>. All rights reserved.
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
