import { motion } from "framer-motion";
import { createElement } from "react";
import SectionHeader from "./SectionHeader";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <section id="services" className="container-pad py-24">
      <SectionHeader
        kicker="Services"
        title="Everything your business needs to launch and grow online"
        description="We combine strategy, design, and development to ship reliable digital products that create trust and capture leads."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="glass-card group rounded-3xl p-6 transition hover:-translate-y-2 hover:border-cyan/45"
          >
            <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-electric/30 to-violet/30 text-cyan">
              {createElement(service.icon, { size: 24 })}
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
