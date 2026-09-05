import { motion } from "framer-motion";
import Orb from "./Orb";

const traits = [
  "Research-first thinking",
  "Strategic mindset",
  "Relationship-driven",
  "Data-informed",
  "Execution-focused",
  "Systems-oriented",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32 border-b border-line">
      <Orb color="var(--color-tint)" size={360} bottom={-120} right={-100} opacity={0.5} drift="a" />
      <div className="container-page relative grid md:grid-cols-12 gap-12 md:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-4"
        >
          <div className="relative">
            <div
              className="absolute -bottom-4 -left-4 w-full h-full border border-rust/40"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-tint via-rust-tint to-surface border border-line overflow-hidden">
              <img
                src="/favour.jpeg"
                alt="Favour Lawrence, working"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
          </div>
        </motion.div>

        <div className="md:col-span-8 md:pl-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-[2.75rem] leading-tight text-ink"
          >
            Meet Favour.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-[15px] leading-relaxed text-slate max-w-lg"
          >
            I treat growth as a research problem before I treat it as a
            sales problem. Most of my work happens before the first
            conversation — understanding a market, a customer, or a
            competitor well enough that outreach feels obvious rather than
            speculative.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[15px] leading-relaxed text-slate max-w-lg"
          >
            I care about what actually moves a business forward, not what
            looks good on a slide — which usually means fewer, better
            relationships over volume, and systems that keep working after
            I've moved on to the next challenge.
          </motion.p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
            {traits.map((trait, i) => (
              <motion.div
                key={trait}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-2 text-sm text-ink/80"
              >
                <span className="w-1 h-1 bg-rust rounded-full shrink-0" />
                {trait}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
