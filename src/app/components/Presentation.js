"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Presentation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="presentation"
      className="py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Élément de design - ligne décorative */}
      <motion.div
        className="absolute left-0 top-1/3 w-16 md:w-24 h-[2px] bg-[#305544]/40"
        initial={{ width: 0 }}
        animate={isInView ? { width: "5%" } : { width: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.div
        className="absolute right-0 bottom-1/3 w-16 md:w-24 h-[2px] bg-[#305544]/40"
        initial={{ width: 0 }}
        animate={isInView ? { width: "5%" } : { width: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 text-sm rounded-full bg-green-100 text-[#305544] font-medium mb-4">
              À PROPOS
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/laurie.jpeg"
                  alt="Stéphanie - My Easy Plan"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#305544]/30 to-transparent"></div>
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#305544] bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-[#305544]">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Mon Engagement</p>
                    <p className="text-sm text-gray-600">
                      Une attention particulière pour chaque projet
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h2
                className="text-3xl font-bold text-[#305544] mb-8 font-serif"
                variants={fadeInUp}
              >
                Mon Parcours & Expérience
              </motion.h2>

              <motion.div
                className="space-y-4 text-gray-700"
                variants={containerVariants}
              >
                <motion.p variants={fadeInUp}>
                  Après ma formation initiale dans le milieu équestre, j&apos;ai
                  exploré divers domaines, tels que le commerce et
                  l&apos;assistance aux personnes avec des enfants en milieu
                  scolaire, et des personnes âgées à domicile.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  À 40 ans, j&apos;ai ressenti le besoin de me reconvertir,
                  j&apos;ai saisi l&apos;opportunité de travailler et de me
                  former dans un bureau d&apos;études spécialisé dans la
                  conception bois.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  Après m&apos;être formée au dessin dans le bâtiment et à la
                  conception bois, et face à la demande croissante des clients
                  pour la réalisation de plans spécifiques pour les dossiers de
                  permis divers, j&apos;ai réalisé la complexité pour les
                  particuliers de constituer un dossier complet et conforme aux
                  exigences des mairies.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  C&apos;est à ce moment que j&apos;ai compris l&apos;importance
                  d&apos;apporter mon aide à mes clients dans la réalisation de
                  leurs projets en mettant à profit toutes mes compétences et
                  mon expérience acquises toutes ces années. Je veillerai à
                  accorder une attention particulière et sur mesure à chaque
                  projet qui me sera confié.
                </motion.p>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="bg-gray-50 p-4 rounded-lg flex-1 min-w-[120px] shadow-sm hover:shadow-md transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-[#305544] font-bold text-lg mb-1">
                    3+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Années d&apos;expérience
                  </div>
                </motion.div>
                <motion.div
                  className="bg-gray-50 p-4 rounded-lg flex-1 min-w-[120px] shadow-sm hover:shadow-md transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-[#305544] font-bold text-lg mb-1">
                    10+
                  </div>
                  <div className="text-gray-600 text-sm">Projets réalisés</div>
                </motion.div>
                <motion.div
                  className="bg-gray-50 p-4 rounded-lg flex-1 min-w-[120px] shadow-sm hover:shadow-md transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-[#305544] font-bold text-lg mb-1">
                    50km
                  </div>
                  <div className="text-gray-600 text-sm">
                    Zone d&apos;intervention
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
