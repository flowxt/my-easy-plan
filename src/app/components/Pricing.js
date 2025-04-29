"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
  const pricingPlans = [
    {
      title: "Plan d'Aménagement Intérieur",
      price: "À partir de 150€",
      description:
        "Plans d'aménagement intérieur clairs et sur-mesure pour vos projets de rénovation",
      features: [
        "Plans 2D détaillés",
        "Optimisation des espaces",
        "Conseils personnalisés",
        "Modifications incluses",
      ],
      image: "/images/ordinateur_plan2.jpg",
      color: "bg-gradient-to-br from-[#305544]/90 to-[#264235]",
      highlight: false,
    },
    {
      title: "Permis de Construire < 150 m²",
      price: "Sur devis",
      description: "Accompagnement complet pour vos projets de construction",
      features: [
        "Étude de faisabilité",
        "Plans conformes",
        "Dossier administratif complet",
        "Suivi jusqu'à l'obtention",
      ],
      image: "/images/plan_manuel.jpg",
      color: "bg-gradient-to-br from-[#305544] to-[#264235]",
      highlight: true,
    },
    {
      title: "Forfait Déclaration Préalable",
      price: "À partir de 500€",
      description: "Service complet pour vos projets de petite envergure",
      features: [
        "Collecte des documents urbanisme",
        "Maquette 3D",
        "Étude du PLU",
        "8 pièces complémentaires",
        "Modifications incluses",
      ],
      image: "/images/piscine2.jpg",
      color: "bg-gradient-to-br from-[#305544]/80 to-[#264235]",
      highlight: false,
    },
  ];

  const fadeIn = (delay) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: delay, ease: "easeOut" },
    viewport: { once: true, margin: "-50px" },
  });

  return (
    <section id="pricing" className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Élément décoratif en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <Image
          src="/images/ordinateur_plan_ordonne.jpg"
          alt="Plans architecturaux"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          {...fadeIn(0)}
        >
          <span className="inline-block py-1 px-3 text-sm rounded-full bg-green-100 text-[#305544] font-medium mb-4">
            TARIFS TRANSPARENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#305544] mb-6 font-serif">
            Des Solutions Adaptées à Tous Vos Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos forfaits conçus pour répondre à vos besoins
            spécifiques en matière de construction et d&apos;aménagement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl overflow-hidden bg-white shadow-xl transition-all duration-500 group ${
                plan.highlight ? "md:-mt-6 md:mb-6 md:scale-105 z-10" : ""
              }`}
              {...fadeIn(0.2 + index * 0.15)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-[#305544] text-white px-4 py-1 z-20 rounded-bl-lg font-bold">
                  Recommandé
                </div>
              )}

              <div className="relative h-56 overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 ${plan.color} opacity-60`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-md">
                      {plan.title}
                    </h3>
                    <div className="text-3xl font-bold drop-shadow-md">
                      {plan.price}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6 h-12">{plan.description}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-[#305544] mr-3 mt-0.5 text-lg">
                        ✓
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={`block w-full py-3 px-6 rounded-lg font-bold text-center transition-all duration-300 ${
                    plan.highlight
                      ? "bg-[#305544] hover:bg-[#264235] text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800 hover:text-[#305544]"
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 bg-white rounded-xl p-10 shadow-xl max-w-4xl mx-auto border border-gray-100"
          {...fadeIn(0.6)}
        >
          <h3 className="text-2xl font-bold text-[#305544] mb-8 text-center flex flex-col items-center">
            <span className="w-12 h-12 bg-[#305544] text-white rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </span>
            Le Forfait Déclaration Préalable Comprend
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="flex items-start bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#305544]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-[#305544] font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Collecte des documents
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Urbanisme, cadastre, PLU, plan occupation des sols, plan de
                  prévention des risques...
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#305544]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-[#305544] font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Maquette 3D</h4>
                <p className="text-gray-600 leading-relaxed">
                  Visualisation réaliste de votre projet pour une meilleure
                  compréhension et validation.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#305544]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-[#305544] font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Étude du PLU</h4>
                <p className="text-gray-600 leading-relaxed">
                  Analyse approfondie des documents CERFA et des règlements
                  locaux pour garantir la conformité.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#305544]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-[#305544] font-bold">4</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Plans complémentaires
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  8 pièces complémentaires, notice descriptive, esquisse 3D,
                  visuels projetés et modifications incluses.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href="#contact"
              className="inline-block py-3 px-8 rounded-lg font-bold transition-colors bg-[#305544] hover:bg-[#264235] text-white"
            >
              Obtenir un devis personnalisé
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
