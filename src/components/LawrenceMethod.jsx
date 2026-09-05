import { motion } from "framer-motion";
import Orb from "./Orb";

const steps = [
  {
    number: "01",
    title: "Research",
    text: "Understand the market, industry, competitors, customers, and business model.",
  },
  {
    number: "02",
    title: "Identify",
    text: "Find the right customers, decision-makers, partners, and commercial opportunities.",
  },
  {
    number: "03",
    title: "Position",
    text: "Understand what makes the business valuable and communicate that value clearly.",
  },
  {
    number: "04",
    title: "Reach",
    text: "Develop targeted outreach strategies rather than relying on generic prospecting.",
  },
  {
    number: "05",
    title: "Qualify",
    text: "Separate high-potential opportunities from prospects that are unlikely to convert.",
  },
  {
    number: "06",
    title: "Nurture",
    text: "Build relationships and maintain communication throughout the decision-making process.",
  },
  {
    number: "07",
    title: "Convert",
    text: "Move qualified opportunities toward consultations, partnerships, sales, or other commercial outcomes.",
  },
  {
    number: "08",
    title: "Optimize",
    text: "Track performance, identify bottlenecks, improve processes, and create repeatable growth systems.",
  },
];

export default function LawrenceMethod() {
  return (
    <section id="method" className="relative overflow-hidden py-24 md:py-32 border-b border-line">
      <Orb color="var(--color-tint)" size={420} top={100} right={-160} opacity={0.5} drift="b" />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-[2.75rem] leading-tight text-ink"
          >
            The Lawrence Method
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[15px] leading-relaxed text-slate"
          >
            Business development is not just about selling. It's about
            building a system for finding, developing, and converting
            opportunities.
          </motion.p>
        </div>

        <div className="mt-20 relative">
          <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-line" aria-hidden="true">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
              className="w-full h-full bg-rust"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-14">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.05 }}
                className="relative pl-12 md:pl-16"
              >
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                  className={`absolute left-0 top-0.5 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center text-xs font-medium ${
                    i % 2 === 0
                      ? "bg-rust text-paper border-rust"
                      : "bg-paper text-slate border-line"
                  }`}
                >
                  {step.number}
                </motion.span>
                <h3 className="font-display text-xl md:text-2xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-slate max-w-lg">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-line pt-10 font-display text-xl md:text-2xl leading-relaxed text-ink"
        >
          Research creates clarity.
          <br />
          Strategy creates direction.
          <br />
          Relationships create opportunity.
          <br />
          Systems create growth.
        </motion.div>
      </div>
    </section>
  );
}
