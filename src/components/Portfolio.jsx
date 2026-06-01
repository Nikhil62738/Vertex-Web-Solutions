import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight, FiCheckCircle, FiX } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/siteData";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="bg-white/[0.025] py-24">
      <div className="container-pad">
        <SectionHeader
          kicker="Portfolio"
          title="Project ideas designed for real business operations"
          description="A sample showcase of platforms and websites Vertex Web Solutions can plan, design, and develop for growing teams."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              role="button"
              tabIndex="0"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedProject(project);
                }
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="glass-card cursor-pointer overflow-hidden rounded-3xl transition hover:-translate-y-2 hover:border-electric/50 focus:outline-none focus:ring-2 focus:ring-cyan/60"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/15 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-xl">
                  Click to view details
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-midnight/80 px-4 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-title"
              className="glass-card max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem]"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.28 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-72 overflow-hidden rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none">
                  <img src={selectedProject.image} alt={selectedProject.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="section-kicker">Project Details</p>
                      <h3 id="project-title" className="mt-3 text-3xl font-black text-white">{selectedProject.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                      aria-label="Close project details"
                    >
                      <FiX />
                    </button>
                  </div>

                  <p className="mt-5 text-base leading-7 text-slate-300">{selectedProject.description}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Outcome</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{selectedProject.outcome}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Estimated Timeline</p>
                      <p className="mt-2 text-2xl font-black text-white">{selectedProject.timeline}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-bold text-white">Key Features</h4>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {selectedProject.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                          <FiCheckCircle className="shrink-0 text-emerald-300" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-bold text-white">Technologies Used</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {selectedProject.link && selectedProject.link !== "#" && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:border-cyan/50 sm:w-auto"
                      >
                        View Live Project <FiArrowRight />
                      </a>
                    )}
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-midnight shadow-glow transition hover:-translate-y-1 sm:w-auto"
                    >
                      Discuss similar project <FiArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
