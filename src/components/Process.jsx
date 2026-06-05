import { motion } from "framer-motion";
import { useI18n } from "../i18n/LanguageContext";
import { processIcons } from "../data/siteData";
import { fadeUp, viewportOnce } from "../motionVariants";

export default function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="container-pad">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{t.process.kicker}</span>
          <h2 className="display-font mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t.process.title}
          </h2>
          <p className="mt-4 text-slate-300">{t.process.description}</p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent lg:block" />
          <ol className="grid gap-6 lg:grid-cols-4">
            {t.process.steps.map((step, i) => {
              const Icon = processIcons[i % processIcons.length];
              const transition = { duration: 0.5, delay: i * 0.08 };
              const label = String(i + 1).padStart(2, "0");
              return (
                <motion.li
                  key={step.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={transition}
                  className="relative glass-card rounded-2xl p-6 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-violet text-xl text-white shadow-glow">
                    <Icon />
                  </div>
                  <div className="display-font mt-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan">
                    {label}
                  </div>
                  <h3 className="display-font mt-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
