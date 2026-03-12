/**
 * @copyright 2024 CodeWithHaiderr
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/dronetrax.png',
      title: '𝐃𝐫𝐨𝐧𝐞𝐓𝐫𝐚𝐱',
      tags: ['React.js', 'Node.js', 'Web Sockets', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      projectLink: 'https://www.dronetrax.com/'
    },
    {
      imgSrc: '/images/maklerai.png',
      title: 'Makler AI - backend',
      tags: ['Supabase', 'Node.js'],
      projectLink: 'https://www.makler-ai.com/'
    },
    {
      imgSrc: '/images/nexussports.png',
      title: 'Nexus - Sports Adminstration',
      tags: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Socket.IO', 'TypeScript'],
      // projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/images/tabeeer.png',
      title: 'Tabeeer.com',
      tags: ['Next.js' , 'Tailwind CSS', 'MongoDB'],
      projectLink: 'https://tabeeer.com/'
    },
    {
      imgSrc: '/images/twinsting.png',
      title: 'Twinsting',
      tags: ['React.js', 'Node.js', 'Web Sockets', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      projectLink: 'https://twinsting-client-hdr.vercel.app/'
    },
    {
      imgSrc: '/images/subtracker.png',
      title: '𝐒𝐮𝐛𝐓𝐫𝐚𝐜𝐤𝐞𝐫',
      tags: ['Next.js', 'Node.js' , 'Tailwind CSS', 'MongoDB', 'TypeScript'],
      projectLink: 'https://www.subtracker.io/'
    },
    
  ];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400/80 mb-3 reveal-up">
              Selected projects
            </p>
            <h2 className="headline-2 mb-3 reveal-up">
              My Portfolio Highlights
            </h2>
            <p className="text-sm text-zinc-400 max-w-[56ch] reveal-up">
              A curated set of real world products I’ve built across web apps,
              dashboards, and backend services focused on performance, UX, and clean architecture.
            </p>
          </div>

          <a
            href="#contact"
            className="btn btn-secondary w-fit reveal-up"
          >
            Let’s build yours
          </a>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-2xl p-4 md:p-6 lg:p-7 shadow-[0_0_80px_rgba(15,23,42,0.55)]">
          <div className="pointer-events-none absolute -top-24 right-[-6rem] h-56 w-56 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-[-4rem] h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative grid gap-5 md:gap-6 [grid-template-columns:repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work