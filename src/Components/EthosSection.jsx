
import { useState } from "react";
import { motion } from "framer-motion";
import { PiFilmSlateDuotone } from "react-icons/pi";
import FLogo from "./FLogo";

// ── helpers ────────────────────────────────────────────────────────────────
const slideUp = (delay = 0) => ({
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

// ── Image card with scale + brightness on hover ────────────────────────────
function ImageCard({ src, alt, className = "", delay = 0 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      {...slideUp(delay)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        animate={{
          scale: hovered ? 1.08 : 1,
          filter: hovered
            ? "brightness(1.25) contrast(1.05)"
            : "brightness(0.85) contrast(1)",
        }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Subtle amber glow border on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1.5px rgba(200,134,10,0.55)" }}
      />

      {/* Inner top-left glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 0.35 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,134,10,0.6) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </motion.div>
  );
}

// ── Studio info card ───────────────────────────────────────────────────────
function StudioCard({ delay = 0 }) {
  return (
    <motion.div
      {...slideUp(delay)}
      className="rounded-xl border border-white/[0.07] bg-white/3
                 p-7 flex flex-col gap-4 h-full"
    >
      {/* F Logo icon */}
      <div className="w-12 h-12 rounded-lg border border-[#c8860a]/40
                      bg-[#c8860a]/10 flex items-center justify-center">
        <FLogo size={26} color="#c8860a" />
      </div>

      <div>
        <h4 className="text-white text-[17px] font-extrabold uppercase tracking-tight mb-3
                       font-['Barlow_Condensed',Arial_Narrow,sans-serif]">
          The Studio
        </h4>
        <p className="text-white/45 text-[13px] leading-relaxed">
          A 5,000 sq ft creative sanctuary equipped with state-of-the-art cinematic
          tools, designed to bring the most ambitious visions to life.
        </p>
      </div>

      {/* Decorative icon row */}
      <div className="mt-auto flex items-center gap-2 pt-4 border-t border-white/6">
        <PiFilmSlateDuotone size={16} className="text-[#c8860a]/60" />
        <span className="text-white/25 text-[9px] tracking-[0.22em] uppercase">
          Fayntrix Studio — Est. 2018
        </span>
      </div>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function EthosSection() {
  return (
    
    <section
      className="relative z-1 px-8 md:px-16 py-24 bg-[#c8860a]/2"
      style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=EB+Garamond:ital,wght@0,400;1,400&display=swap');
      `}</style>

      <div className="max-w-325 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── LEFT — text ──────────────────────────────────────────── */}
        <div className="flex flex-col justify-center">

          {/* Label */}
          <motion.p
            {...slideUp(0)}
            className="text-[#c8860a] text-[10px] tracking-[0.32em] uppercase mb-6"
          >
            Our Story
          </motion.p>

          {/* Heading */}
          <div className="overflow-hidden mb-1">
            <motion.h2
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(40px,5.5vw,72px)] font-extrabold uppercase
                         leading-none tracking-tight text-white"
            >
              The Art Of
            </motion.h2>
          </div>

          <div className="overflow-hidden mb-1">
            <motion.h2
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(40px,5.5vw,72px)] font-extrabold uppercase
                         leading-none tracking-tight"
              style={{ color: "#c8860a" }}
            >
              Visual
            </motion.h2>
          </div>

          <div className="overflow-hidden mb-10">
            <motion.h2
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.21, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(40px,5.5vw,72px)] font-extrabold uppercase
                         leading-none tracking-tight text-white"
            >
              Storytelling
            </motion.h2>
          </div>

          {/* Body text */}
          <motion.div {...slideUp(0.32)} className="space-y-5 mb-12 max-w-150">
            <p className="text-white/55 text-[20px] leading-[1.8] font-bold">
              Discover the magic of Fayntrix Media Production, a world
              built on passion, vision, and endless creativity. Our mission
              is to help brands grow by blending creativity with cuttingedge technology. We turn visions into visual impact, crafting
              designs that inspire, engage, and deliver results.
            </p>
            <p className="text-white/55 text-[20px] leading-[1.8] font-bold">
              Every
              project we take on is a chance to innovate, challenge the
              ordinary, and create something truly remarkable.
              Collaboration is at the heart of what we do, and we build
              strongpartnerships with our clients to bringideas to life
            </p>
          </motion.div>

          {/* Established line */}
          <motion.div
            {...slideUp(0.42)}
            className="flex items-center gap-4"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="w-12 h-px bg-[#c8860a] origin-left"
            />
            <span className="text-white/30 text-[10px] tracking-[0.28em] uppercase">
              Established 2022
            </span>
          </motion.div>
        </div>

        {/* ── RIGHT — image grid ────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-3">

          {/* Top left — portrait, tall */}
          <ImageCard
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=80"
            alt="Portrait"
            className="col-span-1 row-span-1"
            style={{ aspectRatio: "3/4" }}
            delay={0.1}
          />

          {/* Top right — abstract/warm */}
          <ImageCard
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80"
            alt="Abstract warm"
            className="col-span-1"
            delay={0.18}
          />


          {/* Bottom left — camera/BTS */}
          <ImageCard
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=700&q=80"
            alt="Behind the scenes"
            className="col-span-1"
            delay={0.26}
          />


          {/* Bottom right — studio card */}
          <StudioCard delay={0.34} />
        </div>

      </div>

    </section>
    
  );
}