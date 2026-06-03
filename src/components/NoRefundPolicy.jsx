import { FiAlertCircle, FiArrowLeft, FiCheckCircle } from "react-icons/fi";

export default function NoRefundPolicy() {
  return (
    <main className="container-pad min-h-screen pt-32 pb-20">
      <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-white">
        <FiArrowLeft /> Back to home
      </a>

      <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="section-kicker">Policy</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            No Refund Policy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            No refund will be provided after 24 hours from the payment time.
          </p>
        </div>

        <div className="glass-card rounded-[2rem] p-6 sm:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet/20 text-2xl text-cyan">
            <FiAlertCircle />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-white">No refund after 24 hours</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Refund requests are accepted only within 24 hours after payment. Once the 24-hour period is complete, project planning, design, development, support, or resource allocation may already begin, so refunds are not available.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Refund requests must be submitted within 24 hours of payment.",
              "No refund will be issued after 24 hours.",
              "Domain, hosting, third-party tools, and external service charges are non-refundable.",
              "Project revisions and support continue as per the agreed scope."
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm leading-6 text-slate-300">
                <FiCheckCircle className="mt-1 shrink-0 text-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href="mailto:vertexwebsolutions@gmail.com"
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 text-sm font-black text-midnight shadow-glow transition hover:-translate-y-1 sm:w-auto"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}
