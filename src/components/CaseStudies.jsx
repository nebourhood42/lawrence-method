import { motion } from "framer-motion";
import { caseStudies } from "../data/caseStudies";
import Orb from "./Orb";

const accents = ["var(--color-rust)", "var(--color-gold)", "var(--color-moss)"];

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 border-b border-line">
      <Orb color="var(--color-tint)" size={340} top={-100} left={-60} opacity={0.5} drift="a" />
      <div className="container-page relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-[2.75rem] leading-tight text-ink max-w-xl"
        >
          Selected work.
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-line border border-line">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{ borderTop: `3px solid ${accents[i % accents.length]}` }}
              className="bg-surface p-8 flex flex-col transition-shadow hover:shadow-[0_20px_45px_-20px_rgba(17,17,17,0.25)]"
            >
              <span
                className="text-xs font-medium tracking-wide"
                style={{ color: accents[i % accents.length] }}
              >
                {study.tag}
              </span>
              <h3 className="mt-3 font-display text-xl text-ink leading-snug">
                {study.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                {study.challenge}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                {study.approach.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-ink/70 border border-line px-2.5 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t border-line text-sm font-medium text-ink">
                {study.result}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
