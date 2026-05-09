import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Music2, Palette, Drama, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import eventsHero from "@/assets/events-hero.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Cultural Events — Guru Nanak Dev University" },
      { name: "description", content: "Festivals, performances, exhibitions, and cultural celebrations on campus." },
      { property: "og:title", content: "Cultural Events" },
      { property: "og:description", content: "A vibrant calendar of cultural life at Guru Nanak Dev University." },
    ],
  }),
  component: Events,
});

const events = [
  { date: "Mar 18", title: "Example Event", venue: "Central Lawns", icon: Sparkles, tag: "Festival" },
  
];

function Events() {
  return (
    <SiteShell>
      <section className="relative">
        <img src={eventsHero} alt="Campus festival at dusk" width={1600} height={900} className="h-[420px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/55 to-primary-deep/30" />
        <div className="absolute inset-0 flex items-center px-6 lg:px-12">
          <div className="mx-auto w-full max-w-[1280px] text-white">
            <span className="label-sm text-gold">Calendar</span>
            <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">Cultural Events</h1>
            <p className="mt-4 max-w-xl text-white/80">
              A living calendar of festivals, performances, and exhibitions —
              where tradition meets contemporary creative expression.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <article key={e.title} className="group relative overflow-hidden rounded-md border border-border bg-card p-6 transition-shadow hover:shadow-[0_8px_30px_-12px_rgb(0_0_0_/_0.12)]">
                <span className="absolute inset-x-0 top-0 h-px bg-gold/70" />
                <div className="flex items-start justify-between">
                  <div className="rounded border border-border bg-muted/40 px-3 py-2 text-center">
                    <p className="font-serif text-xl text-primary-deep leading-none">{e.date.split(" ")[1]}</p>
                    <p className="mt-1 label-sm text-gold">{e.date.split(" ")[0]}</p>
                  </div>
                  <e.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
                <p className="mt-6 label-sm text-foreground/55">{e.tag}</p>
                <h3 className="mt-2 font-serif text-xl leading-snug">{e.title}</h3>
                <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm text-foreground/65">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  {e.venue}
                </div>
              </article>
            ))}
          </div>

         
        </div>
      </section>
    </SiteShell>
  );
}
