import { Link } from "@tanstack/react-router";
import { Search, Menu, X, Landmark } from "lucide-react";
import { useState } from "react";
import gndu from "@/assets/gndu.png"

const nav = [
  { to: "/", label: "Home" },
  { to: "/departments", label: "Departments" },
  { to: "/faculty", label: "Faculty" },
  { to: "https://collegeadmissions.gndu.ac.in/mics/rpcard.aspx", label: "Results" },
  { to: "/events", label: "Cultural Events" },
  { to: "/admissions", label: "Admissions" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-8xl py-2 items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex h-full overflow-hidden items-center gap-2 text-primary-deep">
          <img className=" h-full" src={gndu} alt=""  />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to as any}
              className="label-sm text-foreground/70 transition-colors hover:text-primary"
              activeProps={{ className: "label-sm text-primary border-b-2 border-gold pb-1" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Search" className="hidden h-9 w-9 items-center justify-center rounded-md text-foreground/70 hover:bg-muted lg:flex">
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/admissions"
            className="hidden rounded-md bg-primary-deep px-4 py-2 label-sm text-primary-foreground transition-colors hover:bg-primary lg:inline-flex"
          >
            Apply Now
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to as any}
                onClick={() => setOpen(false)}
                className="label-sm border-b border-border py-3 text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-md bg-primary-deep px-4 py-2 text-center label-sm text-primary-foreground"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
