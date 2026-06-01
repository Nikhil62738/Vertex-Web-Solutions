import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { testimonials } from "../data/siteData";

export default function Testimonials() {
  return (
    <section className="bg-white/[0.025] py-24">
      <div className="container-pad">
        <SectionHeader kicker="Testimonials" title="Trusted by founders, educators, and business owners" />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="glass-card rounded-3xl p-6"
            >
              <div className="flex gap-1 text-amber-300">
                {[1, 2, 3, 4, 5].map((star) => <FiStar key={star} fill="currentColor" />)}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">“{testimonial.quote}”</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
