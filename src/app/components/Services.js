"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "✍️",
    title: "Déclarations Préalables (DP)",
    description:
      "Pour vos projets de terrasse, balcon, clôture, piscine, changement de façade ou de toiture, je réalise votre déclaration préalable de travaux, conforme aux exigences de votre commune.",
    image: "/images/piscine.jpg",
    color: "from-blue-600 to-blue-800",
    details: {
      title: "Déclarations Préalables (DP)",
      description:
        "La déclaration préalable est un document administratif qui permet à l'administration de vérifier que votre projet de construction respecte bien les règles d'urbanisme en vigueur.",
      steps: [
        "Étude de faisabilité de votre projet",
        "Collecte des documents d'urbanisme nécessaires",
        "Rédaction de la notice descriptive",
        "Réalisation des plans et documents graphiques",
        "Dépôt du dossier en mairie",
        "Suivi de l'instruction",
        "Accompagnement en cas de modifications demandées",
      ],
      advantages: [
        "Conformité avec les règles d'urbanisme",
        "Délai d'instruction réduit (1 mois)",
        "Pas de permis de construire nécessaire",
        "Économies sur les taxes d'aménagement",
      ],
      examples: [
        "Construction d'une terrasse",
        "Installation d'une piscine",
        "Modification de façade",
        "Changement de toiture",
        "Installation d'une clôture",
      ],
    },
  },
  {
    icon: "🗺️",
    title: "Plans d'Aménagement Intérieur",
    description:
      "Je conçois des plans d'aménagement intérieur clairs et sur-mesure : transformation d'un garage en chambre, agrandissement d'un salon, création d'ouverture, pose de Velux, escalier ou mezzanine...",
    image: "/images/ordinateur_plan2.jpg",
    color: "from-green-600 to-green-800",
    details: {
      title: "Plans d'Aménagement Intérieur",
      description:
        "Les plans d'aménagement intérieur sont essentiels pour visualiser et optimiser l'espace de votre habitat. Ils permettent de planifier efficacement vos travaux et d'obtenir les autorisations nécessaires.",
      steps: [
        "Visite sur site et analyse des contraintes",
        "Étude des besoins et des envies",
        "Proposition de plusieurs solutions d'aménagement",
        "Réalisation des plans 2D et 3D",
        "Détail des modifications structurelles",
        "Plans d'exécution pour les artisans",
      ],
      advantages: [
        "Optimisation de l'espace",
        "Visualisation claire du projet",
        "Respect des normes de construction",
        "Facilitation des devis artisans",
      ],
      examples: [
        "Transformation de garage",
        "Création d'une mezzanine",
        "Ouverture de mur porteur",
        "Installation d'un escalier",
        "Aménagement de combles",
      ],
    },
  },
  {
    icon: "🛠️",
    title: "Accompagnement Complet",
    description:
      "Spécialiste des projets d'extension de maison, de rénovation de toiture, de dépendance ou de changement d'usage, je vous guide dans chaque étape.",
    image: "/images/architecte-interieur.jpg",
    color: "from-amber-600 to-amber-800",
    details: {
      title: "Accompagnement Complet",
      description:
        "L'accompagnement complet vous permet de bénéficier d'une expertise professionnelle à chaque étape de votre projet, de la conception à la réalisation.",
      steps: [
        "Étude approfondie de votre projet",
        "Analyse des contraintes techniques et administratives",
        "Rédaction du dossier complet",
        "Coordination avec les artisans",
        "Suivi des démarches administratives",
        "Assistance lors des visites de chantier",
      ],
      advantages: [
        "Gain de temps considérable",
        "Réduction des risques d'erreur",
        "Meilleure maîtrise du budget",
        "Sérénité tout au long du projet",
      ],
      examples: [
        "Extension de maison",
        "Rénovation complète",
        "Construction de dépendance",
        "Changement d'usage",
        "Aménagement de terrain",
      ],
    },
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <span className="inline-block py-1 px-3 text-sm rounded-full bg-green-100 text-[#305544] font-medium mb-4">
            NOS SERVICES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6 font-serif">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600">
            Des solutions professionnelles pour tous vos projets de construction
            et d&apos;aménagement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="relative p-8 bg-white flex flex-col flex-grow">
                <div className="absolute -top-8 left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <motion.span
                    className="text-3xl"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {service.icon}
                  </motion.span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4 font-serif">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="mt-auto">
                  <motion.button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center font-semibold relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="block bg-[#305544] text-white px-4 py-2 rounded-lg transition-all duration-300 group-hover:bg-[#264235] group-hover:shadow-md">
                      En savoir plus
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1 inline"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modale */}
      {selectedService && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
                  {selectedService.details.title}
                </h3>
                <motion.button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 font-serif">
                    Description
                  </h4>
                  <p className="text-gray-600">
                    {selectedService.details.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 font-serif">
                    Étapes du processus
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.details.steps.map((step, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <span className="text-[#305544] mr-2 mt-1">✓</span>
                        <span className="text-gray-600">{step}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 font-serif">
                    Avantages
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.details.advantages.map(
                      (advantage, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <span className="text-[#305544] mr-2 mt-1">✓</span>
                          <span className="text-gray-600">{advantage}</span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 font-serif">
                    Exemples de projets
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.details.examples.map((example, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <span className="text-[#305544] mr-2 mt-1">✓</span>
                        <span className="text-gray-600">{example}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 flex justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  onClick={() => setSelectedService(null)}
                  className="bg-[#305544] hover:bg-[#264235] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fermer
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
