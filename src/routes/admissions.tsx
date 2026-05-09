import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Guru Nanak Dev University" },
      { name: "description", content: "Apply to Guru Nanak Dev University. Admissions open for 2024." },
      { property: "og:title", content: "Admissions 2024" },
      { property: "og:description", content: "Begin your journey at Guru Nanak Dev University." },
    ],
  }),
  component: Admissions,
});

function Admissions() {
  return (
    <SiteShell>
      <section className="flex justify-center items-center bg-surface-alt px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <span className="inline-block bg-primary-deep px-3 py-1 label-sm text-primary-foreground">Admissions Open 2026</span>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl">Begin Your Journey</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-foreground/70">
            Join an intellectual community committed to academic excellence,
            research, and global citizenship. Applications for the 2026 cohort
            are now open across all programs.
          </p>
        </div>
      </section>

      <section className="flex justify-center items-center px-6 py-20 lg:px-12">
        <div className="flex justify-center items-center mx-auto  max-w-7xl">
        

          <form className="rounded-md border border-border bg-card p-8">
            <h3 className="font-serif text-2xl mb-5">Request Admission Information</h3>
            <p className="mt-2 text-sm text-foreground/65"></p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field label="Full Name" placeholder="Jaspreet Singh" />
              <Field label="Email" placeholder="you@email.com" type="email" />
              <Field label="Phone" placeholder="+91 ..." />
              <Field label="Program of Interest" placeholder="Computer Science" />
            </div>
            <div className="mt-4">
              <label className="label-sm text-foreground/60">Message</label>
              <textarea rows={4} className="mt-1.5 w-full rounded border border-input bg-card px-3 py-2 text-sm outline-none focus:border-gold" placeholder="Tell us about your interests..." />
            </div>
            <button type="button" className="mt-6 w-full rounded-md bg-primary-deep py-3 label-sm text-primary-foreground hover:bg-primary">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="label-sm text-foreground/60">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-1.5 w-full rounded border border-input bg-card px-3 py-2 text-sm outline-none focus:border-gold" />
    </div>
  );
}
