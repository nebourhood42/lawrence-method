import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="experience" className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-[2.75rem] leading-tight text-ink max-w-xl"
        >
          Where I've applied the method.
        </motion.h2>

        <div className="mt-14 border-t border-line">
          {experience.map((role, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={role.role + role.org} className="border-b border-line">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
                  className="py-7 md:py-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-8"
                >
                  <div className="md:w-2/5">
                    <h3 className="font-display text-lg md:text-xl text-ink">
                      {role.role}
                    </h3>
                    <p className="text-sm text-slate mt-0.5">{role.org}</p>
                  </div>
                  <div className="md:flex-1 flex items-center justify-between gap-4">
                    <p className="text-sm text-ink/70">{role.focus}</p>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="shrink-0 text-xs font-medium text-rust border-b border-rust/40 hover:border-rust transition-colors"
                    >
                      {isOpen ? "Hide details" : "View details"}
                    </button>
                  </div>
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 md:pb-8 md:pl-[calc(40%+2rem)] text-sm leading-relaxed text-slate max-w-lg">
                    {role.detail}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
