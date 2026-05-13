// pages/Home.jsx
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlay, HiPause } from "react-icons/hi2";
import cameraImg from "/public/Wallpaper.jpeg";
import videoImg from "../../assets/Camera.png";
import PortfolioGrid from "../../Components/PortfolioGrid";

// ── animation  ──────────────────────────────────────────────────────
const slideUp = (delay = 0) => ({
  initial: { y: 80, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

// ── Video Card ─────────────────────────────────────────────────────────────
const VIDEO_SRC = "/public/copy_56EEAB58-F6AD-4B46-8452-BC91DB4E4162.mov";

function VideoCard() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, rotateY: -8 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{
        width: "clamp(300px, 38vw, 520px)",
        aspectRatio: "16/10",
        boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
      onClick={togglePlay}
      whileHover={{ scale: 1.02 }}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        className="w-full h-full object-cover"
        loop
        playsInline
        poster={cameraImg}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Play / Pause button — center */}
      <AnimatePresence>
        {(!playing || hovered) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center
                         bg-white/15 backdrop-blur-sm border border-white/30
                         hover:bg-[#c8860a]/80 hover:border-[#c8860a] transition-all duration-300"
            >
              {playing
                ? <HiPause size={22} className="text-white" />
                : <HiPlay size={22} className="text-white ml-1" />
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between">
        <div>
          <p className="text-white/50 text-[9px] tracking-[0.22em] uppercase mb-1">
            Showreel 2024
          </p>
          <p className="text-white text-[15px] font-bold tracking-tight
                        font-['Barlow_Condensed',Arial_Narrow,sans-serif]">
            The Director's Cut
          </p>
        </div>
      </div>

      {/* Thin amber border glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(200,134,10,0.5)" }}
      />
    </motion.div>
  );
}

// ── Main Hero ──────────────────────────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="relative min-h-screen flex items-center z-1
                 px-8 md:px-16 lg:px-24 w-full"
        style={{
          fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
          backgroundImage: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
      url(${videoImg})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=EB+Garamond:ital@1&display=swap');
      `}</style>


        {/* ── Content ───────────────────────────────────────────────── */}
        <div className="relative z-1 w-full flex flex-col lg:flex-row
                      items-center justify-between gap-12 pt-20">

          {/* LEFT — text */}
          <div className="flex-1 max-w-135">

            {/* CRAFTING */}
            <div className="overflow-hidden">
              <motion.h1
                {...slideUp(0.05)}
                className="text-[clamp(52px,8vw,110px)] font-extrabold uppercase
                         leading-none tracking-tight text-white"
              >
                Crafting
              </motion.h1>
            </div>

            {/* CINEMATIC — amber */}
            <div className="overflow-hidden">
              <motion.h1
                {...slideUp(0.13)}
                className="text-[clamp(52px,8vw,110px)] font-extrabold uppercase
                         leading-none tracking-tight"
                style={{ color: "#c8860a" }}
              >
                Cinematic
              </motion.h1>
            </div>

            {/* REALITIES */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                {...slideUp(0.21)}
                className="text-[clamp(52px,8vw,110px)] font-extrabold uppercase
                         leading-none tracking-tight text-white"
              >
                Realities
              </motion.h1>
            </div>

            {/* Quote with left border */}
            <motion.div
              {...fadeIn(0.45)}
              className="flex gap-4 mb-10 max-w-90"
            >
              <div className="w-0.75 bg-[#c8860a] shrink-0 rounded-full self-stretch" />
              <p
                className="text-white/50 leading-relaxed"
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(13px, 1.3vw, 16px)",
                  letterSpacing: "0.01em",
                }}
              >
                Where high-end fashion meets narrative filmmaking. We don't just
                capture moments; we direct masterpieces.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...fadeIn(0.58)}
              className="flex flex-wrap items-center gap-4"
            >
              {/* VIEW WORK — solid amber */}
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "#a06a00" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                onClick={() => navigate("/portfolio")}
                className="px-7 py-4 bg-[#c8860a] text-black text-[11px] font-bold
                         tracking-[0.22em] uppercase cursor-pointer border-0
                         transition-colors duration-200"
              >
                View Work
              </motion.button>

              {/* BOOK A SHOOT — ghost */}
              <motion.button
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.7)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                onClick={() => navigate("/booking")}
                className="flex items-center gap-3 px-7 py-4 bg-transparent
                         border border-white/40 text-white text-[11px] font-bold
                         tracking-[0.22em] uppercase cursor-pointer
                         transition-all duration-200"
              >
                Book A Shoot
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT — video card */}
          <div className="shrink-0">
            <VideoCard />
          </div>
        </div>

        {/* ── Scroll indicator ──────────────────────────────────────── */}
        <motion.div
          {...fadeIn(1.1)}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/25 text-[9px] tracking-[0.28em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-linear-to-b from-[#c8860a]/60 to-transparent"
          />
        </motion.div>
      </section>
      <PortfolioGrid />
    </>

  );
}