import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useI18n } from "../i18n/LanguageContext";
import { WHATSAPP_URL } from "../data/siteData";
import { fadeUp, viewportOnce } from "../motionVariants";

const transition = { duration: 0.55 };

export default function CTA() {
  const { t } = useI18n();
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-pad">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={transition}
          className="gradient-border relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-electric/20 via-violet/15 to-cyan/10 p-8 text-center sm:p-14"
        >
          <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:24px_24px] opacity-30" />
          <h2 className="display-font mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">{t.cta.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-midnight shadow-glow transition hover:bg-slate-100 sm:text-base"
            >
              {t.cta.primary} <FiArrowRight />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 sm:text-base"
            >
              <FaWhatsapp className="text-emerald-300" /> {t.cta.secondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
