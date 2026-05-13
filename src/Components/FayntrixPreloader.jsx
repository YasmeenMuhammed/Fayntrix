import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FLogo() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="150"
      height="150"
      style={{
        overflow: "visible",
        filter: "drop-shadow(0 0 28px rgba(200,134,10,0.5))",
      }}
    >
      <motion.path
        d="M22 8 L22 92 M22 8 L78 8 M22 50 L66 50"
        stroke="#c8860a"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="square"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
      />
      <motion.path
        d="M30 16 L30 84 M30 16 L70 16 M30 44 L60 44"
        stroke="#c8860a"
        strokeWidth="2"
        fill="none"
        strokeLinecap="square"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1], delay: 1.0 }}
      />
    </svg>
  );
}

export default function FayntrixPreloader({ onComplete }) {
  const [phase, setPhase] = useState("f");
  const [progress, setProgress] = useState(0);
  const [counter, setCounter] = useState(0);

  // Animate counter with requestAnimationFrame — plain number, no MotionValue
  function animateCounter(from, to, duration) {
    const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setCounter(Math.round(from + (to - from) * eased));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("text"), 1800),
      setTimeout(() => setPhase("loading"), 2500),

      setTimeout(() => { setProgress(22); animateCounter(0, 22, 400); }, 2700),
      setTimeout(() => { setProgress(48); animateCounter(22, 48, 500); }, 3200),
      setTimeout(() => { setProgress(73); animateCounter(48, 73, 600); }, 3800),
      setTimeout(() => { setProgress(90); animateCounter(73, 90, 500); }, 4300),
      setTimeout(() => { setProgress(100); animateCounter(90, 100, 400); }, 4800),

      setTimeout(() => setPhase("done"), 5100),
      setTimeout(() => setPhase("exit"), 6400),
      setTimeout(() => onComplete?.(), 7200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const word = "FAYNTRIX";

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#181812",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            overflow: "hidden",
            fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
          }}
        >
          <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=EB+Garamond:ital@1&display=swap');`}</style>

          {/* Noise texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.07,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
              pointerEvents: "none",
            }}
          />

          {/* Vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.75) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Orange glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "5%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 380,
              height: 380,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(200,134,10,0.28) 0%, transparent 68%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          {/* F Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ marginBottom: 44, position: "relative", zIndex: 2 }}
          >
            <FLogo />
          </motion.div>

          {/* FAYNTRIX letters slide up */}
          <div style={{ overflow: "hidden", marginBottom: 14, position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              {word.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 90, opacity: 0 }}
                  animate={phase !== "f" ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.05 + i * 0.055,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: "inline-block",
                    fontSize: "clamp(50px, 7.5vw, 88px)",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "0.015em",
                    lineHeight: 1,
                    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ y: 18, opacity: 0 }}
            animate={phase !== "f" ? { y: 0, opacity: 0.72 } : {}}
            transition={{ duration: 0.7, delay: 0.52, ease: "easeOut" }}
            style={{
              fontSize: 15,
              letterSpacing: "0.28em",
              color: "#cfc4a0",
              fontStyle: "italic",
              fontFamily: "'EB Garamond', Georgia, serif",
              margin: "0 0 72px 0",
              zIndex: 2,
              position: "relative",
            }}
          >
            Cinematic Production &amp; Photography
          </motion.p>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase === "loading" || phase === "done" ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: "min(460px, 58vw)", position: "relative", zIndex: 2 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 9, letterSpacing: "0.28em", color: "rgba(255,255,255,0.32)", textTransform: "uppercase" }}>
                Loading Assets
              </span>
              {/* ✅ Plain number in a plain span — no MotionValue, no error */}
              <span style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.32)" }}>
                {counter}%
              </span>
            </div>

            <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }}>
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  height: "100%",
                  background: "#c8860a",
                  boxShadow: "0 0 10px rgba(200,134,10,0.75)",
                }}
              />
            </div>
          </motion.div>

          {/* Bottom bar */}
          <div
            style={{
              position: "absolute",
              bottom: 28,
              left: 36,
              right: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 2,
            }}
          >
            {/* 01 — INTRODUCTION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontStyle: "italic", fontFamily: "serif" }}>
                01
              </span>
              <div style={{ width: 44, height: 1, background: "rgba(255,255,255,0.18)" }} />
              <span style={{ fontSize: 9, letterSpacing: "0.25em", color: "rgba(255,255,255,0.32)", textTransform: "uppercase" }}>
                Introduction
              </span>
            </motion.div>

            {/* ENTER EXPERIENCE */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={phase === "done" ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
              transition={{ duration: 0.55 }}
              style={{ display: "flex" }}
            >
              <motion.button
                whileHover={{ backgroundColor: "rgba(200,134,10,0.12)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setPhase("exit");
                  setTimeout(() => onComplete?.(), 900);
                }}
                style={{
                  padding: "13px 26px",
                  border: "1px solid #c8860a",
                  borderRight: "none",
                  background: "transparent",
                  color: "#fff",
                  fontSize: 10,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                }}
              >
                Enter Experience
              </motion.button>
              <div
                style={{
                  width: 44,
                  height: 44,
                  border: "1px solid #c8860a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c8860a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}