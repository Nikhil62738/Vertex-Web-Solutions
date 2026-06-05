import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { useI18n } from "../i18n/LanguageContext";
import { testimonials } from "../data/siteData";
import { fadeUp, viewportOnce } from "../motionVariants";

export default function Testimonials() {
  const { t } = useI18n();
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="container-pad">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{t.testimonials.kicker}</span>
          <h2 className="display-font mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((tt, i) => {
            const transition = { duration: 0.55, delay: i * 0.08 };
            return (
              <motion.figure
                key={tt.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={transition}
                className="glass-card flex h-full flex-col rounded-3xl p-6"
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <FiStar key={s} className="fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-200">
                  “{tt.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img src={tt.image} alt={tt.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-white">{tt.name}</div>
                    <div className="text-xs text-slate-400">{tt.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
