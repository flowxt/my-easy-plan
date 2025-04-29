import Image from "next/image";

export default function Pricing() {
  const pricingPlans = [
    {
      title: "Plan d&apos;Aménagement Intérieur",
      price: "À partir de 150€",
      description:
        "Plans d&apos;aménagement intérieur clairs et sur-mesure pour vos projets de rénovation",
      features: [
        "Plans 2D détaillés",
        "Optimisation des espaces",
        "Conseils personnalisés",
        "Modifications incluses",
      ],
      image: "/images/ordinateur_plan2.jpg",
      color: "from-green-600 to-green-800",
      highlight: false,
    },
    {
      title: "Permis de Construire &lt; 150 m²",
      price: "Sur devis",
      description: "Accompagnement complet pour vos projets de construction",
      features: [
        "Étude de faisabilité",
        "Plans conformes",
        "Dossier administratif complet",
        "Suivi jusqu&apos;à l&apos;obtention",
      ],
      image: "/images/plan_manuel.jpg",
      color: "from-blue-600 to-blue-800",
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
      color: "from-amber-600 to-amber-800",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Élément décoratif en arrière-plan */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
        <Image
          src="/images/ordinateur_plan_ordonne.jpg"
          alt="Plans architecturaux"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">
            Nos Tarifs
          </h2>
          <p className="text-xl text-gray-600">
            Des solutions adaptées à tous vos projets de construction et
            d&apos;aménagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ${
                plan.highlight ? "md:-mt-4 md:mb-4 md:scale-105 z-10" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg font-bold">
                  Recommandé
                </div>
              )}

              <div className="relative h-48">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <div className="text-3xl font-bold text-green-700 mb-4">
                  {plan.price}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold transition duration-300 ${
                    plan.highlight
                      ? "bg-[#305544] hover:bg-[#264235] text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Demander un devis
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Le Forfait DP Comprend
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Collecte des documents
                </h4>
                <p className="text-gray-600">
                  Urbanisme, cadastre, PLU, plan occupation des sols, plan de
                  prévention des risques...
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Maquette 3D</h4>
                <p className="text-gray-600">
                  Visualisation réaliste de votre projet pour une meilleure
                  compréhension.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Étude du PLU</h4>
                <p className="text-gray-600">
                  Analyse approfondie des documents CERFA et des règlements
                  locaux.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-green-600 font-bold">4</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Plans complémentaires
                </h4>
                <p className="text-gray-600">
                  8 pièces complémentaires, notice descriptive, esquisse 3D,
                  visuels projetés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
