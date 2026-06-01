import { motion } from "framer-motion";
import { FiArrowRight, FiMessageCircle, FiStar } from "react-icons/fi";
import { stats } from "../data/siteData";

const floaters = [
  "Website Development",
  "Mobile Apps",
  "E-Commerce",
  "SEO Ready",
  "Fast Launch"
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-hero-grid bg-[length:54px_54px] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <motion.div
        className="absolute left-[8%] top-28 h-72 w-72 rounded-full bg-electric/30 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 70, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-36 h-80 w-80 rounded-full bg-violet/30 blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, 90, 0], scale: [1, 0.86, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-pad relative grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 backdrop-blur-xl">
            <FiStar className="text-cyan" /> Modern startup agency for websites and apps
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="gradient-text">Turning Ideas Into Digital Products</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We build modern websites, web applications, and mobile apps that help businesses grow online.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#offer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-midnight shadow-glow transition hover:-translate-y-1 hover:bg-slate-100"
            >
              Get Free Website <FiArrowRight />
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan/60"
            >
              <FiMessageCircle /> Contact on WhatsApp
            </a>
          </div>
          <div className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-4">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-5">
            <div className="rounded-[1.4rem] border border-white/10 bg-ink/80 p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">Vertex Launch Console</p>
                  <h3 className="text-xl font-bold text-white">Growth-ready build</h3>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">Live</span>
              </div>
              <div className="grid gap-4">
                {["Discovery", "Design", "Development", "Launch"].map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-2xl bg-white/[0.055] p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-violet text-sm font-black">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{step}</p>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
                          initial={{ width: 0 }}
                          animate={{ width: `${55 + index * 13}%` }}
                          transition={{ delay: 0.5 + index * 0.14, duration: 0.9 }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {floaters.map((item, index) => (
            <motion.div
              key={item}
              className="absolute hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-xl lg:block"
              style={{
                top: `${8 + index * 18}%`,
                left: index % 2 === 0 ? "-6%" : "72%"
              }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
