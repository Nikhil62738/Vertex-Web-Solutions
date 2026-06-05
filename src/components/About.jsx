import { motion } from "framer-motion";
import { useI18n } from "../i18n/LanguageContext";
import { fadeUp, fadeLeft, fadeRight, viewportOnce } from "../motionVariants";

const t06 = { duration: 0.6 };
const t07 = { duration: 0.7 };

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-pad">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={t06}
          >
            <span className="section-kicker">{t.about.kicker}</span>
            <h2 className="display-font mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">{t.about.title}</h2>
            <p className="mt-5 text-slate-300">{t.about.intro}</p>
            <p className="mt-3 text-slate-400">{t.about.sub}</p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={t07}
            className="grid grid-cols-2 gap-4"
          >
            {t.about.pillars.map(([title, desc]) => (
              <div key={title} className="glass-card rounded-2xl p-5">
                <div className="display-font text-sm font-bold uppercase tracking-[0.18em] text-cyan">{title}</div>
                <p className="mt-2 text-sm text-slate-200">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
