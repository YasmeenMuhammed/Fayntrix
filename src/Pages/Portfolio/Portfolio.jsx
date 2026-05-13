
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

// ── Gallery Data ───────────────────────────────────────────────────────────
const galleryData = {
  Designs: [
    { id: 1, src: "/public/Fayntrix Images/Designs/1.jpeg", alt: "Design 1" },
    { id: 2, src: "/public/Fayntrix Images/Designs/2.JPG", alt: "Design 2" },
    { id: 3, src: "/public/Fayntrix Images/Designs/4.jpeg", alt: "Design 3" },
    { id: 4, src: "/public/Fayntrix Images/Designs/5.jpg", alt: "Design 4" },
    { id: 5, src: "/public/Fayntrix Images/Designs/6.jpeg", alt: "Design 5" },
    { id: 6, src: "/public/Fayntrix Images/Designs/7.png", alt: "Design 6" },
    { id: 7, src: "/public/Fayntrix Images/Designs/8.JPG", alt: "Design 7" },
    { id: 8, src: "/public/Fayntrix Images/Designs/9.png", alt: "Design 8" },
    { id: 9, src: "/public/Fayntrix Images/Designs/10.png", alt: "Design 9" },
    { id: 10, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", alt: "Design 10" },
  ],
  Fashion: [
    { id: 1, src: "/public/Fayntrix Images/Fashion/1.jpg", alt: "Fashion 1" },
    { id: 2, src: "/public/Fayntrix Images/Fashion/2.jpg", alt: "Fashion 2" },
    { id: 3, src: "/public/Fayntrix Images/Fashion/3.jpg", alt: "Fashion 3" },
    { id: 4, src: "/public/Fayntrix Images/Fashion/4.jpg", alt: "Fashion 4" },
    { id: 5, src: "/public/Fayntrix Images/Fashion/5.jpg", alt: "Fashion 5" },
    { id: 6, src: "/public/Fayntrix Images/Fashion/6.jpg", alt: "Fashion 6" },
    { id: 7, src: "/public/Fayntrix Images/Fashion/7.jpg", alt: "Fashion 7" },
    { id: 8, src: "/public/Fayntrix Images/Fashion/8.jpg", alt: "Fashion 8" },
    { id: 9, src: "/public/Fayntrix Images/Fashion/9.jpg", alt: "Fashion 9" },
    { id: 10, src: "/public/Fayntrix Images/Fashion/10.jpg", alt: "Fashion 10" },
  ],
  Food: [
    { id: 1, src: "/public/Fayntrix Images/Food/1.jpg", alt: "Food 1" },
    { id: 2, src: "/public/Fayntrix Images/Food/2.jpg", alt: "Food 2" },
    { id: 3, src: "/public/Fayntrix Images/Food/3.jpg", alt: "Food 3" },
    { id: 4, src: "/public/Fayntrix Images/Food/4.jpg", alt: "Food 4" },
    { id: 5, src: "/public/Fayntrix Images/Food/5.jpg", alt: "Food 5" },
    { id: 6, src: "/public/Fayntrix Images/Food/6.jpg", alt: "Food 6" },
    { id: 7, src: "/public/Fayntrix Images/Food/7.jpg", alt: "Food 7" },
    { id: 8, src: "/public/Fayntrix Images/Food/8.jpg", alt: "Food 8" },
    { id: 9, src: "/public/Fayntrix Images/Food/9.jpg", alt: "Food 9" },
    { id: 10, src: "/public/Fayntrix Images/Food/10.jpg", alt: "Food 10" },
  ],
  Nurseries: [
    { id: 1, src: "/public/Fayntrix Images/Nurseries/1.jpg", alt: "Nursery 1" },
    { id: 2, src: "/public/Fayntrix Images/Nurseries/2.jpg", alt: "Nursery 2" },
    { id: 3, src: "/public/Fayntrix Images/Nurseries/3.jpg", alt: "Nursery 3" },
    { id: 4, src: "/public/Fayntrix Images/Nurseries/4.jpg", alt: "Nursery 4" },
    { id: 5, src: "/public/Fayntrix Images/Nurseries/5.jpg", alt: "Nursery 5" },
    { id: 6, src: "/public/Fayntrix Images/Nurseries/6.jpg", alt: "Nursery 6" },
    { id: 7, src: "/public/Fayntrix Images/Nurseries/7.jpg", alt: "Nursery 7" },
    { id: 8, src: "/public/Fayntrix Images/Nurseries/8.jpg", alt: "Nursery 8" },
    { id: 9, src: "/public/Fayntrix Images/Nurseries/9.jpg", alt: "Nursery 9" },
    { id: 10, src: "/public/Fayntrix Images/Nurseries/10.jpg", alt: "Nursery 10" },
  ],
  Wedding: [
    { id: 1, src: "/public/Fayntrix Images/Wedding/1.jpg", alt: "Wedding 1" },
    { id: 2, src: "/public/Fayntrix Images/Wedding/2.jpg", alt: "Wedding 2" },
    { id: 3, src: "/public/Fayntrix Images/Wedding/3.jpg", alt: "Wedding 3" },
    { id: 4, src: "/public/Fayntrix Images/Wedding/4.jpg", alt: "Wedding 4" },
    { id: 5, src: "/public/Fayntrix Images/Wedding/5.jpg", alt: "Wedding 5" },
    { id: 6, src: "/public/Fayntrix Images/Wedding/6.jpg", alt: "Wedding 6" },
    { id: 7, src: "/public/Fayntrix Images/Wedding/7.jpg", alt: "Wedding 7" },
    { id: 8, src: "/public/Fayntrix Images/Wedding/8.jpg", alt: "Wedding 8" },
    { id: 9, src: "/public/Fayntrix Images/Wedding/9.jpg", alt: "Wedding 9" },
    { id: 10, src: "/public/Fayntrix Images/Wedding/10.jpg", alt: "Wedding 10" },
  ],
};

const TABS = Object.keys(galleryData);

// ── Lightbox ───────────────────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-9999 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.96)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full
                   border border-white/20 bg-white/5 flex items-center justify-center
                   text-white/70 hover:text-white hover:border-[#c8860a] hover:bg-[#c8860a]/10
                   transition-all duration-200 cursor-pointer"
      >
        <HiXMark size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10
                      text-white/40 text-[11px] tracking-[0.22em] uppercase
                      font-['Barlow_Condensed',sans-serif]">
        {current + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full
                   border border-white/20 bg-white/5 flex items-center justify-center
                   text-white/60 hover:text-white hover:border-[#c8860a] hover:bg-[#c8860a]/10
                   transition-all duration-200 cursor-pointer"
      >
        <HiChevronLeft size={24} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full
                   border border-white/20 bg-white/5 flex items-center justify-center
                   text-white/60 hover:text-white hover:border-[#c8860a] hover:bg-[#c8860a]/10
                   transition-all duration-200 cursor-pointer"
      >
        <HiChevronRight size={24} />
      </button>

      {/* Image */}
      <div
        className="w-full max-w-5xl px-20 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "85vh" }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            src={images[current].src}
            alt={images[current].alt}
            className="w-full object-contain  rounded-xl"
            style={{ maxHeight: "80vh" }}
          />
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className="transition-all duration-200 rounded-full cursor-pointer border-0"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? "#c8860a" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ── Gallery Image Card ─────────────────────────────────────────────────────
function GalleryCard({ image, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(index)}
      className="relative overflow-hidden rounded-2xl cursor-pointer group h-full"
    >
      {/* Image */}
      <motion.img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover block"
        animate={{
          scale: hovered ? 1.07 : 1,
          filter: hovered
            ? "brightness(1.2) contrast(1.05)"
            : "brightness(0.85)",
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Dark overlay on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
      />

      {/* Expand icon */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-10 h-10 rounded-full border border-[#c8860a]
                        bg-[#c8860a]/20 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="#c8860a" strokeWidth="2" strokeLinecap="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>
      </motion.div>

      {/* Amber border glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1.5px rgba(200,134,10,0.6)" }}
      />
    </motion.div>
  );
}

// ── Main Gallery Page ──────────────────────────────────────────────────────
export default function Gallery() {
  const [activeTab, setActiveTab] = useState("Designs");
  const [prevTab, setPrevTab] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { index }

  const images = galleryData[activeTab];

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setPrevTab(activeTab);
    setActiveTab(tab);
  };
  const getSpan = (index) => {
    const patterns = [
      "row-span-18",
      "row-span-26",
      "row-span-22",
      "row-span-16",
      "row-span-20",
    ];

    return patterns[index % patterns.length];
  };
  return (
    <section
      className="relative z-[1] min-h-screen px-8 md:px-16 pt-10 pb-20"
      style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&display=swap');`}</style>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#c8860a] text-[10px] tracking-[0.32em] uppercase mb-4"
        >
          Our Portfolio
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(38px,6vw,72px)] font-extrabold uppercase
                       leading-none tracking-tight"
          >
            <span className="text-white">Visual </span>
            <span style={{ color: "#c8860a" }}>Gallery</span>
          </motion.h1>
        </div>
      </div>

      {/* ── Tabs ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center flex-wrap gap-2 mb-12"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <motion.button
              key={tab}
              onClick={() => handleTabChange(tab)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-6 py-2.5 text-[11px] font-bold tracking-[0.18em]
                         uppercase rounded-full transition-all duration-300 cursor-pointer border
                         font-['Barlow_Condensed',sans-serif]"
              style={{
                background: isActive ? "#c8860a" : "transparent",
                borderColor: isActive ? "#c8860a" : "rgba(255,255,255,0.15)",
                color: isActive ? "#000" : "rgba(255,255,255,0.5)",
              }}
            >
              {tab}
              {/* Active pill glow */}
              {isActive && (
                <motion.div
                  layoutId="tab-glow"
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ boxShadow: "0 0 20px rgba(200,134,10,0.4)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>

      {/* ── Grid ───────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="
  grid
  grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-5
  auto-rows-[12px]
  gap-4
    "
        >
          {images.map((image, i) => (
            <div
              key={`${activeTab}-${image.id}`}
              className={`${getSpan(i)} overflow-hidden rounded-2xl`}
            >
              <GalleryCard
                image={image}
                index={i}
                onClick={(idx) => setLightbox({ index: idx })}
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── Lightbox ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={images}
            startIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}