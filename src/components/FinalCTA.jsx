import { motion } from "framer-motion";
import Orb from "./Orb";

const choices = [
  {
    prompt: "I need more clients.",
    cta: "Let's talk client acquisition →",
    value: "Client Acquisition",
  },
  {
    prompt: "I want to grow strategically.",
    cta: "Let's talk growth strategy →",
    value: "Growth Strategy",
  },
  {
    prompt: "I want to build strategic partnerships.",
    cta: "Let's talk partnerships →",
    value: "Partnerships",
  },
];

export default function FinalCTA({ onSelect }) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 border-b border-line bg-surface">
      <Orb color="var(--color-rust-tint)" size={400} top={-120} right={-140} opacity={0.6} drift="b" />
      <div className="container-page relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-[2.75rem] leading-tight text-ink max-w-xl"
        >
          What are you trying to grow?
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 border-t border-l border-line">
          {choices.map((choice, i) => (
            <motion.button
              key={choice.value}
              onClick={() => onSelect(choice.value)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative text-left p-8 md:p-10 border-r border-b border-line bg-surface hover:bg-rust-tint transition-colors duration-300"
            >
              <p className="font-display text-xl md:text-2xl text-ink leading-snug">
                {choice.prompt}
              </p>
              <p className="mt-6 text-sm font-medium text-rust inline-flex items-center gap-1.5">
                {choice.cta.replace(" →", "")}
                <span className="inline-block transition-transform group-hover:translate-x-1.5">
                  →
                </span>
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
