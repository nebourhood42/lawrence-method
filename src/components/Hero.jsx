import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Orb from "./Orb";

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative pt-36 pb-20 md:pt-48 md:pb-28 border-b border-line overflow-hidden"
    >
      <Orb color="var(--color-rust-tint)" size={460} top={-140} right={-120} opacity={0.7} drift="a" />
      <Orb color="var(--color-tint)" size={340} bottom={-100} left={-80} opacity={0.6} drift="b" />

      <div className="container-page relative grid md:grid-cols-12 gap-10 md:gap-6 items-end">
        <div className="md:col-span-8">
          <h1 className="font-display font-normal text-[2.6rem] leading-[1.08] sm:text-6xl md:text-[4.2rem] md:leading-[1.05] text-ink">
            <motion.span
              className="block"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              Growth doesn't happen
            </motion.span>
            <motion.span
              className="block"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              by accident.
            </motion.span>
            <motion.span
              className="block text-slate"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              It happens by finding the
            </motion.span>
            <motion.span
              className="relative inline-block text-slate"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              right opportunities.
              <svg
                className="absolute left-0 -bottom-2 w-full"
                height="14"
                viewBox="0 0 320 14"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M2 9.5C48 3 96 3 142 8C188 13 236 4 318 7"
                  stroke="var(--color-rust)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 1.1, ease: "easeInOut" }}
                />
              </svg>
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 max-w-md"
          >
            <p className="font-display text-xl text-ink">Favour Lawrence</p>
            <p className="mt-1 text-sm text-slate">
              Business Development Manager · Growth Strategy · Client
              Acquisition · Partnerships
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-slate">
              I help businesses identify opportunities, acquire the right
              clients, build strategic partnerships, and create systems for
              sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium px-6 py-3.5 hover:bg-rust transition-colors"
            >
              Work With Favour
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#method"
              className="group inline-flex items-center gap-2 text-sm text-ink border-b border-ink/40 pb-0.5 hover:border-rust hover:text-rust transition-colors"
            >
              Explore The Method
              <span className="inline-block transition-transform group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-4 relative"
        >
          <div
            className="absolute -top-5 -right-5 w-full h-full border border-rust/40"
            aria-hidden="true"
          />
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-[4/5] w-full bg-gradient-to-br from-rust-tint via-tint to-surface border border-line overflow-hidden"
          >
            <img
              src="/favour.jpeg"
              alt="Portrait of Favour Lawrence"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="animate-drift-b absolute -bottom-6 -left-6 bg-ink text-paper px-5 py-4 shadow-[0_18px_40px_-12px_rgba(17,17,17,0.35)]"
          >
            <p className="font-display text-2xl leading-none">2,000+</p>
            <p className="mt-1 text-[11px] text-paper/70 max-w-[9rem] leading-snug">
              Leads and prospects moved through the pipeline
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
