import { FiArrowLeft, FiAlertTriangle, FiCheckCircle, FiMail } from "react-icons/fi";
import { useI18n } from "../i18n/LanguageContext";
import { EMAIL } from "../data/siteData";
import LanguageSwitcher from "./LanguageSwitcher";

export default function NoRefundPolicy() {
  const { t } = useI18n();
  return (
    <div className="relative min-h-screen bg-midnight text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-electric/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet/25 blur-3xl" />
      </div>

      <header className="container-pad flex items-center justify-between py-6">
        <a href="/" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:border-cyan/50">
          <FiArrowLeft /> {t.refund.back}
        </a>
        <LanguageSwitcher />
      </header>

      <main className="container-pad py-10">
        <div className="mx-auto max-w-3xl">
          <span className="section-kicker">{t.refund.kicker}</span>
          <h1 className="display-font mt-4 text-3xl font-bold sm:text-4xl">{t.refund.title}</h1>
          <p className="mt-4 text-slate-300">{t.refund.intro}</p>

          <div className="mt-8 rounded-3xl border border-amber-400/30 bg-amber-400/10 p-6">
            <div className="flex items-center gap-3 text-amber-300">
              <FiAlertTriangle className="text-2xl" />
              <h2 className="display-font text-lg font-bold">{t.refund.cardTitle}</h2>
            </div>
            <p className="mt-3 text-sm text-amber-100">{t.refund.cardBody}</p>
          </div>

          <ul className="mt-8 space-y-3">
            {t.refund.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-200">
                <FiCheckCircle className="mt-0.5 text-emerald-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <a
            href={"mailto:" + EMAIL}
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-violet px-5 py-3 text-sm font-semibold text-white shadow-glow"
          >
            <FiMail /> {t.refund.contact}
          </a>
        </div>
      </main>
    </div>
  );
}
