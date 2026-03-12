/**
 * @copyright 2024 CodeWithHaiderr
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  const isLink = Boolean(projectLink);

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/30 backdrop-blur-2xl shadow-[0_0_60px_rgba(2,6,23,0.55)] transition",
        isLink ? "hover:border-sky-500/50" : "opacity-90",
        classes,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <figure className="relative aspect-[16/10] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent z-10" />
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </figure>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="title-1 mb-2 text-zinc-100">{title}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {tags.slice(0, 6).map((label, key) => (
                <span
                  className="h-8 text-xs font-medium text-zinc-300 bg-zinc-50/5 grid place-items-center px-3 rounded-full border border-zinc-700/40"
                  key={key}
                >
                  {label}
                </span>
              ))}
              {tags.length > 6 ? (
                <span className="h-8 text-xs font-medium text-zinc-400 bg-zinc-50/5 grid place-items-center px-3 rounded-full border border-zinc-700/40">
                  +{tags.length - 6}
                </span>
              ) : null}
            </div>
          </div>

          <div
            className={[
              "w-11 h-11 rounded-2xl grid place-items-center shrink-0 transition",
              isLink
                ? "bg-sky-400 text-zinc-950 group-hover:translate-x-0.5"
                : "bg-zinc-800 text-zinc-400",
            ].join(" ")}
          >
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </div>
        </div>

        {!isLink ? (
          <p className="text-xs text-zinc-500 mt-4">
            Private project / link unavailable
          </p>
        ) : null}
      </div>

      {isLink ? (
        <a
          href={projectLink}
          className="absolute inset-0"
          target="_blank"
          rel="noreferrer"
          aria-label={`Open project: ${title}`}
        />
      ) : null}
    </article>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
