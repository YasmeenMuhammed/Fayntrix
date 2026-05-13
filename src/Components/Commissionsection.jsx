
import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { HiArrowDownTray, HiEye } from "react-icons/hi2";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const PDF_PATH = "/Fayntrix-portfolio.pdf";
const PDF_NAME = "Fayntrix-portfolio.pdf";

const fadeUp = (delay = 0) => ({
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function CommissionSection() {
  const [downloading, setDownloading] = useState(false);

  // ── Download handler ──────────────────────────────────────────────────────
  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);

    // Show loading toast
    const loadingToast = toast.loading("Preparing your download...", {
      style: {
        background: "#1a1a14",
        color: "#fff",
        border: "1px solid rgba(200,134,10,0.4)",
        fontSize: "11px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontFamily: "'Barlow Condensed', sans-serif",
      },
      iconTheme: { primary: "#c8860a", secondary: "#1a1a14" },
    });

    try {
      
      await new Promise((res) => setTimeout(res, 1500));

      
      const link = document.createElement("a");
      link.href = PDF_PATH;
      link.download = PDF_NAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Success toast
      toast.success("Download started!", {
        id: loadingToast,
        duration: 3000,
        style: {
          background: "#1a1a14",
          color: "#fff",
          border: "1px solid rgba(200,134,10,0.6)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontFamily: "'Barlow Condensed', sans-serif",
        },
        iconTheme: { primary: "#c8860a", secondary: "#1a1a14" },
      });
    } catch {
      toast.error("Download failed. Try again.", {
        id: loadingToast,
        style: {
          background: "#1a1a14",
          color: "#fff",
          border: "1px solid rgba(220,50,50,0.5)",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontFamily: "'Barlow Condensed', sans-serif",
        },
      });
    } finally {
      setDownloading(false);
    }
  };

  // ── View PDF handler ───────────────────────────────────
  const handleView = () => {
    window.open(PDF_PATH, "_blank");
  };

  return (
    <>
      {/* Toast container */}
      <Toaster position="bottom-center" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=EB+Garamond:ital@1&display=swap');
      `}</style>

      <section
        className="relative z-1 bg-[#c8860a]/2 w-full py-10 mt-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif" }}
      >
        {/* ── Label ────────────────── */}
        <motion.p
          {...fadeUp(0)}
          className="text-[#c8860a] text-[10px] tracking-[0.32em] uppercase mb-6"
        >
           Story
        </motion.p>

        {/* ── Heading ────────────────────────────────────────────────── */}
        <div className="overflow-hidden mb-1">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(44px,6vw,80px)] font-extrabold uppercase leading-none text-white tracking-tight"
          >
            Show More
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(44px,6vw,80px)] font-extrabold uppercase leading-none tracking-tight"
            style={{ color: "#c8860a" }}
          >
            About Our Story
          </motion.h2>
        </div>

        {/* ── Subtitle ───────────────────────────────────────────────── */}
        <motion.p
          {...fadeUp(0.25)}
          className="max-w-lg text-white/50 leading-relaxed mb-12"
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(14px, 1.4vw, 17px)",
          }}
        >
          Every project is unique. We build custom teams and technical approaches
          tailored to the specific narrative requirements of your campaign.
        </motion.p>

        {/* ── Buttons ───────────────────────────────── */}
        <motion.div
          {...fadeUp(0.35)}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Button 1 — Download PDF (solid bordered, amber) */}
          <motion.button
            onClick={handleDownload}
            disabled={downloading}
            whileHover={!downloading ? { scale: 1.03, backgroundColor: "rgba(200,134,10,0.18)" } : {}}
            whileTap={!downloading ? { scale: 0.97 } : {}}
            transition={{ duration: 0.2 }}
            className="relative flex items-center gap-3 px-8 py-4
                       border border-[#c8860a] text-[#c8860a]
                       text-[11px] font-bold tracking-[0.22em] uppercase
                       bg-transparent cursor-pointer transition-colors duration-200
                       disabled:opacity-60 disabled:cursor-not-allowed
                       min-w-55 justify-center"
          >
            {/* Loading spinner or icon */}
            {downloading ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="text-[#c8860a]"
              >
                <AiOutlineLoading3Quarters size={15} />
              </motion.span>
            ) : (
              <HiArrowDownTray size={15} className="text-[#c8860a]" />
            )}
            {downloading ? "Downloading..." : "Download PDF"}
          </motion.button>

          {/* Button 2 — View PDF (ghost white style, different look) */}
          <motion.button
            onClick={handleView}
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(255,255,255,0.4)",
              color: "#0a0a08",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center gap-3 px-8 py-4
                       border border-white/40 text-white/70
                       text-[11px] font-bold tracking-[0.22em] uppercase
                       bg-transparent cursor-pointer transition-all duration-200
                       min-w-55 justify-center group"
          >
            <HiEye size={15} className="transition-colors duration-200" />
            View PDF
            {/* Subtle right arrow that slides in on hover */}
            <motion.span
              initial={{ x: -4, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              className="ml-1 text-white/40 text-xs"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* ── Decorative line ─────────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.55, duration: 1, ease: "easeOut" }}
          className="mt-20 w-16 h-px bg-[#c8860a]/40 origin-center"
        />
      </section>
    </>
  );
}