import { motion } from "framer-motion";
import { useI18n } from "../i18n/LanguageContext";
import { serviceIcons } from "../data/siteData";
import { fadeUp, viewportOnce } from "../motionVariants";

export default function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="container-pad">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{t.services.kicker}</span>
          <h2 className="display-font mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-slate-300">{t.services.description}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            const transition = { duration: 0.5, delay: i * 0.05 };
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={transition}
                className="group glass-card rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/80 to-violet/80 text-xl text-white shadow-glow">
                  <Icon />
                </div>
                <h3 className="display-font mt-5 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
