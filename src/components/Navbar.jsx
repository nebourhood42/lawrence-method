import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const links = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-line py-3"
          : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <nav className="container-page flex items-center justify-between">
        <img
          src="/images/logo.png"
          alt="The Lawrence Methods"
          className="h-24 w-auto object-contain sm:h-28"
        />

        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium text-ink border border-ink/80 px-5 py-2.5 hover:bg-ink hover:text-paper transition-colors"
          >
            Let's Talk →
          </a>
        </div>

        <button
          className="md:hidden text-ink text-2xl"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-t border-line">
          <div className="container-page flex flex-col py-6 gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ink border-b border-line/70 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center text-sm font-medium text-paper bg-ink px-5 py-3.5"
            >
              Let's Talk →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
