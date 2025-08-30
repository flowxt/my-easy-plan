"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-24 md:pb-32"
    >
      {/* Arrière-plan avec superposition de dégradé */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ordinateur_plan.jpg"
          alt="Plans architecturaux professionnels"
          fill
          className="object-cover"
          priority
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#305544]/90 to-[#305544]/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Logo centré en haut sur mobile, aligné à gauche sur desktop */}
          <div className="flex justify-center md:justify-start mb-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block"
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={160}
                height={80}
                className="mx-auto md:mx-0"
              />
            </motion.div>
          </div>

          {/* Titres H1 et H2 sur toute la largeur */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight font-serif text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 text-transparent bg-clip-text">
                Permis de Construire en Haute-Savoie
              </span>{" "}
              Simple, Rapide & Abordable
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-0 text-green-200 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Extension, véranda, garage... Je réalise vos plans et dossiers
              administratifs
            </motion.h2>
          </div>

          {/* Contenu en deux colonnes: texte et image */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 text-white text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.p
                  className="text-lg md:text-xl text-green-100 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Basé près du Petit-Bornand, j&apos;accompagne les particuliers
                  de Haute-Savoie de A à Z dans leurs projets de construction.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.a
                    href="#contact"
                    className="bg-gradient-to-r from-amber-400 via-yellow-100 to-amber-300 text-[#305544] hover:from-amber-300 hover:to-amber-400 font-bold py-3 px-6 rounded-lg 
                              transition duration-300 transform hover:scale-105 shadow-lg"
                    whileHover={{
                      scale: 1.05,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Devis gratuit
                  </motion.a>
                  <motion.a
                    href="#services"
                    className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-lg 
                              transition duration-300"
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Mes services
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="md:w-1/2 relative mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="relative h-[350px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/plan_manuel.jpg"
                  alt="Plans architecturaux détaillés"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 sm:-right-6 bg-white p-4 sm:p-4 rounded-lg shadow-xl transform translate-y-0 md:translate-y-0 w-auto sm:w-auto min-w-[200px] sm:min-w-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#305544] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-[#305544]">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#305544] text-sm sm:text-base">
                      Expertise locale
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      50 km autour du Petit-Bornand
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
