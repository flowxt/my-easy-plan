"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Expertise() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.2 },
    }),
  };

  const locations = [
    "La Roche-sur-Foron",
    "Bonneville",
    "Thônes",
    "Cluses",
    "Saint-Pierre-en-Faucigny",
    "Sallanches",
    "La Clusaz",
    "Grand-Bornand",
    "Thorens-Glières",
    "Annecy",
    "Et plus encore...",
  ];

  return (
    <section id="expertise" className="py-28 bg-white relative overflow-hidden">
      {/* Élément décoratif en arrière-plan */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <Image
          src="/images/ordinateur_plan_ordonne.jpg"
          alt="Plans architecturaux"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={0}
          >
            <span className="inline-block py-1 px-3 text-sm rounded-full bg-green-100 text-[#305544] font-medium mb-4">
              EXPERTISE LOCALE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#305544] mb-6 font-serif">
              Une Expertise Locale au Service <br className="hidden md:block" />
              de Vos Projets Architecturaux
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Profitez d&apos;une connaissance précise des règles
              d&apos;urbanisme locales et des spécificités des communes dans un
              rayon de 50 km autour du Petit-Bornand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={1}
            >
              <motion.div
                className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#305544]/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-[#305544]">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#305544] text-lg">
                      Expertise locale
                    </p>
                    <p className="text-gray-600 text-sm">
                      Connaissance du terrain
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ordinateur_plan.jpg"
                  alt="Expertise en plans architecturaux"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#305544]/80 to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Connaissance du terrain
                  </h3>
                  <p className="text-green-100">
                    Plus de 3 ans d&apos;expérience dans l&apos;architecture
                    locale
                  </p>
                </div>
              </div>
            </motion.div>

            <div>
              <motion.div
                className="bg-gray-50 rounded-xl p-8 mb-10 shadow-lg border-l-4 border-[#305544]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={2}
              >
                <h3 className="text-2xl font-bold text-[#305544] mb-6 flex items-center">
                  <span className="text-3xl mr-3">📍</span> Zone
                  d&apos;Intervention
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Installée au Petit-Bornand-les-Glières, j&apos;interviens dans
                  un rayon de 50 km couvrant une grande partie de la
                  Haute-Savoie :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-700">
                  {locations.map((location, index) => (
                    <motion.div
                      key={location}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <span className="w-3 h-3 bg-[#305544] rounded-full mr-2 flex-shrink-0"></span>
                      <span className="text-sm md:text-base">{location}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-8">
                <motion.div
                  className="bg-white rounded-xl p-7 shadow-lg border-l-4 border-[#305544] hover:shadow-xl transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  custom={3}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-3">🌟</span> Avantages
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#305544] mr-3 mt-1 text-lg">
                        ✓
                      </span>
                      <span className="text-gray-700 leading-snug">
                        Connaissance précise des règles d&apos;urbanisme locales
                        et de leur application
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#305544] mr-3 mt-1 text-lg">
                        ✓
                      </span>
                      <span className="text-gray-700 leading-snug">
                        Maîtrise des spécificités architecturales de la région
                        alpine
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#305544] mr-3 mt-1 text-lg">
                        ✓
                      </span>
                      <span className="text-gray-700 leading-snug">
                        Intervention rapide sur tout le bassin alpin, avec
                        déplacements sur site
                      </span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-7 shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  custom={4}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-3">💡</span> Pourquoi Me Faire
                    Confiance ?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1 text-lg">
                        ✓
                      </span>
                      <span className="text-gray-700 leading-snug">
                        Spécialiste expérimentée des démarches administratives
                        et des permis de construire
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1 text-lg">
                        ✓
                      </span>
                      <span className="text-gray-700 leading-snug">
                        Prise en charge complète de A à Z avec suivi
                        personnalisé de votre projet
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-3 mt-1 text-lg">
                        ✓
                      </span>
                      <span className="text-gray-700 leading-snug">
                        Tarification transparente sans mauvaises surprises
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 bg-[#305544]/5 p-6 rounded-lg border border-[#305544]/20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={5}
              >
                <p className="text-[#305544] font-medium flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Chaque projet est unique et mérite une attention particulière
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
