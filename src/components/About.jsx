import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="container-pad py-24">
      <SectionHeader kicker="About" title="About Vertex Web Solutions" />
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="glass-card rounded-3xl p-8"
        >
          <p className="text-lg leading-8 text-slate-300">
            Vertex Web Solutions helps startups and businesses establish a strong digital presence through modern websites, web applications, and mobile solutions.
          </p>
          <p className="mt-5 text-base leading-7 text-slate-400">
            We focus on clean design, fast performance, mobile-first experiences, and practical support so your digital product continues to improve after launch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {[
            ["Strategy", "We clarify the offer, audience, pages, and lead flow before design starts."],
            ["Design", "We create polished interfaces that feel credible, modern, and easy to use."],
            ["Development", "We build responsive, fast-loading websites and applications with clean code."],
            ["Support", "We maintain, improve, and support your online presence after launch."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
