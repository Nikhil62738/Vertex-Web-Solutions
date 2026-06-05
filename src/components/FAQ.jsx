import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useI18n } from "../i18n/LanguageContext";
import { fadeUp, viewportOnce } from "../motionVariants";

const contentVariant = { hidden: { height: 0, opacity: 0 }, visible: { height: "auto", opacity: 1 } };
const contentTransition = { duration: 0.3, ease: "easeOut" };

export default function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-pad">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{t.faq.kicker}</span>
          <h2 className="display-font mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">{t.faq.title}</h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            const transition = { duration: 0.45, delay: i * 0.04 };
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={transition}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">{item.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      variants={contentVariant}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={contentTransition}
                      className="px-5"
                    >
                      <p className="pb-5 text-sm text-slate-300">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
