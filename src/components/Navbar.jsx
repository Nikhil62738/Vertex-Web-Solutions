import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { navLinks } from "../data/siteData";

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Vertex Web Solutions home">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-black text-midnight shadow-glow">
        V
      </span>
      <span className="text-sm font-bold tracking-wide text-white sm:text-base">Vertex Web Solutions</span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/75 backdrop-blur-2xl">
      <nav className="container-pad flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan/60 hover:bg-white/10"
          >
            WhatsApp
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-midnight shadow-glow transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Get Free Website
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-midnight/95 px-4 py-5 backdrop-blur-2xl lg:hidden"
        >
          <div className="grid gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-300">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-midnight">
              Get Free Website
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
