import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const blogPosts = [
  {
    id: "allure-of-vintage-glass",
    category: "Craft",
    tag: "CRAFT",
    date: "OCT 12, 2023",
    readTime: "5 MIN",
    readType: "READ",
    title: "The Allure of Vintage Glass",
    excerpt:
      "Why modern sensors paired with 1970s anamorphic lenses create the perfect juxtaposition of sharpness and character.",
    quote: '"Imperfection is the new perfection."',
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    featured: true, // large left card
    content: `
      Vintage glass carries something digital optics have spent decades trying to eliminate — imperfection. 
      Flares, vignetting, chromatic aberration. These "flaws" are now the very things that make an image feel 
      alive, tactile, and human.
 
      When you pair a 1970s anamorphic lens with a modern sensor, you get the best of both worlds: the 
      resolving power of contemporary imaging technology with the organic rendering of glass designed before 
      perfection became the standard.
 
      The oval bokeh, the horizontal lens flares, the subtle breathing of focus — these qualities cannot be 
      replicated convincingly in post. They must be captured in camera, in the moment, as a function of physics.
    `,
  },
  {
    id: "directing-movement-in-still-photography",
    category: "Editorial",
    tag: "EDITORIAL",
    date: "SEP 28, 2023",
    readTime: "4 MIN",
    readType: "READ",
    title: "Directing Movement In Still Photography",
    excerpt:
      "Techniques from our latest fashion campaign on capturing kinetic energy without motion blur.",
    quote: null,
    image: "/public/Services 1.jpeg",
    featured: false,
    content: `
      Still photography has a paradox at its core: the image is frozen, yet the best images pulse with energy. 
      Movement — actual, physical movement — is one of the most powerful tools in a photographer's arsenal.
 
      During our latest campaign shoot, we experimented with controlled motion: asking talent to walk through 
      frame, spin, or gesture deliberately as the shutter fired. At 1/500s, motion is frozen. At 1/60s, it 
      becomes impressionistic.
 
      The key is rehearsal. You need the talent to understand that their body is a compositional element, not 
      just a subject. Arms, fabric, hair — all of these can serve the geometry of the frame.
    `,
  },
  {
    id: "building-the-noir-set",
    category: "BTS",
    tag: "BTS VIDEO",
    date: "SEP 15, 2023",
    readTime: "12 MIN",
    readType: "WATCH",
    title: "Building The 'Noir' Set",
    excerpt:
      "A timelapse and walkthrough of constructing our custom rain room for the latest commercial project.",
    quote: null,
    image: "/public/Services 2.jpeg",
    featured: false,
    content: `
      Rain on film is a lie. Actual rain is invisible on camera — the drops are too small, too fast, too sparse. 
      Every cinematic rain scene you've ever seen was manufactured: hoses, rigs, careful lighting designed to 
      backlight each drop into visibility.
 
      Our noir commercial required a rain room built from scratch inside a warehouse space. The build took three 
      days. We installed a grid of perforated pipes across a 20-foot ceiling, fed by two industrial pumps. 
      Drainage channels were cut into the floor.
 
      Lighting was the real challenge. To see rain, you need hard backlight — but that creates silhouette. 
      The solution was a split approach: hard backlight for rain visibility, soft fill from the front to 
      retain the subject's features.
    `,
  },
  {
    id: "color-grading-beyond-the-lut",
    category: "Production",
    tag: "PRODUCTION",
    date: "AUG 30, 2023",
    readTime: "6 MIN",
    readType: "READ",
    title: "Color Grading: Beyond The LUT",
    excerpt:
      "Why we build custom node trees from scratch for every hero shot rather than relying on presets.",
    quote: '"Color is emotion mathematically applied."',
    image: "/public/Services 3.jpeg",
    featured: false,
    content: `
      A LUT is a starting point, not a destination. The problem with preset-driven color grading is that it 
      assumes your footage looks like the footage the LUT was designed for. It rarely does.
 
      Every camera, every lens, every lighting setup produces a unique color signature. Grading means 
      understanding that signature and sculpting it toward an emotional intention — not just slapping a 
      filter on top.
 
      Our node tree for a typical hero shot includes: a base exposure correction, a custom primary grade 
      per light source, a selective hue rotation on skin tones, and a final creative pass that addresses 
      the emotional register of the scene.
    `,
  },
  {
    id: "the-silent-portrait",
    category: "Industry",
    tag: "INDUSTRY",
    date: "AUG 10, 2023",
    readTime: "3 MIN",
    readType: "READ",
    title: "The Silent Portrait",
    excerpt:
      "How removing verbal direction from portrait sessions unlocks a rawer, more authentic subject response.",
    quote: '"Silence is the loudest direction."',
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    featured: false,
    content: `
      Most photographers over-direct. They fill the silence with instruction, correction, encouragement — 
      and in doing so, they keep the subject perpetually in a state of performance.
 
      The silent portrait technique is simple: after the initial setup and a brief explanation of the concept, 
      the photographer stops speaking. No more "great," no more "chin down," no more "beautiful." Just the 
      shutter, the light, and the subject left alone with themselves.
 
      What happens in that silence is remarkable. After about two minutes of discomfort, most subjects stop 
      performing and simply exist. That's when the real portrait begins.
    `,
  },
];
 

const categories = ["All Insights"];

const fadeUp = (delay = 0) => ({
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

// ── Featured (large left) card ─────────────────────────────────────────────
function FeaturedCard({ post }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      {...fadeUp(0.15)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative row-span-2 overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Image */}
      <div className="w-full h-full min-h-130 relative overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Date + read time */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">{post.date}</span>
          <span className="text-[#c8860a] text-[10px]">◆</span>
          <span className="text-white/40 text-[10px] tracking-[0.15em] uppercase flex items-center gap-1">
            🕐 {post.readTime}
          </span>
        </div>

        {/* Title */}
        <motion.h2
          animate={{ color: hovered ? "#c8860a" : "#ffffff" }}
          transition={{ duration: 0.3 }}
          className="text-[22px] font-extrabold uppercase tracking-tight leading-tight mb-3
                     font-['Barlow_Condensed',Arial_Narrow,sans-serif]"
        >
          {post.title}
        </motion.h2>

        {/* Excerpt */}
        <p className="text-white/50 text-[13px] leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Divider */}
        <motion.div
          animate={{ backgroundColor: hovered ? "#c8860a" : "rgba(255,255,255,0.15)" }}
          className="w-full h-px mb-4"
          transition={{ duration: 0.3 }}
        />

        {/* Quote */}
        {post.quote && (
          <p className="text-white/35 text-[12px] italic font-['EB_Garamond',Georgia,serif]">
            {post.quote}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ── Regular card (top right — image only with overlay) ─────────────────────
function ImageCard({ post, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      {...fadeUp(delay)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ minHeight: 260 }}
    >
      <motion.img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover absolute inset-0"
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.6 }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

      {/* Tag badge */}
      <div className="absolute top-4 left-4">
        <span className="bg-black/60 border border-white/20 text-white/70 text-[9px]
                         tracking-[0.18em] uppercase px-3 py-1">
          {post.tag}
        </span>
      </div>

      {/* Arrow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-white/50
                   flex items-center justify-center text-white text-sm"
      >
        →
      </motion.div>
    </motion.div>
  );
}

// ── Text card (center top — title + excerpt + read time) ───────────────────
function TextCard({ post, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      {...fadeUp(delay)}
      onClick={() => navigate(`/blog/${post.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer p-6 border border-white/6
                 bg-[rgba(255,255,255,0.02)] flex flex-col justify-between"
      whileHover={{ scale: 1.015, backgroundColor: "rgba(200,134,10,0.04)" }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Tag + date */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-white/35 text-[9px] tracking-[0.2em] uppercase">{post.tag}</span>
          <span className="text-[#c8860a] text-[8px]">◆</span>
          <span className="text-white/35 text-[9px] tracking-[0.15em] uppercase">{post.date}</span>
        </div>

        {/* Title */}
        <motion.h3
          animate={{ color: hovered ? "#c8860a" : "#ffffff" }}
          transition={{ duration: 0.3 }}
          className="text-[20px] font-extrabold uppercase tracking-tight leading-tight mb-3
                     font-['Barlow_Condensed',Arial_Narrow,sans-serif]"
        >
          {post.title}
        </motion.h3>

        <p className="text-white/45 text-[13px] leading-relaxed line-clamp-2 mb-4">
          {post.excerpt}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-white/35 text-[10px] tracking-[0.15em] uppercase flex items-center gap-1">
          🕐 {post.readTime} {post.readType}
        </span>
        <motion.div
          animate={{
            opacity: hovered ? 1 : 0.4,
            x: hovered ? 0 : -4,
            borderColor: hovered ? "#c8860a" : "rgba(255,255,255,0.3)",
          }}
          className="w-7 h-7 rounded-full border flex items-center justify-center text-white text-xs"
        >
          →
        </motion.div>
      </div>

      {/* Quote if exists */}
      {post.quote && (
        <p className="mt-4 pt-4 border-t border-white/10 text-white/30 text-[11px]
                      italic font-['EB_Garamond',Georgia,serif]">
          {post.quote}
        </p>
      )}
    </motion.div>
  );
}

// ── Main Blog Page ─────────────────────────────────────────────────────────
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const filtered = blogPosts.filter((p) => {
    const matchCat =
      activeCategory === "All Insights" ||
      p.category.toLowerCase() === activeCategory.toLowerCase();
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <section className="min-h-screen relative z-1 -mt-5 font-['Barlow_Condensed',Arial_Narrow,sans-serif]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=EB+Garamond:ital@1&display=swap');`}</style>

      {/* ── Filter bar ─────────────────────────────────────────────── */}
      <motion.div
        {...fadeUp(0)}
        className="sticky top-16 z-50 flex items-center gap-3 px-8 py-4
                   bg-[rgba(10,10,8,0.85)] backdrop-blur-md border-b border-white/6
                   overflow-x-auto"
      >
        {categories.map((cat, i) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase
                        whitespace-nowrap border transition-all duration-200 cursor-pointer
                        font-['Barlow_Condensed',Arial_Narrow,sans-serif]
                        ${activeCategory === cat
                          ? "bg-white text-black border-white"
                          : "border-white/25 text-white/55 hover:border-white/60 hover:text-white bg-transparent"
                        }`}
          >
            {cat}
          </motion.button>
        ))}

        {/* Search */}
        <div className="ml-auto flex items-center gap-2 shrink-0">
          <AnimatePresence>
            {showSearch && (
              <motion.input
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 180, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-white text-[11px]
                           tracking-[0.12em] outline-none placeholder:text-white/30 pb-1"
                autoFocus
              />
            )}
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => { setShowSearch(!showSearch); setSearch(""); }}
            className="w-8 h-8 flex items-center justify-center text-white/50
                       hover:text-[#c8860a] transition-colors duration-200 bg-transparent border-none cursor-pointer"
          >
            🔍
          </motion.button>
        </div>
      </motion.div>

      {/* ── Grid ───────────────────────────────────────────────────── */}
      <div className="px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6  px-8 py-10"
            style={{ minHeight: "calc(100vh - 140px)" }}
          >
            {/* Col 1 — featured large card */}
            {featured && (
              <div className="md:col-span-1 md:row-span-2 ">
                <FeaturedCard post={featured} />
              </div>
            )}

            {/* Col 2 — top: text card, bottom: image card */}
            {rest[0] && (
              <div className='mt-7'>
                <TextCard post={rest[0]} delay={0.2} />
              </div>
            )}
            {rest[1] && (
              <div className='mt-7' style={{ minHeight: 260 }}>
                <ImageCard post={rest[1]} delay={0.28} />
              </div>
            )}

            {/* Col 3 — top: image card, bottom: text card */}
            {rest[2] && (
              <div style={{ minHeight: 260 }}>
                <ImageCard post={rest[2]} delay={0.24} />
              </div>
            )}
            {rest[3] && (
              <div>
                <TextCard post={rest[3]} delay={0.32} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}