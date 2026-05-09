import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, FlaskConical } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import heroBuilding from "@/assets/gndu.jpeg";
import dept from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guru Nanak Dev University — Empowering Minds, Shaping the Future" },
      { name: "description", content: "A legacy of academic excellence rooted in tradition. Discover programs, faculty, and research at Guru Nanak Dev University." },
      { property: "og:title", content: "Guru Nanak Dev University" },
      { property: "og:description", content: "Empowering Minds, Shaping the Future." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "588 ", label: "Crore Academic Expenditures" },
  { value: "A++", label: "NAAC Accreditation" },
  { value: "40k+", label: "Alumni Network" },
  { value: "17262", label: "No. of publications" },
];

function Home() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="px-6 pt-6 lg:px-12">
        <div className="mx-auto w-full">
          <div className="relative overflow-hidden rounded-md">
            <img
              src={heroBuilding}
              alt="University main building at golden hour"
              width={1920}
              height={1080}
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-8 text-white md:px-14">
                <span className="inline-block bg-[#7a5a14] px-3 py-1 label-sm text-white">
                  Admissions Open 2026
                </span>
                <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-6xl">
                  Empowering Minds, Shaping the Future
                </h1>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
                  A legacy of academic excellence rooted in tradition. Discover
                  an intellectual community dedicated to rigorous research,
                  global innovation, and profound student success.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/departments"
                    className="rounded-md bg-[#7a5a14] px-6 py-3 label-sm text-white hover:bg-[#8d6a1d]"
                  >
                    Explore Programs
                  </Link>
                  {/* <a
                    href="https://rcgsp.gndu.ac.in/index.php/admission-notice-2/"
                    className="rounded-md border border-white px-6 py-3 label-sm text-white hover:bg-white/10"
                  >
                    Admission notices
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface-alt mt-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-px bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface-alt px-6 py-12 text-center">
              <p className="font-serif text-4xl text-primary-deep md:text-5xl">{s.value}</p>
              <p className="mt-3 label-sm text-foreground/65">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discover */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
                Discover Your Path
              </h2>
              <p className="mt-4 text-foreground/70">
                Navigate our comprehensive ecosystem of knowledge, designed to
                foster deep learning and interdisciplinary discovery.
              </p>
            </div>
            <Link to="/departments" className="inline-flex items-center gap-2 label-sm text-gold hover:text-primary">
              View Full Directory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 w-full grid gap-6 lg:grid-cols-2">
            <Link to="/departments" className="group relative block h-110 overflow-hidden rounded-md">
              <img src={dept} alt="dept reading hall" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-primary-deep via-primary-deep/40 to-transparent w-full" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="h-px w-full bg-gold/70" />
                <p className="mt-6 label-sm text-gold">Explore</p>
                <h3 className="mt-2 font-serif text-3xl text-white">Academic Departments</h3>
              </div>
            </Link>

            <div className="grid gap-6">
              <FeatureCard
                icon={<GraduationCap className="h-6 w-6" />}
                title="Distinguished Faculty"
                desc="Learn from world-renowned scholars and industry leaders dedicated to mentorship."
                href="/faculty"
                cta="Meet the Experts"
              />
              <FeatureCard
                icon={<FlaskConical className="h-6 w-6" />}
                title="Research & Innovation"
                desc="Pioneering solutions to global challenges through cutting-edge facilities."
                href="/departments"
                cta="Discover Hubs"
              />
            </div>
          </div>
        </div>
      </section>
      <iframe className="w-full min-h-75" loading="lazy" src="https://maps.google.com/maps?q=GNDU%20Regional%20Campus%20Gurdaspur&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="GNDU Regional Campus Gurdaspur" aria-label="GNDU Regional Campus Gurdaspur"></iframe>
    </SiteShell>
  );
}

function FeatureCard({ icon, title, desc, href, cta }: { icon: React.ReactNode; title: string; desc: string; href: string; cta: string }) {
  return (
    <Link to={href as any} className="group relative block rounded-md border border-border bg-card p-8 transition-shadow hover:shadow-[0_8px_30px_-12px_rgb(0_0_0_/_0.12)]">
      <span className="absolute inset-x-0 top-0 h-px bg-gold/60" />
      <div className="text-primary-deep">{icon}</div>
      <h3 className="mt-5 font-serif text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/70">{desc}</p>
      <span className="mt-5 inline-flex items-center gap-2 label-sm text-gold group-hover:text-primary">
        {cta} <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
