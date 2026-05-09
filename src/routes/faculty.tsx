import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Eraser, LayoutGrid, List, ChevronLeft, ChevronRight, User } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import pic1 from "@/assets/teachers/1.jpg";
import pic2 from "@/assets/teachers/2.png";
import pic3 from "@/assets/teachers/3.jpg";
import pic4 from "@/assets/teachers/4.jpg";
import pic4p from "@/assets/teachers/4.png";
import pic5 from "@/assets/teachers/5.png";
import pic6 from "@/assets/teachers/6.jpg";
import pic7 from "@/assets/teachers/7.png";
import pic8 from "@/assets/teachers/8.png";
import pic9 from "@/assets/teachers/9.jpg";
import pic10 from "@/assets/teachers/10.png";
import pic11 from "@/assets/teachers/11.jpg";
import pic12 from "@/assets/teachers/12.png";
import pic13 from "@/assets/teachers/13.png";
import pic14 from "@/assets/teachers/14.png";
import pic15 from "@/assets/teachers/15.png";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty Directory — Guru Nanak Dev University" },
      { name: "description", content: "Discover our distinguished faculty members, renowned researchers, and dedicated educators." },
      { property: "og:title", content: "Faculty Directory" },
      { property: "og:description", content: "Distinguished faculty shaping the future through academic excellence." },
    ],
  }),
  component: Faculty,
});

type F = {
  name: string;
  designation: "Professor" | "Associate Professor" | "Assistant Professor";
  department: string;
  interests: string;
  photo?: any;
  accent: string;
};

const FACULTY: F[] = [
  { name: "Dr. Taqdir", designation: "Assistant Professor", department: "Department of Computer Science", interests: "Image Processing, Pattern Recognition, Computer Vision.", accent: "var(--gold)", photo: pic8 },
  { name: "-", designation: "Assistant Professor", department: "Department of Commerce", interests: "-", accent: "#a87e7e", photo: pic2 },
  { name: "Dr. Satbir", designation: "Assistant Professor", department: "Department of Electronics Engineering", interests: "Nanotechnology, Semiconductor Physics, Microelectronics.", accent: "#dab1b1", photo: pic3 },
  { name: "Dr. Mini Singh Ahuja", designation: "Assistant Professor", department: "Department of Computer Science", interests: "Data Structures, Algorithms, Software Engineering.", accent: "var(--gold)", photo: pic4 },
  { name: "Dr. Amitpal", designation: "Assistant Professor", department: "Department of Computer Science", interests: "Computer Algebraic Topology, Differential Geometry, Mathematical Modeling.", accent: "#a87e7e", photo: pic5 },
  { name: "Dr. Shergill Singh", designation: "Assistant Professor", department: "Department of Laws", interests: "Organic Synthesis, Green Chemistry, Catalysis, Medicinal Chemistry.", accent: "#dab1b1", photo: pic6 },
  { name: "Dr. Harjot kaur", designation: "Assistant Professor", department: "Department of Computer Science", interests: "Machine Learning, Data Mining, Artificial Intelligence.", accent: "var(--gold)", photo: pic7 },
  { name: "Dr. Shashi Bhushan Rana", designation: "Associate Professor", department: "Department of Electronics Engineering", interests: "Antenna Design, Microwave Engineering, Electromagnetic Compatibility.", accent: "#a87e7e", photo: pic10 },
  { name: "Dr. Rishi Raj Sharma", designation: "Professor", department: "Department of Business Management", interests: "Strategic Management, Organizational Behavior, Human Resource Management.", accent: "#dab1b1", photo: pic11 },
];

const DEPARTMENTS = ["All Departments", ...Array.from(new Set(FACULTY.map((f) => f.department)))];
const DESIGNATIONS = ["All Designations", "Professor", "Associate Professor", "Assistant Professor"] as const;

function Faculty() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("All Departments");
  const [desg, setDesg] = useState<(typeof DESIGNATIONS)[number]>("All Designations");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    return FACULTY.filter((f) => {
      if (dept !== "All Departments" && f.department !== dept) return false;
      if (desg !== "All Designations" && f.designation !== desg) return false;
      if (q && !`${f.name} ${f.interests} ${f.department}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, dept, desg]);

  return (
    <SiteShell>
      <section className="bg-surface-alt px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1280px] text-center">
          <h1 className="font-serif text-4xl md:text-5xl">Faculty Directory</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-foreground/70">
            Discover our distinguished faculty members, renowned researchers,
            and dedicated educators who are shaping the future through academic
            excellence and innovation.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12">
        <div className="mx-auto -mt-10 max-w-[1280px] rounded-md border border-border bg-card p-5 shadow-[0_4px_20px_-12px_rgb(0_0_0_/_0.15)]">
          <div className="grid gap-4 md:grid-cols-[1.5fr_1fr_1fr_auto]">
            <div>
              <label className="label-sm text-foreground/60">Search Faculty</label>
              <div className="mt-1.5 flex items-center gap-2 rounded border border-input px-3 py-2 focus-within:border-gold">
                <Search className="h-4 w-4 text-foreground/40" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name, expertise, or keyword..." className="w-full bg-transparent text-sm outline-none" />
              </div>
            </div>
            <Select label="Department" value={dept} onChange={setDept} options={DEPARTMENTS} />
            <Select label="Designation" value={desg} onChange={(v) => setDesg(v as any)} options={DESIGNATIONS as unknown as string[]} />
            <div className="flex items-end">
              <button onClick={() => { setQ(""); setDept("All Departments"); setDesg("All Designations"); }} className="inline-flex items-center gap-2 rounded border border-input px-4 py-2.5 label-sm text-foreground/70 hover:border-gold">
                <Eraser className="h-4 w-4" /> Clear
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <p className="text-sm text-foreground/70">
              Showing <strong className="text-foreground">1–{filtered.length}</strong> of {filtered.length} Faculty Members
            </p>
            <div className="flex gap-1 rounded border border-border p-1">
              <button onClick={() => setView("grid")} className={`rounded p-1.5 ${view === "grid" ? "bg-muted text-primary-deep" : "text-foreground/50"}`}>
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button onClick={() => setView("list")} className={`rounded p-1.5 ${view === "list" ? "bg-muted text-primary-deep" : "text-foreground/50"}`}>
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className={view === "grid" ? "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "mt-8 flex flex-col gap-3"}>
            {filtered.map((f) => view === "grid" ? <FacultyCard key={f.name} f={f} /> : <FacultyRow key={f.name} f={f} />)}
          </div>

      
        </div>
      </section>
    </SiteShell>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="label-sm text-foreground/60">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="mt-1.5 w-full rounded border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-gold">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function FacultyCard({ f }: { f: F }) {
  return (
    <div className="relative overflow-hidden rounded-md border border-border bg-card pb-1">
      <span className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: f.accent }} />
      <div className="flex flex-col items-center px-6 pt-10 pb-5 text-center">
        {f.photo ? (
          <img src={f.photo} alt={f.name} loading="lazy" width={120} height={120} className="h-28 w-28 rounded object-cover" />
        ) : (
          <div className="flex h-28 w-28 items-center justify-center rounded bg-muted text-foreground/40">
            <User className="h-10 w-10" strokeWidth={1.2} />
          </div>
        )}
        <h3 className="mt-5 font-serif text-xl">{f.name}</h3>
        <p className="mt-1 label-sm text-gold">{f.designation}</p>
        <p className="mt-1 text-sm text-foreground/70">{f.department}</p>
      </div>
      <div className="border-t border-border px-6 py-5">
        <p className="label-sm text-foreground/60">Research Interests:</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70 line-clamp-2">{f.interests}</p>
      </div>
     
    </div>
  );
}

function FacultyRow({ f }: { f: F }) {
  return (
    <div className="flex items-center gap-5 rounded-md border border-border bg-card p-4">
      {f.photo ? <img src={f.photo} alt={f.name} className="h-16 w-16 rounded object-cover" /> : <div className="flex h-16 w-16 items-center justify-center rounded bg-muted"><User className="h-6 w-6 text-foreground/40" /></div>}
      <div className="flex-1">
        <h3 className="font-serif text-lg">{f.name}</h3>
        <p className="text-xs text-foreground/60">{f.designation} · {f.department}</p>
      </div>
      <button className="label-sm text-gold hover:text-primary">View →</button>
    </div>
  );
}

function PageBtn({ label, icon, active }: { label?: string; icon?: React.ReactNode; active?: boolean }) {
  return (
    <button className={`inline-flex h-9 min-w-9 items-center justify-center rounded border px-2 text-sm ${active ? "border-primary-deep bg-primary-deep text-primary-foreground" : "border-border bg-card text-foreground/70 hover:border-gold"}`}>
      {icon ?? label}
    </button>
  );
}
