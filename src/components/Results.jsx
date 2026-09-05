import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Orb from "./Orb";

const stats = [
  { value: 1000, suffix: "+", label: "Qualified surgeon leads generated" },
  {
    value: 1000,
    suffix: "+",
    label: "Manufacturers supported through B2B prospecting",
  },
  {
    value: 12,
    suffix: "",
    label: "U.S. cities covered through targeted surgeon prospecting",
  },
  { value: 21, suffix: "", label: "Healthcare website pages optimized" },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 30, stiffness: 60 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <span ref={ref} className="font-display text-rust">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section
      id="work"
      className="relative overflow-hidden py-24 md:py-32 border-b border-line bg-surface"
    >
      <Orb color="var(--color-tint)" size={380} top={-80} left={-100} opacity={0.5} drift="b" />
      <div className="container-page relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-[2.75rem] leading-tight text-ink max-w-xl"
        >
          Numbers tell part of the story.
        </motion.h2>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-normal">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm text-slate leading-snug max-w-[16rem]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-sm text-slate border-t border-line pt-8"
        >
          Different industries. Different challenges. One research-first
          approach.
        </motion.p>
      </div>
    </section>
  );
}
