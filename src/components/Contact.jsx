import { useState } from "react";
import { FiMail, FiMessageCircle, FiSend } from "react-icons/fi";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="container-pad py-24">
      <SectionHeader
        kicker="Contact"
        title="Tell us what you want to build"
        description="Share your requirement and we will contact you shortly with the next step."
      />
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div className="grid gap-4">
          <a href="https://wa.me/91XXXXXXXXXX" className="glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan/45">
            <FiMessageCircle className="text-2xl text-cyan" />
            <h3 className="mt-4 font-bold text-white">WhatsApp</h3>
            <p className="mt-2 break-all text-sm text-slate-300">https://wa.me/91XXXXXXXXXX</p>
          </a>
          <a href="mailto:vertexwebsolutions@gmail.com" className="glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan/45">
            <FiMail className="text-2xl text-cyan" />
            <h3 className="mt-4 font-bold text-white">Email</h3>
            <p className="mt-2 break-all text-sm text-slate-300">vertexwebsolutions@gmail.com</p>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Name
              <input required name="name" className="focus-ring h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-500" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Email
              <input required type="email" name="email" className="focus-ring h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-500" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Phone Number
              <input required name="phone" className="focus-ring h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-500" placeholder="+91" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Project Type
              <select name="projectType" className="focus-ring h-12 rounded-xl border border-white/10 bg-midnight px-4 text-white">
                <option>Website Development</option>
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>E-Commerce Website</option>
                <option>Maintenance</option>
              </select>
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
            Project Requirement
            <textarea
              required
              name="requirement"
              rows="5"
              className="focus-ring rounded-xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-500"
              placeholder="Tell us about your business, goals, timeline, and required features."
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-midnight shadow-glow transition hover:-translate-y-1 sm:w-auto"
          >
            Send Requirement <FiSend />
          </button>
          {submitted && (
            <p className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-200">
              Thank you. We will contact you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
