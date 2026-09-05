import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import Orb from "./Orb";

const helpOptions = [
  "Client Acquisition",
  "Business Development",
  "Growth Strategy",
  "Partnerships",
  "Market Research",
  "Other",
];

export default function Contact({ selectedService }) {
  const [help, setHelp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbgjalql";

  useEffect(() => {
    if (selectedService) setHelp(selectedService);
  }, [selectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setHelp("");
      } else {
        const result = await response.json().catch(() => null);
        setError(
          result?.errors?.[0]?.message ||
            "Something went wrong sending your message. Please try again.",
        );
      }
    } catch {
      setError(
        "Couldn't reach the server. Check your connection and try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32 border-b border-line"
    >
      <Orb
        color="var(--color-tint)"
        size={400}
        top={-140}
        right={-140}
        opacity={0.55}
        drift="b"
      />
      <div className="container-page relative grid md:grid-cols-12 gap-12 md:gap-10">
        <div className="md:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-[2.5rem] leading-tight text-ink"
          >
            Let's turn opportunities into growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[15px] leading-relaxed text-slate max-w-sm"
          >
            Tell me what you're building, where you're trying to go, and where
            you need help.
          </motion.p>

          <div className="mt-10 flex items-center gap-5">
            <a
              href=" https://www.linkedin.com/in/favour-lawrence-556909263?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              aria-label="Favour Lawrence on LinkedIn"
              className="w-10 h-10 flex items-center justify-center border border-line text-ink hover:border-rust hover:text-rust transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://x.com/favour750251"
              target="_blank"
              rel="noreferrer"
              aria-label="Favour Lawrence on X"
              className="w-10 h-10 flex items-center justify-center border border-line text-ink hover:border-rust hover:text-rust transition-colors"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="mailto:favourlawrence240@gmail.com"
              aria-label="Email Favour Lawrence"
              className="w-10 h-10 flex items-center justify-center border border-line text-ink hover:border-rust hover:text-rust transition-colors"
            >
              <FaRegEnvelope size={16} />
            </a>
            <a
              href="https://wa.me/+2348130864392"
              target="_blank"
              rel="noreferrer"
              aria-label="Message Favour Lawrence on WhatsApp"
              className="w-10 h-10 flex items-center justify-center border border-line text-ink hover:border-rust hover:text-rust transition-colors"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        <div className="md:col-span-7">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-line p-10 text-center bg-surface"
            >
              <p className="font-display text-2xl text-ink">
                Message received.
              </p>
              <p className="mt-3 text-sm text-slate">
                Thanks for reaching out — I'll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              <input
                type="hidden"
                name="_subject"
                value="New inquiry — The Lawrence Methods"
              />
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-xs text-slate">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-sm text-ink focus:border-rust outline-none transition-colors"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="text-xs text-slate">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-sm text-ink focus:border-rust outline-none transition-colors"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="company" className="text-xs text-slate">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-sm text-ink focus:border-rust outline-none transition-colors"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="help" className="text-xs text-slate">
                  What do you need help with?
                </label>
                <select
                  id="help"
                  name="help"
                  value={help}
                  onChange={(e) => setHelp(e.target.value)}
                  className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-sm text-ink focus:border-rust outline-none transition-colors"
                >
                  <option value="">Select an option</option>
                  {helpOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-xs text-slate">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-sm text-ink focus:border-rust outline-none transition-colors resize-none"
                />
              </div>
              <div className="sm:col-span-2">
                {error && <p className="mb-4 text-sm text-rust-dim">{error}</p>}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium px-6 py-3.5 hover:bg-rust transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Start the Conversation →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
