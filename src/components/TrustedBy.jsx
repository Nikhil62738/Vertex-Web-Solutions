import { useI18n } from "../i18n/LanguageContext";
import { techStack } from "../data/siteData";

export default function TrustedBy() {
  const { t } = useI18n();
  const items = [...techStack, ...techStack];

  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-pad text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          {t.trustedBy.kicker}
        </p>
        <h2 className="display-font mt-3 text-xl font-bold text-slate-200 sm:text-2xl">
          {t.trustedBy.title}
        </h2>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-midnight to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-midnight to-transparent" />
        <div className="marquee-track gap-10 px-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-3 text-slate-300 backdrop-blur"
              >
                <Icon className="text-xl text-cyan" />
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
