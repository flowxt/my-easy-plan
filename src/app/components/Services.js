"use client";
import Image from "next/image";
import { useState } from "react";

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
        "La déclaration préalable est un document administratif qui permet à l&apos;administration de vérifier que votre projet de construction respecte bien les règles d&apos;urbanisme en vigueur.",
      steps: [
        "Étude de faisabilité de votre projet",
        "Collecte des documents d&apos;urbanisme nécessaires",
        "Rédaction de la notice descriptive",
        "Réalisation des plans et documents graphiques",
        "Dépôt du dossier en mairie",
        "Suivi de l&apos;instruction",
        "Accompagnement en cas de modifications demandées",
      ],
      advantages: [
        "Conformité avec les règles d&apos;urbanisme",
        "Délai d&apos;instruction réduit (1 mois)",
        "Pas de permis de construire nécessaire",
        "Économies sur les taxes d&apos;aménagement",
      ],
      examples: [
        "Construction d&apos;une terrasse",
        "Installation d&apos;une piscine",
        "Modification de façade",
        "Changement de toiture",
        "Installation d&apos;une clôture",
      ],
    },
  },
  {
    icon: "🗺️",
    title: "Plans d&apos;Aménagement Intérieur",
    description:
      "Je conçois des plans d&apos;aménagement intérieur clairs et sur-mesure : transformation d&apos;un garage en chambre, agrandissement d&apos;un salon, création d&apos;ouverture, pose de Velux, escalier ou mezzanine...",
    image: "/images/ordinateur_plan2.jpg",
    color: "from-green-600 to-green-800",
    details: {
      title: "Plans d&apos;Aménagement Intérieur",
      description:
        "Les plans d&apos;aménagement intérieur sont essentiels pour visualiser et optimiser l&apos;espace de votre habitat. Ils permettent de planifier efficacement vos travaux et d&apos;obtenir les autorisations nécessaires.",
      steps: [
        "Visite sur site et analyse des contraintes",
        "Étude des besoins et des envies",
        "Proposition de plusieurs solutions d&apos;aménagement",
        "Réalisation des plans 2D et 3D",
        "Détail des modifications structurelles",
        "Plans d&apos;exécution pour les artisans",
      ],
      advantages: [
        "Optimisation de l&apos;espace",
        "Visualisation claire du projet",
        "Respect des normes de construction",
        "Facilitation des devis artisans",
      ],
      examples: [
        "Transformation de garage",
        "Création d&apos;une mezzanine",
        "Ouverture de mur porteur",
        "Installation d&apos;un escalier",
        "Aménagement de combles",
      ],
    },
  },
  {
    icon: "🛠️",
    title: "Accompagnement Complet",
    description:
      "Spécialiste des projets d&apos;extension de maison, de rénovation de toiture, de dépendance ou de changement d&apos;usage, je vous guide dans chaque étape.",
    image: "/images/architecte-interieur.jpg",
    color: "from-amber-600 to-amber-800",
    details: {
      title: "Accompagnement Complet",
      description:
        "L&apos;accompagnement complet vous permet de bénéficier d&apos;une expertise professionnelle à chaque étape de votre projet, de la conception à la réalisation.",
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
        "Réduction des risques d&apos;erreur",
        "Meilleure maîtrise du budget",
        "Sérénité tout au long du projet",
      ],
      examples: [
        "Extension de maison",
        "Rénovation complète",
        "Construction de dépendance",
        "Changement d&apos;usage",
        "Aménagement de terrain",
      ],
    },
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600">
            Des solutions professionnelles pour tous vos projets de construction
            et d&apos;aménagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="relative p-8 bg-white flex flex-col flex-grow">
                <div className="absolute -top-8 left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl">{service.icon}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="mt-auto">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center text-[#305544] font-semibold hover:text-[#264235] transition-colors group relative z-10"
                  >
                    <span className="border-b-2 border-[#305544] group-hover:border-[#264235] pb-1 transition-colors">
                      En savoir plus
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1 text-[#305544] group-hover:text-[#264235] transition-colors"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modale */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {selectedService.details.title}
                </h3>
                <button
                  onClick={() => setSelectedService(null)}
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

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Description
                  </h4>
                  <p className="text-gray-600">
                    {selectedService.details.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Étapes du processus
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.details.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#305544] mr-2 mt-1">✓</span>
                        <span className="text-gray-600">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Avantages
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.details.advantages.map(
                      (advantage, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#305544] mr-2 mt-1">✓</span>
                          <span className="text-gray-600">{advantage}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Exemples de projets
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.details.examples.map((example, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#305544] mr-2 mt-1">✓</span>
                        <span className="text-gray-600">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-[#305544] hover:bg-[#264235] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
