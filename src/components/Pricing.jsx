import { motion } from "framer-motion";
import { FiArrowRight, FiLayers, FiPenTool, FiZap, FiMessageCircle, FiFileText, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useI18n } from "../i18n/LanguageContext";
import { WHATSAPP_URL } from "../data/siteData";
import { fadeUp, viewportOnce } from "../motionVariants";

const factorIcons = [FiLayers, FiPenTool, FiZap];
const stepIcons = [FiMessageCircle, FiFileText, FiCheckCircle];
const ctaTransition = { duration: 0.6 };

export default function Pricing() {
  const { t } = useI18n();

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="container-pad">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{t.pricing.kicker}</span>
          <h2 className="display-font mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-slate-300">{t.pricing.description}</p>
        </div>

        <div className="mt-14">
          <h3 className="display-font text-center text-xs font-bold uppercase tracking-[0.25em] text-cyan">
            {t.pricing.factorsTitle}
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {t.pricing.factors.map((f, i) => {
              const Icon = factorIcons[i % factorIcons.length];
              const transition = { duration: 0.55, delay: i * 0.08 };
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={transition}
                  className="glass-card group rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/80 to-violet/80 text-xl text-white shadow-glow">
                    <Icon />
                  </div>
                  <h4 className="display-font mt-5 text-lg font-bold text-white">{f.title}</h4>
                  <p className="mt-2 text-sm text-slate-300">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="display-font text-center text-xs font-bold uppercase tracking-[0.25em] text-cyan">
            {t.pricing.howTitle}
          </h3>
          <div className="relative mt-6">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent md:block" />
            <ol className="grid gap-6 md:grid-cols-3">
              {t.pricing.steps.map((s, i) => {
                const Icon = stepIcons[i % stepIcons.length];
                const transition = { duration: 0.5, delay: i * 0.08 };
                const label = String(i + 1).padStart(2, "0");
                return (
                  <motion.li
                    key={s.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    transition={transition}
                    className="relative glass-card rounded-2xl p-6 text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan to-electric text-xl text-white shadow-glow">
                      <Icon />
                    </div>
                    <div className="display-font mt-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan">{label}</div>
                    <h4 className="display-font mt-2 text-lg font-bold text-white">{s.title}</h4>
                    <p className="mt-2 text-sm text-slate-300">{s.description}</p>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={ctaTransition}
          className="gradient-border relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-electric/20 via-violet/15 to-cyan/10 p-8 text-center sm:p-12"
        >
          <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:24px_24px] opacity-30" />
          <h3 className="display-font text-2xl font-bold text-white sm:text-3xl">{t.pricing.ctaTitle}</h3>
          <p className="mx-auto mt-3 max-w-xl text-slate-200">{t.pricing.ctaDescription}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-midnight shadow-glow transition hover:bg-slate-100 sm:text-base"
            >
              {t.pricing.primaryCta} <FiArrowRight />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 sm:text-base"
            >
              <FaWhatsapp className="text-emerald-300" /> {t.pricing.secondaryCta}
            </a>
          </div>
          <p className="mt-5 text-xs text-slate-400">{t.pricing.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
