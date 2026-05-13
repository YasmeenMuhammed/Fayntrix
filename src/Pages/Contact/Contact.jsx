// pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


// ── Animation helpers ──────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

const stagger = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const childFadeUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// ── Reusable animated input ────────────────────────────────────────────────
function AnimatedInput({ label, type = "text", delay = 0, className = "",
  error,
  ...props

}) {
  const [focused, setFocused] = useState(false);
  return (
<motion.div {...fadeUp(delay)} className={className}>
  
  {/* wrapper ثابت */}
  <div className="relative pb-2">
    
    <input
      type={type}
      placeholder={label}
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="w-full bg-transparent border-0 pb-2 pt-1
                 text-white/80 text-[11px] tracking-[0.18em] 
                 placeholder:text-white/30 placeholder:tracking-[0.18em]
                 outline-none transition-colors duration-300
                 font-['Barlow_Condensed',Arial_Narrow,sans-serif]"
    />

    {/* الخط الأبيض */}
    <div className="absolute bottom-0 left-0 w-full h-px bg-white/20" />

    {/* الخط الأصفر */}
    <motion.div
      animate={{ scaleX: focused ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-0 left-0 w-full h-px bg-[#c8860a] origin-left"
      style={{ boxShadow: "0 0 8px rgba(200,134,10,0.6)" }}
    />
  </div>

  {/* error برا */}
  {error && (
    <p className="text-red-400 text-[10px] mt-2">{error.message}</p>
  )}

</motion.div>
  );
}

function AnimatedTextarea({ label, delay = 0,
  error,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  return (
    <motion.div {...fadeUp(delay)}>

      {/* wrapper ثابت */}
      <div className="relative pb-2">

        <textarea
          placeholder={label}
          rows={4}
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-0 pt-1 resize-none
                 text-white/80 text-[11px] tracking-[0.18em] 
                 placeholder:text-white/30 placeholder:tracking-[0.18em]
                 outline-none transition-colors duration-300
                 font-['Barlow_Condensed',Arial_Narrow,sans-serif]"
        />

        <div className="absolute bottom-0 left-0 w-full h-px bg-white/20" />

        <motion.div
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 w-full h-px bg-[#c8860a] origin-left"
          style={{ boxShadow: "0 0 8px rgba(200,134,10,0.6)" }}
        />
      </div>

      {error && (
        <p className="text-red-400 text-[10px] mt-2">{error.message}</p>
      )}

    </motion.div>
  );

}

// ── Info card ──────────────────────────────────────────────────────────────
function InfoCard({ icon, title, children, delay }) {
  return (
    <motion.div {...fadeUp(delay)} className="flex items-start gap-5">
      {/* icon circle */}
      <div className="w-11 h-11 rounded-full border border-[#c8860a]/50 flex items-center
                      justify-center shrink-0 bg-[#c8860a]/10">
        <span className="text-[#c8860a] text-base">{icon}</span>
      </div>
      <div>
        <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-white mb-2
                       font-['Barlow_Condensed',Arial_Narrow,sans-serif]">
          {title}
        </h4>
        <div className="text-white/50 text-[13px] leading-relaxed font-light">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://formspree.io/f/xvzdndne", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Message sent successfully ✅");
        reset();
      } else {
        toast.error("Something went wrong ❌");
      }
    } catch (err) {
      toast.error("Network error ❌");
    }
  };





  return (
    <section className="min-h-screen relative z-1 px-8 md:px-16 py-20
                        font-['Barlow_Condensed',Arial_Narrow,sans-serif]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=EB+Garamond:ital@1&display=swap');`}</style>

      <div className="max-w-325 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* ── LEFT — Form ───────────────── */}
        <div>
          {/* INQUIRIES label */}
          <motion.p
            {...fadeUp(0)}
            className="text-[#c8860a] text-[11px] tracking-[0.28em] uppercase mb-4"
          >
            Inquiries
          </motion.p>

          {/* CONNECT */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(52px,7vw,88px)] font-extrabold leading-none
                         text-white uppercase tracking-tight"
            >
              Connect
            </motion.h1>
          </div>

          {/* WITH US — outlined */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(52px,7vw,88px)] font-extrabold leading-none
                         uppercase tracking-tight"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px #c8860a",
              }}
            >
              With Us
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p {...fadeUp(0.22)} className="text-white/50 text-[14px] leading-relaxed mb-12 max-w-sm">
            For editorial commissions, commercial campaigns, or general inquiries.
            We review all submissions within 48 hours.
          </motion.p>

          {/* Form fields */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Row 1 — Name + Email */}
            <div className="grid grid-cols-2 gap-8">
              <AnimatedInput label="Full Name" delay={0.28} />
              <AnimatedInput label="Email Address"
                type="email"
                delay={0.32}
                error={errors.email}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email"
                  },
                })}
              />
            </div>

            {/* Row 2 — Brand (full width, orange placeholder) */}
            <motion.div {...fadeUp(0.36)} className="relative">
              <AnimatedInput
                type="text"
                label="Brand / Company"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div {...fadeUp(0.48)}>
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-3">
                Project Details
              </p>
              <AnimatedTextarea label="Tell us about your project..."
                delay={0.5}
                error={errors.message}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 characters",
                  },
                })}
              />
            </motion.div>

            {/* Submit button */}
            <motion.div {...fadeUp(0.56)}>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(200,134,10,0.08)" }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 px-10 py-4 border border-white text-white
                           text-[11px] font-bold tracking-[0.24em] 
                           bg-transparent cursor-pointer transition-all duration-200
                           hover:border-[#c8860a] hover:text-[#c8860a]
                           font-['Barlow_Condensed',Arial_Narrow,sans-serif]"
                type="submit" disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </motion.button>
            </motion.div>
          </form>
        </div>

        {/* ── RIGHT — Info ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-12">

          {/* Quote */}
          <motion.div {...fadeUp(0.2)} className="flex gap-5 items-start">
            <div className="w-0.75 bg-[#c8860a] self-stretch shrink-0 rounded-full
                            min-h-15" />
            <blockquote
              className="text-white/80 leading-snug"
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "clamp(18px, 2.2vw, 26px)",
                fontStyle: "italic",
              }}
            >
              "A physical space designed for the realization of cinematic visions."
            </blockquote>
          </motion.div>

          {/* Info cards */}
          <div className="flex flex-col gap-8">
            <InfoCard icon="📍" title="Fayntrix Studio" delay={0.3}>

              <p>Maadi, Cairo</p>
              <p>Egypt</p>
            </InfoCard>

            <InfoCard icon="✉️" title="Direct Contact" delay={0.38}>
              <p>hello@fayntrix.studio</p>
              <p>+201099600611</p>
            </InfoCard>

            <InfoCard icon="🕐" title="Studio Hours" delay={0.46}>
              <p>Sunday — Thursday: 9AM — 6PM EST</p>
              <p>Weekend shoots by appointment only.</p>
            </InfoCard>
          </div>

          {/* Map */}
          <motion.div
            {...fadeUp(0.54)}
            className="rounded overflow-hidden border border-white/10 relative"
            style={{ height: 240 }}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d69815.55626073506!2d31.326427344591803!3d30.00810155959897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d30.0126818!2d31.4391911!4m5!1s0x1458397c13c5a5e1%3A0x4884ea8fdae06b6f!2z2YXYr9mK2YbYqSDYp9mE2YXYudix2KfYrCDYstmH2LHYp9ihINin2YTZhdi52KfYr9mK2Iwg2YXYr9mK2YbYqSDYp9mE2YXYudix2KfYrCDYrtmE2YEg2YPYp9ix2YHZiNixLCBNYWFkaQ!3m2!1d29.979809699999997!2d31.3147237!5e1!3m2!1sen!2seg!4v1777286080130!5m2!1sen!2seg"
              width="600" height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
            {/* Open in maps overlay button */}
            <motion.a
              href="https://www.google.com/maps/dir//%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D8%A7%D8%AC+%D8%B2%D9%87%D8%B1%D8%A7%D8%A1+%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A%D8%8C+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D8%A7%D8%AC+%D8%AE%D9%84%D9%81+%D9%83%D8%A7%D8%B1%D9%81%D9%88%D8%B1,+Maadi%E2%80%AD/@30.0056576,31.4441728,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1458397c13c5a5e1:0x4884ea8fdae06b6f!2m2!1d31.3147237!2d29.9798097?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank"
              rel="noreferrer"
              whileHover={{ backgroundColor: "rgba(200,134,10,0.15)" }}
              className="absolute top-3 right-3 flex items-center gap-2
                         bg-[rgba(10,10,8,0.8)] border border-white/20
                         px-3 py-2 text-white/70 text-[10px] tracking-[0.15em] uppercase
                         no-underline transition-all duration-200 hover:text-[#c8860a] hover:border-[#c8860a]"
            >
              Open in Maps ↗
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}