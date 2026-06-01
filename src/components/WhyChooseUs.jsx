import { motion } from "framer-motion";
import { createElement } from "react";
import SectionHeader from "./SectionHeader";
import { reasons } from "../data/siteData";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="container-pad py-24">
      <SectionHeader
        kicker="Why Choose Us"
        title="A premium website partner focused on outcomes"
        description="You get modern design, reliable engineering, practical pricing, and ongoing support from a team that thinks like a product partner."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"
          >
            {createElement(reason.icon, { className: "text-2xl text-cyan" })}
            <h3 className="mt-5 text-lg font-bold text-white">{reason.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
