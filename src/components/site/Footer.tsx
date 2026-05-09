import { Link } from "@tanstack/react-router";
import { Landmark } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white/85">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-16 md:grid-cols-3 lg:px-12">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-semibold text-white">
              Guru Nanak Dev University
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Empowering minds and shaping futures through rigorous academic
            inquiry and a commitment to societal progress.
          </p>
        </div>

        <div>
          <p className="label-sm text-gold">Resources</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/departments" className="hover:text-gold">Departments</Link></li>
            <li><Link to="/faculty" className="hover:text-gold">Alumni</Link></li>
            <li><Link to="/admissions" className="hover:text-gold">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <p className="label-sm text-gold">Legal</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/50 lg:px-12">
          © 2026 Guru Nanak Dev University. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
