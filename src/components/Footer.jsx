import { createElement } from "react";
import { navLinks, footerSocials } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/80">
      <div className="container-pad grid gap-10 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-black text-midnight">V</span>
            <span className="font-bold text-white">Vertex Web Solutions</span>
          </a>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            Modern websites, web applications, and mobile solutions for businesses ready to grow online.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Social Media</h3>
          <div className="mt-4 flex gap-3">
            {footerSocials.map((social) => {
              const hasRealLink = social.href && social.href !== "#";
              const className =
                "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan/50 hover:text-white";

              if (!hasRealLink) {
                return (
                  <button
                    key={social.label}
                    type="button"
                    aria-label={`${social.label} link coming soon`}
                    title={`${social.label} link coming soon`}
                    className={`${className} cursor-not-allowed opacity-70`}
                  >
                    {createElement(social.icon)}
                  </button>
                );
              }

              return (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className={className}>
                  {createElement(social.icon)}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        Copyright 2026 Vertex Web Solutions. All rights reserved.
      </div>
    </footer>
  );
}
