import { motion } from "motion/react";
import { cardReveal, sectionReveal, staggerParent } from "../../../../motion/variants";
import { footerContent } from "../../../../constants/footer";

export default function Footer() {
  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(footerContent.newsletter.successMessage);
    e.currentTarget.reset();
  }

  return (
    <motion.footer
      className="bg-ted-dark text-white border-t border-gray-800 pt-16 pb-12 px-4 sm:px-6 lg:px-8"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={staggerParent} className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          {/* Brand / Disclaimer Column */}
          <motion.div variants={cardReveal} className="md:col-span-5">
            <a
              aria-label={`${footerContent.brand.prefix}${footerContent.brand.suffix} Home`}
              className="inline-flex items-center gap-2 mb-4"
              href="#"
            >
              <img
                alt={`${footerContent.brand.prefix} ${footerContent.brand.suffix}`}
                className="h-8 w-auto object-contain"
                src={footerContent.brand.logoUrl}
              />
            </a>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {footerContent.brand.disclaimer}
            </p>
            <div className="mt-6 text-xs text-gray-400">
              <p className="font-semibold text-gray-200">{footerContent.brand.venue}</p>
              <p>{footerContent.brand.address}</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={cardReveal} className="md:col-span-2 col-span-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {footerContent.navigation.map((link) => (
                <li key={link.label}>
                  <a className="hover:text-white transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacts & Socials */}
          <motion.div variants={cardReveal} className="md:col-span-2 col-span-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">
              Channels
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {footerContent.channels.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-white transition-colors"
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Subscription Column */}
          <motion.div variants={cardReveal} className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
              {footerContent.newsletter.title}
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              {footerContent.newsletter.description}
            </p>
            <motion.form className="flex items-center gap-2" onSubmit={handleSubscribe}>
              <input
                className="w-full text-xs px-3.5 py-2.5 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-ted-red"
                placeholder={footerContent.newsletter.placeholder}
                required
                type="email"
                name="email"
              />
              <button
                className="bg-ted-red hover:bg-ted-hover text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors shrink-0"
                type="submit"
              >
                {footerContent.newsletter.buttonText}
              </button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div variants={cardReveal} className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>{footerContent.bottomBar.copyright}</p>
          <p>
            {footerContent.bottomBar.themeLabel}{" "}
            <span className="text-gray-300">{footerContent.bottomBar.themeValue}</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}