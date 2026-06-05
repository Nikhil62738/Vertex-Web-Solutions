import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiX, FiClock, FiCheckCircle } from "react-icons/fi";
import { useI18n } from "../i18n/LanguageContext";
import { projects } from "../data/siteData";
import { fadeUp, fadeIn, scaleIn, viewportOnce } from "../motionVariants";

const modalTransition = { duration: 0.25, ease: "easeOut" };

export default function Portfolio() {
  const { t } = useI18n();
  const [active, setActive] = useState(null);
  const current = active !== null ? projects[active] : null;

  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="container-pad">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{t.portfolio.kicker}</span>
          <h2 className="display-font mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 text-slate-300">{t.portfolio.description}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const transition = { duration: 0.5, delay: (i % 3) * 0.06 };
            return (
              <motion.button
                key={p.title}
                onClick={() => setActive(i)}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={transition}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="display-font text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-300">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((tt) => (
                      <span key={tt} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                        {tt}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-cyan">
                    <span>{t.portfolio.clickHint}</span>
                    <FiArrowUpRight className="text-base" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/80 p-4 backdrop-blur-xl"
            onClick={() => setActive(null)}
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={modalTransition}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-ink p-6 shadow-card sm:p-8"
            >
              <button
                aria-label={t.portfolio.close}
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                <FiX />
              </button>
              <img src={current.image} alt={current.title} className="h-56 w-full rounded-2xl object-cover" />
              <div className="mt-6">
                <span className="section-kicker">{t.portfolio.details}</span>
                <h3 className="display-font mt-3 text-2xl font-bold text-white">{current.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{current.description}</p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan">
                    <FiCheckCircle /> {t.portfolio.outcome}
                  </div>
                  <p className="mt-2 text-sm text-slate-200">{current.outcome}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan">
                    <FiClock /> {t.portfolio.timeline}
                  </div>
                  <p className="mt-2 text-sm text-slate-200">{current.timeline}</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan">{t.portfolio.features}</div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {current.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-200">
                      <FiCheckCircle className="mt-0.5 text-emerald-400" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan">{t.portfolio.tech}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {current.tech.map((tt) => (
                    <span key={tt} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">{tt}</span>
                  ))}
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {current.link && current.link !== "#" && (
                  <a
                    href={current.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-violet px-4 py-2 text-sm font-semibold text-white shadow-glow"
                  >
                    {t.portfolio.viewLive} <FiArrowUpRight />
                  </a>
                )}
                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-cyan/50"
                >
                  {t.portfolio.discuss}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
