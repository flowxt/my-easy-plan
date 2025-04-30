"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Colonne 1: Logo et description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="My Easy Plan - Plans et permis de construire en Haute-Savoie"
                width={150}
                height={60}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Spécialiste en plans et permis de construire pour vos projets de
              moins de 150m² en Haute-Savoie. Expertise locale au service de vos
              projets d&apos;aménagement et de construction.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Colonne 2: Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Plans d&apos;aménagement intérieur
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Permis de construire &lt; 150m²
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Déclaration préalable de travaux
                </Link>
              </li>
              <li>
                <Link
                  href="#expertise"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Étude de faisabilité
                </Link>
              </li>
              <li>
                <Link
                  href="#expertise"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Conseils en réglementation locale
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Plans 2D et 3D
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Colonne 3: Zones d'intervention */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold mb-6 text-white">
              Zones d&apos;intervention
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400">
                  Petit-Bornand-les-Glières (74)
                </span>
              </li>
              <li>
                <span className="text-gray-400">La Roche-sur-Foron (74)</span>
              </li>
              <li>
                <span className="text-gray-400">Bonneville (74)</span>
              </li>
              <li>
                <span className="text-gray-400">Thônes (74)</span>
              </li>
              <li>
                <span className="text-gray-400">Cluses (74)</span>
              </li>
              <li>
                <span className="text-gray-400">Sallanches (74)</span>
              </li>
              <li>
                <span className="text-gray-400">
                  Et toute la Haute-Savoie dans un rayon de 50km
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Colonne 4: Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#305544] mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <address className="text-gray-400">
                  Le Petit-Bornand-les-Glières, 74130 Glières-Val-de-Borne,
                  Haute-Savoie
                </address>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#305544] mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:0672744739"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  06 72 74 47 39
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#305544] mt-1 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:pringuetlaurie@outlook.fr"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  pringuetlaurie@outlook.fr
                </a>
              </li>
              <li className="mt-6">
                <Link
                  href="#contact"
                  className="inline-block bg-[#305544] hover:bg-[#264235] text-white py-2 px-4 rounded transition-colors"
                >
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Section des mots-clés SEO */}
        <motion.div
          className="text-center text-xs text-gray-500 mb-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="mb-2">
            Plans architecturaux | Permis de construire Haute-Savoie |
            Déclaration préalable de travaux | Plans de maison | Agrandissement
            maison | Extension véranda | Aménagement intérieur | Réglementation
            urbanisme | Plan local d&apos;urbanisme (PLU) | Rénovation maison |
            Plan 2D | Modélisation 3D | Petits projets construction | Plans
            maisons individuelles
          </p>
        </motion.div>

        {/* Liens rapides */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Link href="#home" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <Link
            href="#presentation"
            className="hover:text-white transition-colors"
          >
            Présentation
          </Link>
          <Link href="#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link
            href="#expertise"
            className="hover:text-white transition-colors"
          >
            Expertise
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Tarifs
          </Link>
          <Link
            href="#realisations"
            className="hover:text-white transition-colors"
          >
            Réalisations
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-colors pointer-events-none opacity-70"
          >
            Mentions légales
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-colors pointer-events-none opacity-70"
          >
            Politique de confidentialité
          </Link>
        </motion.div>

        {/* Promotion Atypik Code */}
        <motion.div
          className="text-center mb-6 bg-[#305544]/10 py-4 px-6 rounded-lg max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-gray-300 font-medium">
            Ce site vous plaît ? Alors n&apos;hésitez pas à jeter un œil à{" "}
            <a
              href="https://atypikcode.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a7b62] hover:text-[#5c8f75] font-bold transition-colors"
            >
              atypikcode.fr
            </a>
          </p>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {currentYear} My Easy Plan. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
