
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark, HiChevronLeft, HiChevronRight, HiArrowLeft } from "react-icons/hi2";

export const galleryData = {
    designs: [
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
    fashion: [
        { id: 1, src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80", alt: "Fashion 1" },
        { id: 2, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", alt: "Fashion 2" },
        { id: 3, src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80", alt: "Fashion 3" },
        { id: 4, src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80", alt: "Fashion 4" },
        { id: 5, src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80", alt: "Fashion 5" },
        { id: 6, src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80", alt: "Fashion 6" },
        { id: 7, src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80", alt: "Fashion 7" },
        { id: 8, src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80", alt: "Fashion 8" },
        { id: 9, src: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80", alt: "Fashion 9" },
        { id: 10, src: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=800&q=80", alt: "Fashion 10" },
    ],
    food: [
        { id: 1, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "Food 1" },
        { id: 2, src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", alt: "Food 2" },
        { id: 3, src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", alt: "Food 3" },
        { id: 4, src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80", alt: "Food 4" },
        { id: 5, src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80", alt: "Food 5" },
        { id: 6, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Food 6" },
        { id: 7, src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80", alt: "Food 7" },
        { id: 8, src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80", alt: "Food 8" },
        { id: 9, src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80", alt: "Food 9" },
        { id: 10, src: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80", alt: "Food 10" },
    ],
    nurseries: [
        { id: 1, src: "/public/Fayntrix Images/Nurseries/K.E photography-300.jpg", alt: "Nursery 1" },
        { id: 2, src: "/public/Fayntrix Images/Nurseries/K.E photography-319.jpg", alt: "Nursery 2" },
        { id: 3, src: "/public/Fayntrix Images/Nurseries/K.E-12.jpg", alt: "Nursery 3" },
        { id: 4, src: "/public/Fayntrix Images/Nurseries/kareem.essawy photography-318.jpg", alt: "Nursery 4" },
        { id: 5, src: "/public/Fayntrix Images/Nurseries/kareem.essawy photography-181.jpg", alt: "Nursery 5" },
        { id: 6, src: "/public/Fayntrix Images/Nurseries/kareem.essawy photography-128.jpg", alt: "Nursery 6" },
        { id: 7, src: "/public/Fayntrix Images/Nurseries/k.ephotography_449.jpg", alt: "Nursery 7" },
        { id: 8, src: "/public/Fayntrix Images/Nurseries/Kareem essawy.photography-177.jpg", alt: "Nursery 8" },
        { id: 9, src: "/public/Fayntrix Images/Nurseries/Kareem essawy photography-47.jpg", alt: "Nursery 9" },
        { id: 10, src: "/public/Fayntrix Images/Nurseries/11.jpg", alt: "Nursery 10" },
    ],
    wedding: [
        { id: 1, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80", alt: "Wedding 1" },
        { id: 2, src: "/public/Fayntrix Images/Wedding/DSC_3743.jpg", alt: "Wedding 2" },
        { id: 3, src: "/public/Fayntrix Images/Wedding/DSC_8103.jpg", alt: "Wedding 3" },

        { id: 4, src: "/public/Fayntrix Images/Wedding/_DSC2324.jpg", alt: "Wedding 4" },
        { id: 5, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", alt: "Wedding 5" },
        { id: 6, src: "/public/Fayntrix Images/Wedding/DSC_5490.jpg", alt: "Wedding 6" },
        { id: 7, src: "/public/Fayntrix Images/Wedding/DSC_3685.jpg", alt: "Wedding 7" },
        { id: 8, src: "/public/Fayntrix Images/Wedding/DSC_9984.jpg", alt: "Wedding 8" },
        { id: 9, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", alt: "Wedding 9" },
        { id: 10, src: "/public/Fayntrix Images/Wedding/_DSC2389.jpg", alt: "Wedding 10" },
    ],
};

const CATEGORY_LABELS = {
    designs: "Designs",
    fashion: "Fashion",
    food: "Food",
    nurseries: "Nurseries",
    wedding: "Wedding",
};

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

    useEffect(() => {
        const handler = (e) => {
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [goNext, goPrev, onClose]);

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
                   text-white/70 hover:text-[#c8860a] hover:border-[#c8860a]
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
                   text-white/60 hover:text-[#c8860a] hover:border-[#c8860a]
                   transition-all duration-200 cursor-pointer"
            >
                <HiChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full
                   border border-white/20 bg-white/5 flex items-center justify-center
                   text-white/60 hover:text-[#c8860a] hover:border-[#c8860a]
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
                        className="w-full object-contain rounded-xl"
                        style={{ maxHeight: "80vh" }}
                    />
                </AnimatePresence>
            </div>

            {/* Dots */}
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

// ── Image Card ─────────────────────────────────────────────────────────────
function GalleryCard({ image, index, onClick }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onClick(index)}
            className="relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-3"
        >
            <motion.img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto block"
                animate={{
                    scale: hovered ? 1.05 : 1,
                    filter: hovered ? "brightness(1.2)" : "brightness(0.88)",
                }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            />

            {/* Dark overlay */}
            <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
            />

            {/* Expand icon */}
            <motion.div
                animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <div className="w-10 h-10 rounded-full border border-[#c8860a]
                        bg-[#c8860a]/20 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="#c8860a" strokeWidth="2" strokeLinecap="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                </div>
            </motion.div>

            {/* Amber border */}
            <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1.5px rgba(200,134,10,0.6)" }}
            />
        </motion.div>
    );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function CategoryGallery() {
    const { category } = useParams();         
    const navigate = useNavigate();
    const [lightbox, setLightbox] = useState(null);

    // Normalize — lowercase to match keys
    const key = category?.toLowerCase();
    const images = galleryData[key];
    const label = CATEGORY_LABELS[key];

    // Unknown category → redirect
    useEffect(() => {
        if (!images) navigate("/", { replace: true });
    }, [images, navigate]);

    if (!images) return null;

    return (
        <section
            className="relative z-1 min-h-screen px-8 md:px-16 pt-28 pb-20"
            style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif" }}
        >
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&display=swap');`}</style>

            {/* ── Back button ─────────────────────────────────────────────── */}
            <motion.button
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-white/40 text-[11px] tracking-[0.18em]
                   uppercase hover:text-[#c8860a] transition-colors duration-200
                   bg-transparent border-none cursor-pointer mb-10 group"
            >
                <motion.span
                    animate={{ x: 0 }}
                    whileHover={{ x: -3 }}
                    className="transition-transform duration-200"
                >
                    <HiArrowLeft size={16} />
                </motion.span>
                Back
            </motion.button>

            {/* ── Header ──────────────────────────────────────────────────── */}
            <div className="mb-12">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#c8860a] text-[10px] tracking-[0.32em] uppercase mb-3"
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
                        <span style={{ color: "#c8860a" }}>{label}</span>
                        <span className="text-white"> Gallery</span>
                    </motion.h1>
                </div>

                {/* Tab pills — all categories for easy switching */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-2 mt-8"
                >
                    {Object.entries(CATEGORY_LABELS).map(([k, lbl]) => {
                        const isActive = k === key;
                        return (
                            <motion.button
                                key={k}
                                onClick={() => navigate(`/${k}`)}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-5 py-2 rounded-full text-[10px] font-bold
                           tracking-[0.18em] uppercase border transition-all
                           duration-200 cursor-pointer"
                                style={{
                                    background: isActive ? "#c8860a" : "transparent",
                                    borderColor: isActive ? "#c8860a" : "rgba(255,255,255,0.15)",
                                    color: isActive ? "#000" : "rgba(255,255,255,0.5)",
                                    boxShadow: isActive ? "0 0 18px rgba(200,134,10,0.35)" : "none",
                                }}
                            >
                                {lbl}
                            </motion.button>
                        );
                    })}
                </motion.div>
            </div>

            {/* ── Masonry Grid ────────────────────────────────────────────── */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3"
                >
                    {images.map((image, i) => (
                        <GalleryCard
                            key={`${key}-${image.id}`}
                            image={image}
                            index={i}
                            onClick={(idx) => setLightbox({ index: idx })}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* ── Lightbox ────────────────────────────────────────────────── */}
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