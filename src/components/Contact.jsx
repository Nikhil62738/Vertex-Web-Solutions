import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiUser, FiClipboard, FiCheckCircle, FiSend, FiAlertTriangle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useI18n } from "../i18n/LanguageContext";
import { EMAIL, WHATSAPP_URL, SHEETS_WEBHOOK_URL } from "../data/siteData";
import { fadeLeft, fadeRight, viewportOnce } from "../motionVariants";

const transition06 = { duration: 0.6 };

function buildWhatsAppText(form) {
  const lines = [
    "Hi Vertex Web Solutions,",
    "",
    "Name: " + form.name,
    "Email: " + form.email,
    "Phone: " + form.phone,
    "Project type: " + form.projectType,
    "",
    "Requirement:",
    form.requirement
  ];
  return encodeURIComponent(lines.join("\n"));
}

export default function Contact() {
  const { t } = useI18n();
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    projectType: t.contact.projectTypes[0],
    requirement: ""
  };
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      projectType: form.projectType,
      requirement: form.requirement,
      timestamp: new Date().toISOString(),
      source: "vertex-website",
      language: document.documentElement.getAttribute("lang") || "en"
    };

    try {
      if (SHEETS_WEBHOOK_URL) {
        // "no-cors" + text/plain avoids the Google Apps Script preflight rejection.
        // The response will be opaque but Apps Script will still receive and process the request.
        await fetch(SHEETS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload)
        });
        setStatus("success");
        setForm({ ...initialForm, projectType: t.contact.projectTypes[0] });
      } else {
        // No webhook configured — fall back to WhatsApp prefilled.
        const url = WHATSAPP_URL + "?text=" + buildWhatsAppText(form);
        window.open(url, "_blank", "noopener");
        setStatus("success");
        setForm({ ...initialForm, projectType: t.contact.projectTypes[0] });
      }
    } catch (err) {
      console.error("contact submit failed", err);
      setStatus("error");
    }
  }

  function sendOnWhatsApp() {
    const url = WHATSAPP_URL + "?text=" + buildWhatsAppText(form);
    window.open(url, "_blank", "noopener");
  }

  const submitting = status === "sending";

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container-pad">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{t.contact.kicker}</span>
          <h2 className="display-font mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">{t.contact.title}</h2>
          <p className="mt-4 text-slate-300">{t.contact.description}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={transition06}
            className="glass-card flex flex-col gap-6 rounded-3xl p-6"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-400/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-2xl text-emerald-300">
                <FaWhatsapp />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-400">{t.contact.whatsapp}</div>
                <div className="text-sm font-semibold text-white">+91 XXXXX XXXXX</div>
              </div>
            </a>
            <a
              href={"mailto:" + EMAIL}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-electric/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/20 text-2xl text-electric">
                <FiMail />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-400">{t.contact.email}</div>
                <div className="text-sm font-semibold text-white">{EMAIL}</div>
              </div>
            </a>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-electric/10 to-violet/10 p-5">
              <div className="display-font text-sm font-bold uppercase tracking-[0.18em] text-cyan">Vertex</div>
              <p className="mt-2 text-sm text-slate-200">
                Modern startup studio building websites, web apps and mobile products that grow your business.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={transition06}
            className="glass-card grid gap-4 rounded-3xl p-6"
          >
            <Field icon={<FiUser />} label={t.contact.form.name}>
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder={t.contact.form.namePlaceholder}
                className="focus-ring w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500"
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field icon={<FiMail />} label={t.contact.form.email}>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder={t.contact.form.emailPlaceholder}
                  className="focus-ring w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500"
                />
              </Field>
              <Field icon={<FiPhone />} label={t.contact.form.phone}>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder={t.contact.form.phonePlaceholder}
                  className="focus-ring w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500"
                />
              </Field>
            </div>
            <Field icon={<FiClipboard />} label={t.contact.form.projectType}>
              <select
                value={form.projectType}
                onChange={(e) => update("projectType", e.target.value)}
                className="focus-ring w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white"
              >
                {t.contact.projectTypes.map((opt) => (
                  <option key={opt} value={opt} className="bg-midnight">{opt}</option>
                ))}
              </select>
            </Field>
            <Field icon={<FiClipboard />} label={t.contact.form.requirement}>
              <textarea
                required
                rows={5}
                value={form.requirement}
                onChange={(e) => update("requirement", e.target.value)}
                placeholder={t.contact.form.requirementPlaceholder}
                className="focus-ring w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500"
              />
            </Field>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-violet px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? t.contact.form.sending : t.contact.form.submit} <FiSend />
              </button>
              <button
                type="button"
                onClick={sendOnWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/40"
              >
                <FaWhatsapp className="text-emerald-300" /> {t.contact.form.whatsappCta}
              </button>
            </div>
            {status === "success" && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-200">
                <FiCheckCircle /> {t.contact.form.success}
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">
                <FiAlertTriangle /> {t.contact.form.error}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ icon, label, children }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        {icon} {label}
      </span>
      {children}
    </label>
  );
}
