import { motion } from "framer-motion";

const industries = [
  "Technology",
  "Healthcare",
  "Fashion",
  "Education",
  "Workforce Solutions",
  "Consulting",
  "Media",
  "Digital Services",
];

export default function Industries() {
  return (
    <section className="py-24 md:py-28 border-b border-line overflow-hidden">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-4xl leading-tight text-ink max-w-xl"
        >
          Experience across different markets.
        </motion.h2>
      </div>

      <div className="mt-14 relative marquee-track">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...industries, ...industries].map((industry, i) => (
            <span
              key={i}
              className="marquee-item mx-6 md:mx-10 font-display text-3xl md:text-5xl text-ink/25 flex items-center gap-6 md:gap-10 transition-colors duration-300"
            >
              {industry}
              <span className="text-rust text-xl md:text-2xl">·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 34s linear infinite;
          width: max-content;
        }
        .marquee-track:hover .animate-marquee {
          animation-play-state: paused;
        }
        .marquee-item:hover {
          color: var(--color-rust);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
