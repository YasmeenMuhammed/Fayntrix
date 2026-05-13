import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "wedding",
    title: "Weddings",
    tags: ["Editorial", "Cinematic"],
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80",
    span: "lg:col-span-2", // wide card — top left
  },
  {
    id: "nurseries",
    title: "Nursery & PreSchools",
    tags: ["Portraiture"],
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80",
    span: "lg:col-span-1", // narrow card — top right
  },
  {
    id: "food",
    title: "Food",
    tags: ["Commercial"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80",
    span: "lg:col-span-1", // narrow card — bottom left
  },
  {
    id: "fashion",
    title: "Fashion",
    tags: ["Film", "Avant-Garde"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    span: "lg:col-span-2", // wide card — bottom right
  },
];

function ProjectCard({ project, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`${project.id}`)}
      className={`relative overflow-hidden rounded-xl cursor-pointer
        ${project.span === "lg:col-span-1" ? "mt-10" : ""}
        
                  ${project.span}`}
      style={{ aspectRatio: project.span === "lg:col-span-2" ? "16/7" : "4/2.5" }}
    >
      {/* Image with scale on hover */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Gradient overlay — darker on hover */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: hovered
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.1) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Tags — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-2 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] tracking-[0.2em] uppercase text-white/55
                         border border-white/25 px-2 py-0.75 rounded-sm
                         font-['Barlow_Condensed',Arial_Narrow,sans-serif]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <motion.h3
          animate={{ color: hovered ? "#c8860a" : "#ffffff" }}
          transition={{ duration: 0.3 }}
          className="text-[clamp(16px,2.2vw,24px)] font-extrabold uppercase
                     tracking-tight leading-tight
                     font-['Barlow_Condensed',Arial_Narrow,sans-serif]"
        >
          {project.title}
        </motion.h3>
      </div>

      {/* Arrow — appears on hover top right */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -8 }}
        transition={{ duration: 0.25 }}
        className="absolute top-4 right-4 w-9 h-9 rounded-full
                   border border-[#c8860a] bg-[#c8860a]/10
                   flex items-center justify-center text-[#c8860a] text-sm"
      >
        →   
      </motion.div>

      {/* Amber border glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1.5px rgba(200,134,10,0.55)" }}
      />
    </motion.div>
  );
}

export default function PortfolioGrid() {
  const navigate = useNavigate();

  return (
    <section
      className="relative z-1 px-8 md:px-16 py-24"
      style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&display=swap');`}</style>

      {/* Section header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#c8860a] text-[10px] tracking-[0.3em] uppercase mb-3"
          >
            Our Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(32px,5vw,58px)] font-extrabold uppercase
                       tracking-tight leading-none text-white"
          >
            Selected
            <span style={{ color: "#c8860a" }}> Projects</span>
          </motion.h2>
        </div>

        {/* View all link */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ x: 4 }}
          onClick={() => navigate("/")}
          className="hidden md:flex items-center gap-2 text-white/40 text-[11px]
                     tracking-[0.18em] uppercase hover:text-[#c8860a] transition-colors
                     duration-200 bg-transparent border-none cursor-pointer pb-1
                     border-b border-white/20 hover:border-[#c8860a]"
        >
          View All Work
          <span>→</span>
        </motion.button>
      </div>

      {/* Grid — 3 columns */}
      <div className="grid lg:grid-cols-3 gap-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            delay={i * 0.08}
          />
        ))}
      </div>

      {/* Mobile view all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 flex md:hidden justify-center"
      >
        <button
          onClick={() => navigate("/portfolio")}
          className="flex items-center gap-2 text-white/40 text-[11px]
                     tracking-[0.18em] uppercase hover:text-[#c8860a]
                     transition-colors duration-200 bg-transparent border-none cursor-pointer"
        >
          View All Work →
        </button>
      </motion.div>
    </section>
  );
}