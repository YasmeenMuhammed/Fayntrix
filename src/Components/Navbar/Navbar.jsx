// Navbar.jsx — React Router DOM + Tailwind
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import FLogo from './../FLogo';

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio / Work", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="container">
        {/* ── Main Nav ─────────────────────────────────────────────── */}
        <nav className="fixed top-0 left-0 right-0 z-1000 h-16 flex items-center px-9
                      bg-[rgba(8,8,8,0.37)] backdrop-blur-md
                      border-b border-white/6">

          {/* Brand */}
          <NavLink
            to="/"
            className="flex items-center gap-3 no-underline shrink-0"
          >
            <FLogo size={28} />
            <span className="text-white text-2xl font-bold tracking-[0.15em] uppercase
                           font-['Barlow_Condensed',Arial_Narrow,sans-serif]">
              Fayntrix
            </span>
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 mx-auto p-0">
            {links.map(({ label, to }) => (
              <li key={to} className="relative">
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `relative pb-1 text-[13px] font-semibold tracking-[0.18em] uppercase
                   no-underline cursor-pointer transition-colors duration-200 whitespace-nowrap
                   font-['Barlow_Condensed',Arial_Narrow,sans-serif]
                   ${isActive
                      ? "text-[#c8860a]"
                      : "text-white/60 hover:text-white/90"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="underline"
                          className="absolute bottom-0 left-0 w-full h-px bg-[#c8860a]"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Booking Button — desktop */}
          <NavLink
            to="/contact"
            className="hidden lg:inline-flex items-center shrink-0
                     px-5 py-2.5 border border-[#c8860a] text-[#c8860a]
                     text-[11px] font-bold tracking-[0.2em] uppercase no-underline
                     transition-all duration-200 hover:bg-[#c8860a] hover:text-[#0a0a08]
                     font-['Barlow_Condensed',Arial_Narrow,sans-serif]"
          >
            Booking
          </NavLink>

          {/* mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden ml-auto flex flex-col gap-1.25 bg-transparent border-none cursor-pointer p-1"
          >
            <span className={`block w-5.5 h-[1.5px] bg-white/70 transition-all duration-300
                            ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5.5 h-[1.5px] bg-white/70 transition-all duration-300
                            ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5.5 h-[1.5px] bg-white/70 transition-all duration-300
                            ${menuOpen ? "-rotate-45 translate-y-[-6.5px]" : ""}`} />
          </button>
        </nav>

      </div>

      {/* ── Mobile Menu ──────────────────── */}
      <div className={`lg:hidden fixed top-16 left-0 right-0 z-999
                       bg-[rgba(8,8,8,0.37)] border-b border-white/6
                       flex flex-col px-9 gap-5 overflow-hidden
                       transition-all duration-300 ease-in-out
                       ${menuOpen ? "py-6 max-h-125" : "max-h-0 py-0"}`}>

        {links.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-sm font-semibold tracking-[0.18em] uppercase no-underline
               cursor-pointer transition-colors duration-200
               font-['Barlow_Condensed',Arial_Narrow,sans-serif]
               ${isActive ? "text-[#c8860a]" : "text-white/60 hover:text-white"}`
            }
          >
            {label}
          </NavLink>
        ))}

        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-2 w-fit px-5 py-2.5
                     border border-[#c8860a] text-[#c8860a]
                     text-[11px] font-bold tracking-[0.2em] uppercase no-underline
                     transition-all duration-200 hover:bg-[#c8860a] hover:text-[#0a0a08]
                     font-['Barlow_Condensed',Arial_Narrow,sans-serif]"
        >
          Booking
        </NavLink>
      </div>
    </>
  );
}