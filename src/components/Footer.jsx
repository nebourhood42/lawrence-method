import { FaLinkedin, FaWhatsapp, FaRegEnvelope, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-14">
      <div className="container-page flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-display text-lg text-ink">
            The Lawrence Methods
          </p>
          <p className="mt-1 text-sm text-slate">
            Business Development • Growth • Partnerships
          </p>
        </div>

        <div className="flex items-center gap-5">
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

      <div className="container-page mt-10 pt-6 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-xs text-slate">
          © {new Date().getFullYear()} Favour Lawrence. All rights reserved.
        </p>
        <p className="text-xs text-slate">
          Built around research. Driven by opportunity.
        </p>
      </div>
    </footer>
  );
}
