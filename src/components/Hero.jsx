import { motion } from "framer-motion";
import { FiArrowRight, FiZap, FiCheckCircle } from "react-icons/fi";
import { useI18n } from "../i18n/LanguageContext";
import { WHATSAPP_URL } from "../data/siteData";
import { fadeUp, fadeRight, viewportOnce } from "../motionVariants";

const t05 = { duration: 0.5 };
const t06 = { duration: 0.6, delay: 0.05 };
const t07 = { duration: 0.6, delay: 0.15 };
const t08 = { duration: 0.6, delay: 0.25 };
const t09 = { duration: 0.6, delay: 0.35 };
const t10 = { duration: 0.7, delay: 0.1 };
const barHeights = [60, 80, 50, 90, 70, 100];

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:32px_32px] opacity-30" />
      <div className="container-pad">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={t05} className="section-kicker">
              <FiZap /> {t.hero.badge}
            </motion.div>
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" transition={t06}
              className="display-font mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              {t.hero.titleA}
              <br />
              <span className="gradient-text">{t.hero.titleB}</span>
            </motion.h1>
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" transition={t07}
              className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" transition={t08}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-violet px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90 sm:text-base"
              >
                {t.hero.primaryCta} <FiArrowRight />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan/50 sm:text-base"
              >
                {t.hero.secondaryCta}
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" transition={t09}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {t.stats.map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-4">
                  <div className="display-font text-2xl font-bold text-white">{s.value}</div>
                  <div className="mt-1 text-xs text-slate-400">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeRight} initial="hidden" animate="visible" transition={t10} className="relative">
            <div className="glass-card gradient-border relative rounded-3xl p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-cyan">{t.hero.consoleTitle}</div>
                  <div className="display-font mt-1 text-lg font-bold">{t.hero.consoleSubtitle}</div>
                </div>
                <span className="flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold uppercase text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> {t.hero.live}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {t.hero.steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-electric/80 to-violet/80 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="flex-1 text-sm font-medium text-slate-200">{step}</span>
                    <FiCheckCircle className="text-emerald-400" />
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl border border-white/5 bg-gradient-to-br from-electric/10 to-violet/10 p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-400">Vertex · build #v1</div>
                    <div className="display-font mt-1 text-xl font-bold text-white">vertex.app</div>
                  </div>
                  <div className="flex items-end gap-1">
                    {barHeights.map((h, i) => {
                      const style = { height: h + "%" };
                      return (
                        <div
                          key={i}
                          className="w-2 rounded-full bg-gradient-to-t from-electric/60 to-cyan/80"
                          style={style}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
