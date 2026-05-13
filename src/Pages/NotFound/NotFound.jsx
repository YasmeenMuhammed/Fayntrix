// pages/NotFound.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft, HiHome } from "react-icons/hi2";
import FLogo from "../../Components/FLogo";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section
            className="relative z-1 min-h-screen flex flex-col items-center
                 justify-center px-8 text-center overflow-hidden"
            style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif" }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=EB+Garamond:ital@1&display=swap');
      `}</style>

            {/* ── Ambient glow ────────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.25, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   pointer-events-none"
                style={{
                    width: 600,
                    height: 600,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(200,134,10,0.4) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />

            {/* ── Big 404 background text ──────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute select-none pointer-events-none"
                style={{
                    fontSize: "clamp(160px, 28vw, 340px)",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(200,134,10,0.12)",
                    userSelect: "none",
                }}
            >
                404
            </motion.div>

            {/* ── F Logo ──────────────────────────────────────────────────── */}
            <motion.div
                initial={{ scale: 0, rotate: -20, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative mb-8"
            >
                {/* Rotating ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-3 rounded-full"
                    style={{ border: "1px dashed rgba(200,134,10,0.25)" }}
                />
                <FLogo size={52} color="#c8860a" />
            </motion.div>

            {/* ── Label ───────────────────────────────────────────────────── */}
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-[#c8860a] text-[10px] tracking-[0.35em] uppercase mb-5"
            >
                Error 404
            </motion.p>

            {/* ── Heading ─────────────────────────────────────────────────── */}
            <div className="overflow-hidden mb-2">
                <motion.h1
                    initial={{ y: 70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white text-[clamp(36px,6vw,72px)] font-extrabold
                     uppercase tracking-tight leading-none"
                >
                    Frame Not
                </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
                <motion.h1
                    initial={{ y: 70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(36px,6vw,72px)] font-extrabold uppercase
                     tracking-tight leading-none"
                    style={{ color: "#c8860a" }}
                >
                    Found
                </motion.h1>
            </div>

            {/* ── Subtitle ────────────────────────────────────────────────── */}
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ duration: 0.6, delay: 0.48 }}
                className="max-w-sm mb-12 leading-relaxed"
                style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(14px, 1.4vw, 17px)",
                    color: "#cfc4a0",
                }}
            >
                The scene you're looking for doesn't exist — but every great story has an unexpected cut.
            </motion.p>

            {/* ── Buttons ─────────────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.58 }}
                className="flex flex-col sm:flex-row items-center gap-4"
            >
                {/* Go Back */}
                <motion.button
                    whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.06)" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-3 px-7 py-4 border border-white/30
                     text-white/70 text-[11px] font-bold tracking-[0.22em] uppercase
                     bg-transparent cursor-pointer transition-all duration-200
                     hover:border-white/60 hover:text-white min-w-45 justify-center"
                >
                    <HiArrowLeft size={15} />
                    Go Back
                </motion.button>

                {/* Go Home */}
                <motion.button
                    whileHover={{ scale: 1.04, backgroundColor: "#a06a00" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/")}
                    className="flex items-center gap-3 px-7 py-4 bg-[#c8860a]
                     text-black text-[11px] font-bold tracking-[0.22em] uppercase
                     border-0 cursor-pointer transition-colors duration-200
                     min-w-45 justify-center"
                >
                    <HiHome size={15} />
                    Back To Home
                </motion.button>
            </motion.div>

            {/* ── Bottom line ─────────────────────────────────────────────── */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2
                   w-16 h-px bg-[#c8860a]/30 origin-center"
            />
        </section>
    );
}