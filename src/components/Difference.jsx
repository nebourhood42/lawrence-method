import { motion } from "framer-motion";
import Orb from "./Orb";

const inputs = [
  "Technology",
  "Research",
  "Marketing",
  "Sales",
  "Partnerships",
  "Operations",
];

export default function Difference() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 border-b border-line bg-surface">
      <Orb color="var(--color-rust-tint)" size={360} bottom={-140} right={-100} opacity={0.55} drift="a" />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-[2.75rem] leading-tight text-ink"
          >
            Commercial thinking meets technical understanding.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[15px] leading-relaxed text-slate"
          >
            Favour brings together commercial thinking, technical
            understanding, research ability, marketing experience, and
            execution.
          </motion.p>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-5 md:gap-x-6">
          {inputs.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-center gap-x-4 md:gap-x-6"
            >
              <span className="font-display text-lg md:text-xl text-ink bg-paper border border-line px-4 py-2 hover:border-rust hover:text-rust transition-colors">
                {item}
              </span>
              {i < inputs.length - 1 && (
                <span className="text-slate text-lg">+</span>
              )}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center gap-5"
        >
          <span className="text-slate text-2xl">=</span>
          <span className="font-display text-4xl md:text-5xl text-rust">
            Growth
          </span>
        </motion.div>
      </div>
    </section>
  );
}
