import { useState } from "react";
import { motion } from "framer-motion";

import { MdPhotoCamera } from "react-icons/md";
import { GiLipstick } from "react-icons/gi";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { HiMegaphone } from "react-icons/hi2";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

// ── Data ───────────────────────────────────────────────────────────────────
const services = [
  {
    id: 1,
    icon: MdPhotoCamera,
    title: "Photography & Videography",
    description:
      "From intimate weddings to large-scale commercial productions, we deliver cinematic imagery that tells your story with precision and artistry.",
    points: [
      "Weddings & Private Events",
      "Corporate & Brand Events",
      "Food & Beverage Shoots",
      "Automotive & Motors",
      "Architecture & Interior",
      "Editorial & Magazine Shoots",
      "Portraits & Lifestyle",
      "TV Commercials & Broadcasts",
      "Media Coverage",
    ],
  },
  {
    id: 2,
    icon: GiLipstick,
    title: "Fashion & Editorial Production",
    description:
      "Where vision meets execution. We craft editorial narratives that elevate brands and redefine visual identity through couture storytelling.",
    points: [
      "Styling & Art Direction",
      "Campaign Shoots",
      "Fashion Catalogs",
      "Model Portfolios",
      "Lookbooks",
    ],
  },
  {
    id: 3,
    icon: PiFilmSlateDuotone,
    title: "Creative Production House",
    description:
      "End-to-end production services — from concept to final cut. We orchestrate every frame with cinematic precision and creative depth.",
    points: [
      "Film & Ad Production",
      "Set Design & Lighting",
      "Color Grading & Sound Design",
      "Post-Production & Editing",
      "Pre-Production & Storyboarding",
    ],
  },
  {
    id: 4,
    icon: HiMegaphone,
    title: "Marketing & Creative Solutions",
    description:
      "Strategic visual communication that transforms brands. We blend creative direction with data-driven marketing for maximum impact.",
    points: [
      "Social Media Management",
      "Brand Identity & Design",
      "Digital Campaigns",
      "Content Strategy",
      "Visual Marketing",
    ],
  },
  {
    id: 5,
    icon: IoBriefcaseOutline,
    title: "B2B & PR Photography",
    description:
      "Professional visual media tailored for agencies, corporations, and PR firms — building brand credibility through powerful imagery.",
    points: [
      "Visual Media for Agencies",
      "Corporate Portraits",
      "Business Events",
      "PR Campaigns",
      "Brand Shoots",
    ],
  },
  {
    id: 6,
    icon: BsStars,
    title: "AI Visual Generation",
    description:
      "Pushing the boundaries of imagination through AI-enhanced visual creation — where technology meets artistry in unprecedented ways.",
    points: [
      "Concept Art & Moodboards",
      "AI-Enhanced Visuals",
      "Virtual Fashion & Models",
      "Product Mockups",
    ],
  },
];


function ServiceCard({ service, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col gap-6 p-7 rounded-2xl cursor-default
                 transition-all duration-300"
      style={{
        background: hovered
          ? "rgba(200,134,10,0.05)"
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(200,134,10,0.55)"
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered
          ? "0 0 32px rgba(200,134,10,0.08)"
          : "none",
      }}
    >
      <div className="flex items-center gap-4">
        {/* Icon box */}
        <div
          className="size-11 rounded-lg flex items-center justify-center
                   transition-all duration-300 shrink-0 "
          style={{
            background: hovered ? "rgba(200,134,10,0.15)" : "rgba(255,255,255,0.06)",
            border: hovered ? "1px solid rgba(200,134,10,0.5)" : "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Icon
            size={20}
            style={{ color: hovered ? "#c8860a" : "rgba(255,255,255,0.75)" }}
            className="transition-colors duration-300"
          />
        </div>

        {/* Title */}
        <h3
          className="text-2xl text-center font-extrabold uppercase tracking-tight leading-tight
                   transition-colors duration-300
                   font-['Barlow_Condensed',Arial_Narrow,sans-serif]"
          style={{ color: hovered ? "#ffffff" : "rgba(255,255,255,0.9)" }}
        >
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-white/40 text-lg leading-relaxed -mt-2">
        {service.description}
      </p>

      {/* Divider */}
      <div
        className="w-full h-px transition-colors duration-300"
        style={{
          background: hovered ? "rgba(200,134,10,0.3)" : "rgba(255,255,255,0.06)",
        }}
      />

      {/* Points list */}
      <ul className="flex flex-col gap-2.5">
        {service.points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-3 text-md tracking-[0.02em]
                        transition-colors duration-300"
            style={{ color: hovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.35)" }}
          >
            {/* Bullet dot */}
            <span
              className="w-1 h-1 rounded-full shrink-0 transition-colors duration-300"
              style={{ background: hovered ? "#c8860a" : "rgba(255,255,255,0.25)" }}
            />
            {point}
          </li>
        ))}
      </ul>

      {/* Amber corner accent on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
        className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-[#c8860a]"
      />
    </motion.div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function AboutCards() {
  return (
    <section
      className="relative z-1 px-8 md:px-16 py-24  "
      style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=EB+Garamond:ital@1&display=swap');
      `}</style>

      {/* ── Section header ──────────────────────────────────────────── */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#c8860a] text-[10px] tracking-[0.32em] uppercase mb-5"
        >
          Core Capabilities
        </motion.p>

        {/* HOW WE HELP heading */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(40px,6vw,76px)] font-extrabold uppercase
                       leading-none tracking-tight"
          >
            <span className="text-white">How We </span>
            <span style={{ color: "#c8860a" }}>Help</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/40 max-w-md mx-auto"
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(14px, 1.4vw, 17px)",
          }}
        >
          Mastery across disciplines, unified by a cinematic aesthetic — tailored
          to every vision, every scale, every story.
        </motion.p>
      </div>

      {/* ── Cards grid ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-325 mx-auto">
        {services.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            delay={i * 0.07}
          />
        ))}
      </div>
    </section>
  );
}