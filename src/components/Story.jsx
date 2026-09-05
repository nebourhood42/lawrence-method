import { motion } from "framer-motion";
import Orb from "./Orb";

const steps = [
  "Technology",
  "Research",
  "Strategy",
  "Acquisition",
  "Partnerships",
  "Growth",
];

export default function Story() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 border-b border-line">
      <Orb color="var(--color-rust-tint)" size={320} top={40} right={-120} opacity={0.5} drift="a" />
      <div className="container-page relative">
        <div className="grid md:grid-cols-12 gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-6 font-display text-3xl md:text-4xl leading-tight text-ink"
          >
            From building technology to building growth.
          </motion.h2>

          <div className="md:col-span-6 md:pl-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[15px] leading-relaxed text-slate"
            >
              My journey started in technology and development, where I
              learned how products are built and how technology can solve
              business problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-[15px] leading-relaxed text-slate"
            >
              Over time, my focus expanded beyond building products into
              understanding how businesses find opportunities, attract
              customers, build partnerships, position themselves in
              competitive markets, and create systems for sustainable
              growth.
            </motion.p>
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-4 md:gap-x-4">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-x-3 gap-y-4"
              >
                <span
                  className={`font-display text-base md:text-xl px-4 py-2 border transition-colors ${
                    i === steps.length - 1
                      ? "bg-rust text-paper border-rust"
                      : "bg-surface text-ink border-line"
                  }`}
                >
                  {step}
                </span>
                {i < steps.length - 1 && (
                  <span className="text-rust text-lg md:text-2xl">→</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 font-display text-xl md:text-2xl text-ink max-w-2xl"
        >
          Today, I work at the intersection of business development,
          research, growth, and conversion.
        </motion.p>
      </div>
    </section>
  );
}
