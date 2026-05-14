// components/PageLoader.jsx
import { motion, AnimatePresence } from "framer-motion";
import FLogo from './FLogo';

export default function PageLoader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-9998 flex items-center justify-center"
          style={{ background: "#181812" }}
        >
          {/* Animated F logo */}
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <FLogo size={48} color="#c8860a" />
          </motion.div>

          {/* Loading bar at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-[#c8860a]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ boxShadow: "0 0 10px rgba(200,134,10,0.8)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}