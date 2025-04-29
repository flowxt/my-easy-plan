"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#305544] to-[#264235] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          ></path>
          <path
            d="M0,0 L100,100 M100,0 L0,100"
            stroke="white"
            strokeWidth="0.5"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Prêt à concrétiser votre projet de construction ?
          </motion.h2>

          <motion.p
            className="text-lg text-green-100 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Obtenez rapidement un devis personnalisé et gratuit pour votre
            permis de construire ou votre déclaration préalable de travaux.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="#contact"
              className="inline-block bg-white text-[#305544] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis gratuit
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
