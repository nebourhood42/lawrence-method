import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../data/services";
import Orb from "./Orb";

export default function Expertise() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="expertise" className="relative overflow-hidden py-24 md:py-32 border-b border-line">
      <Orb color="var(--color-rust-tint)" size={380} top={-120} left={-100} opacity={0.5} drift="a" />
      <div className="container-page relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-[2.75rem] leading-tight text-ink max-w-xl"
        >
          Where can I create value?
        </motion.h2>

        <div className="mt-14 border-t border-line">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={service.number}
                className={`relative border-b border-line transition-colors ${
                  isOpen ? "bg-rust-tint/40" : ""
                }`}
              >
                <span
                  className={`absolute left-0 top-0 bottom-0 w-[3px] bg-rust origin-top transition-transform duration-300 ${
                    isOpen ? "scale-y-100" : "scale-y-0"
                  }`}
                  aria-hidden="true"
                />
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start gap-6 md:gap-10 py-8 pl-4 text-left group hover:bg-paper/60 transition-colors"
                >
                  <span className="font-display text-sm md:text-base text-slate pt-1 w-8 shrink-0">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-xl md:text-2xl text-ink group-hover:text-rust transition-colors">
                        {service.title}
                      </h3>
                      <span
                        className={`text-xl transition-all duration-300 shrink-0 ${
                          isOpen ? "rotate-45 text-rust" : "text-slate"
                        }`}
                      >
                        +
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate max-w-md">
                      {service.summary}
                    </p>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="pt-5 flex flex-wrap gap-x-8 gap-y-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-ink/80 flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-rust rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <a
            href="#method"
            className="text-sm text-ink border-b border-ink/40 pb-0.5 hover:border-ink transition-colors"
          >
            Explore how I work →
          </a>
        </div>
      </div>
    </section>
  );
}
