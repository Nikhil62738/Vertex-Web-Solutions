import { motion } from "framer-motion";

export default function SectionHeader({ kicker, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>}
    </motion.div>
  );
}
