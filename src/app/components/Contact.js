"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Resend } from "resend";

export default function Contact() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Récupération des données du formulaire
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      // Envoi des données au serveur
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message:
            "Votre message a été envoyé avec succès! Nous vous contacterons très prochainement.",
        });
        e.target.reset();
      } else {
        throw new Error(
          result.error ||
            "Une erreur s'est produite lors de l'envoi du message."
        );
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message:
          error.message ||
          "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        if (formStatus.success) {
          setFormStatus({
            submitted: false,
            success: false,
            message: "",
          });
        }
      }, 5000);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 3px rgba(48, 85, 68, 0.2)" },
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white relative overflow-hidden"
      ref={containerRef}
    >
      {/* Élément décoratif en arrière-plan */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5"
        style={{ y }}
      >
        <Image
          src="/images/ordinateur_plan_ordonne.jpg"
          alt="Plans architecturaux"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 text-sm rounded-full bg-green-100 text-[#305544] font-medium mb-4">
              CONTACTEZ-NOUS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Contactez-moi pour une Étude Gratuite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous avez un projet d&apos;aménagement, de rénovation ou de
              construction ? Ne laissez pas les démarches administratives
              freiner vos envies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-gray-50 rounded-xl shadow-xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100 rounded-full -ml-12 -mb-12 opacity-50"></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative font-serif">
                Prenons rendez-vous pour en parler !
              </h3>

              <form className="space-y-6 relative" onSubmit={handleSubmit}>
                {formStatus.submitted && (
                  <motion.div
                    className={`p-4 rounded-lg ${
                      formStatus.success
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    } mb-6`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {formStatus.message}
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Nom complet
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      placeholder="Votre nom"
                      required
                      whileFocus="focus"
                      variants={inputVariants}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      placeholder="votre@email.com"
                      required
                      whileFocus="focus"
                      variants={inputVariants}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Téléphone
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                    placeholder="Votre numéro"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Votre projet
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                    placeholder="Décrivez votre projet..."
                    required
                    whileFocus="focus"
                    variants={inputVariants}
                  ></motion.textarea>
                </div>

                <motion.button
                  type="submit"
                  className={`w-full bg-[#305544] hover:bg-[#264235] text-white font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] shadow-lg flex justify-center items-center ${isLoading ? "opacity-70 cursor-wait" : ""}`}
                  whileHover={{
                    scale: isLoading ? 1 : 1.02,
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer"
                  )}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-xl p-8 border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center font-serif">
                <span className="text-3xl mr-3">📞</span> Informations de
                contact
              </h3>

              <div className="space-y-8">
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Zone d&apos;intervention
                    </h4>
                    <div className="text-gray-600">
                      <address className="inline not-italic">
                        Le Petit-Bornand-les-Glières
                      </address>{" "}
                      et dans un rayon de 50 km
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 text-xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Horaires</h4>
                    <p className="text-gray-600">
                      Du lundi au vendredi
                      <br />
                      9h00 - 18h00
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Contact direct
                    </h4>
                    <p className="text-gray-600">
                      Téléphone :{" "}
                      <a
                        href="tel:0672744739"
                        className="hover:text-[#305544] transition-colors"
                      >
                        06.72.74.47.39
                      </a>
                      <br />
                      Email :{" "}
                      <a
                        href="mailto:pringuetlaurie@outlook.fr"
                        className="hover:text-[#305544] transition-colors"
                      >
                        pringuetlaurie@outlook.fr
                      </a>
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-12 bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h4 className="font-bold text-gray-900 mb-4 font-serif">
                  Intervention rapide
                </h4>
                <p className="text-gray-600 mb-4">
                  Intervention rapide sur tout le bassin alpin et les communes
                  limitrophes du Petit-Bornand (74).
                </p>
                <div className="flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-2xl">🚗</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
