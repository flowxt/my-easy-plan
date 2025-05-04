"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, fallback: true });

  // Questions et réponses
  const faqs = [
    {
      question:
        "Pour quels types de projets puis-je faire appel à vos services ?",
      answer:
        "Mes services sont idéaux pour tous vos projets de construction et d'aménagement de moins de 150m² : extensions, vérandas, garages, rénovations, aménagements de combles, création d'ouvertures, etc. Je m'occupe des plans et des démarches administratives pour les permis de construire et déclarations préalables de travaux.",
    },
    {
      question: "Quelle est votre zone d'intervention ?",
      answer:
        "J'interviens principalement en Haute-Savoie (74), dans un rayon de 50 km autour du Petit-Bornand-les-Glières, couvrant ainsi Bonneville, La Roche-sur-Foron, La Clusaz, Thônes, Cluses, Sallanches et leurs environs.",
    },
    {
      question: "Comment se déroule notre collaboration ?",
      answer:
        "Après un premier contact, nous organisons une visite sur site pour évaluer votre projet. Je vous propose ensuite un devis détaillé. Une fois accepté, je réalise les plans et constitue le dossier administratif complet que vous pourrez déposer en mairie. Je reste disponible tout au long du processus pour répondre à vos questions.",
    },
    {
      question: "Quels sont vos délais de réalisation ?",
      answer:
        "Les délais varient selon la complexité du projet et ma charge de travail. En général, comptez 2 à 4 semaines pour une déclaration préalable et 3 à 6 semaines pour un permis de construire. Je vous communique un planning précis lors de notre premier échange.",
    },
    {
      question: "Faut-il faire appel à un architecte pour mon projet ?",
      answer:
        "Pour les projets de moins de 150m², vous n'êtes pas obligé de faire appel à un architecte. En tant que dessinateur projeteur, je peux réaliser tous les plans et démarches nécessaires pour ces projets. Au-delà de 150m², la signature d'un architecte devient obligatoire.",
    },
    {
      question: "Quels éléments dois-je fournir pour démarrer mon projet ?",
      answer:
        "Idéalement, vous devriez fournir les plans existants si disponibles, un extrait cadastral (que je peux obtenir), des photos du terrain/bâtiment, et bien sûr vos idées et besoins. Si vous avez déjà des croquis ou des inspirations, c'est encore mieux !",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 text-sm rounded-full bg-green-100 text-[#305544] font-medium mb-4">
            QUESTIONS FRÉQUENTES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#305544] mb-6 font-serif">
            Vos Questions, Mes Réponses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous vous posez des questions sur mes services ? Voici les réponses
            aux interrogations les plus fréquentes.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full text-left py-3 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-[#305544]">
                  {openIndex === index ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="py-3 text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            Vous avez d&apos;autres questions ? N&apos;hésitez pas à me
            contacter directement.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#305544] hover:bg-[#264235] text-white py-3 px-6 rounded-md transition-colors font-medium"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
