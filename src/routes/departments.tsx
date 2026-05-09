import { createFileRoute, Link } from "@tanstack/react-router";
import { FlaskConical, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import deptHero from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Academic Departments — Guru Nanak Dev University" },
      { name: "description", content: "Explore faculties of sciences, arts, humanities, and business at Guru Nanak Dev University." },
      { property: "og:title", content: "Academic Departments" },
      { property: "og:description", content: "A legacy of intellectual rigor and innovation across our faculties." },
    ],
  }),
  component: Departments,
});

const groups = [
  {
    icon: FlaskConical,
    name: "Faculty of Engineering",
    departments: [
      { name: "Computer Science & Engineering", desc: "Fundamentals of Computer Science and Engineering and modern applications." },
      { name: "Electrical Engineering", desc: "Advancing knowledge in power systems, control engineering, and telecommunications with cutting-edge research facilities." },
    ],
  },
  {
    icon: BookOpen,
    name: "Faculty of Arts & Humanities",
    departments: [
      { name: "Department of Laws", desc: "Indian laws and legal systems studies" },
    ],
  },
  {
    icon: TrendingUp,
    name: "Economics & Business",
    departments: [
      { name: "Commerce", desc: "Providing comprehensive education in accounting, finance, and trade to build robust foundations for corporate leadership." },
      { name: "Management Studies", desc: "Cultivating strategic thinking, organizational behavior expertise, and entrepreneurial skills for modern dynamic markets." },
    ],
  },
];

function Departments() {
  return (
    <SiteShell>
      <section className="bg-surface-alt px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl">Academic Departments</h1>
            <p className="mt-5 max-w-md leading-relaxed text-foreground/70">
              Discover a legacy of intellectual rigor and innovation. Explore
              our diverse faculties and departments dedicated to advancing
              knowledge and preparing the next generation of global leaders.
            </p>
          </div>
          <img src={deptHero} alt="Department building" loading="lazy" width={1024} height={768} className="w-full rounded-md object-cover" />
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1280px] space-y-16">
          {groups.map((g) => (
            <div key={g.name}>
              <div className="flex items-center gap-3 border-b border-gold/40 pb-4">
                <g.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <h2 className="font-serif text-2xl md:text-3xl">{g.name}</h2>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {g.departments.map((d) => (
                  <div key={d.name} className="relative rounded-md border border-border bg-card p-6">
                    <span className="absolute inset-x-0 top-0 h-px bg-gold/70" />
                    <h3 className="font-serif text-xl">{d.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">{d.desc}</p>
                    <Link to="/faculty" className="mt-5 inline-flex items-center gap-2 label-sm text-gold hover:text-primary">
                      View Faculty Directory <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
