import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiZap, FiArrowRight } from "react-icons/fi";
import { navKeys, WHATSAPP_URL } from "../data/siteData";
import { useI18n } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { dropdownVariant, baseTransition } from "../motionVariants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = scrolled
    ? "backdrop-blur-2xl bg-midnight/80 border-b border-white/10"
    : "bg-transparent";

  return (
    <header className={"fixed inset-x-0 top-0 z-50 transition-all duration-300 " + headerClass}>
      <div className="container-pad flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold sm:text-xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-violet text-white shadow-glow">
            <FiZap />
          </span>
          <span className="gradient-text">Vertex</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-300 lg:flex">
          {navKeys.map((n) => (
            <a key={n.key} href={n.href} className="transition hover:text-white">
              {t.nav[n.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:border-cyan/50"
          >
            {t.nav.whatsapp}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-violet px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
          >
            {t.nav.cta} <FiArrowRight />
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            variants={dropdownVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={baseTransition}
            className="border-t border-white/10 bg-midnight/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-pad space-y-1 py-4">
              {navKeys.map((n) => (
                <a
                  key={n.key}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {t.nav[n.key]}
                </a>
              ))}
              <div className="flex items-center justify-between gap-2 pt-2">
                <LanguageSwitcher compact />
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-violet px-4 py-2 text-sm font-semibold text-white"
                >
                  {t.nav.cta}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
