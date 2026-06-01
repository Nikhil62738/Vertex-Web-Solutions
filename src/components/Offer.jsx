import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { offerItems } from "../data/siteData";

export default function Offer() {
  return (
    <section id="offer" className="container-pad py-24">
      <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-14">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-electric/25 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <p className="section-kicker">Special Offer</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Launch Your Business Online</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              A simple, affordable path for businesses that need a professional website, support, and a premium digital presence without a heavy upfront cost.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-midnight shadow-glow transition hover:-translate-y-1"
            >
              Claim Offer <FiArrowRight />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <div className="rounded-3xl border border-white/10 bg-midnight/60 p-5">
              {offerItems.map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-white/10 py-4 last:border-b-0">
                  <FiCheckCircle className="shrink-0 text-xl text-emerald-300" />
                  <span className="font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
