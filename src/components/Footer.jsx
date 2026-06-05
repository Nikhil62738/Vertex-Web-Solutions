import { FiZap } from "react-icons/fi";
import { useI18n } from "../i18n/LanguageContext";
import { navKeys, footerSocials, EMAIL } from "../data/siteData";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-midnight/80 py-12">
      <div className="container-pad grid gap-10 md:grid-cols-[1.4fr,1fr,1fr,1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-violet text-white shadow-glow">
              <FiZap />
            </span>
            <span className="gradient-text">Vertex Web Solutions</span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-slate-400">{t.footer.tagline}</p>
          <div className="mt-5">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">{t.footer.language}</div>
            <LanguageSwitcher />
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">{t.footer.quickLinks}</div>
          <ul className="mt-4 space-y-2 text-sm">
            {navKeys.map((n) => (
              <li key={n.key}>
                <a href={n.href} className="text-slate-300 transition hover:text-white">
                  {t.nav[n.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">{t.contact.kicker}</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <a href={"mailto:" + EMAIL} className="hover:text-white">{EMAIL}</a>
            </li>
            <li>
              <a href="/refund-policy.html" className="hover:text-white">{t.footer.noRefund}</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">{t.footer.social}</div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {footerSocials.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan/50"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="container-pad mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
        <div>© {year} Vertex Web Solutions. {t.footer.rights}</div>
        <div>Made with care · India → World</div>
      </div>
    </footer>
  );
}
