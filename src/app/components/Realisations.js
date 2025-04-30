"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Realisations() {
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projets = [
    {
      id: 1,
      title: "Déclaration Préalable - Rénovation de Ferme",
      description:
        "Plan de façade et de toiture pour la rénovation d'une ferme traditionnelle",
      image: "/images/DP-realisation1.png",
      tags: ["Déclaration Préalable", "Rénovation"],
    },
    {
      id: 2,
      title: "Modification de Façades",
      description:
        "Photomontage situant le terrain dans l'environnement proche après travaux",
      image: "/images/DP-realisation2.png",
      tags: ["Photomontage", "Façades"],
    },
    {
      id: 3,
      title: "Modélisation 3D - Maison Traditionnelle",
      description:
        "Visualisation 3D d'une maison avec balcon et toiture traditionnelle",
      image: "/images/plan3d-2.png",
      tags: ["Modélisation 3D", "Visualisation"],
    },
    {
      id: 4,
      title: "Rendu 3D - Détail de Façade",
      description:
        "Rendu 3D détaillé montrant les finitions et matériaux de façade",
      image: "/images/plan3d.png",
      tags: ["Rendu 3D", "Détails techniques"],
    },
    {
      id: 5,
      title: "Plan d'Aménagement des Combles",
      description:
        "Création de trois chambres et d'une salle de bain dans des combles",
      image: "/images/realisation-plan-amenagement.png",
      tags: ["Aménagement de combles", "Plan intérieur"],
    },
    {
      id: 6,
      title: "Plan Détaillé d'Aménagement",
      description:
        "Plan technique avec dimensions précises des espaces aménagés",
      image: "/images/realisation-plan-amenagement2.png",
      tags: ["Plan technique", "Dimensions"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
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
    <section
      id="realisations"
      className="py-24 bg-gray-50 relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <span className="inline-block py-1 px-3 text-sm rounded-full bg-green-100 text-[#305544] font-medium mb-4">
            MES RÉALISATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#305544] mb-6 font-serif">
            Projets Réalisés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques exemples de projets que j&apos;ai eu le plaisir
            de réaliser pour mes clients
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projets.map((projet) => (
            <motion.div
              key={projet.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div
                className="relative h-64 cursor-pointer"
                onClick={() => setSelectedImage(projet)}
              >
                <Image
                  src={projet.image}
                  alt={projet.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <h3 className="text-white font-bold text-lg">
                      {projet.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  {projet.title}
                </h3>
                <p className="text-gray-600 mb-4">{projet.description}</p>
                <div className="flex flex-wrap gap-2">
                  {projet.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-[#305544]/10 text-[#305544] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  onClick={() => setSelectedImage(projet)}
                  className="mt-4 inline-flex items-center font-medium text-[#305544] hover:text-[#264235]"
                  whileHover={{ x: 5 }}
                >
                  Voir en détail
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[60vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-500 hover:text-gray-700"
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
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedImage.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 rounded-full bg-[#305544]/10 text-[#305544] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
