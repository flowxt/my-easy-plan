import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Élément décoratif en arrière-plan */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <Image
          src="/images/ordinateur_plan_ordonne.jpg"
          alt="Plans architecturaux"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">
              Contactez-moi pour une Étude Gratuite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous avez un projet d&apos;aménagement, de rénovation ou de
              construction ? Ne laissez pas les démarches administratives
              freiner vos envies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100 rounded-full -ml-12 -mb-12 opacity-50"></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
                Prenons rendez-vous pour en parler !
              </h3>

              <form className="space-y-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                      placeholder="votre@email.com"
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
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                    placeholder="Votre numéro"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Votre projet
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#305544] hover:bg-[#264235] text-white font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Envoyer
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="text-3xl mr-3">📞</span> Informations de
                contact
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Zone d&apos;intervention
                    </h4>
                    <p className="text-gray-600">
                      Le Petit-Bornand-les-Glières et dans un rayon de 50 km
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
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
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Contact direct
                    </h4>
                    <p className="text-gray-600">
                      Téléphone : [Votre numéro]
                      <br />
                      Email : [Votre email]
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">
                  Intervention rapide
                </h4>
                <p className="text-gray-600 mb-4">
                  Intervention rapide sur tout le bassin alpin et les communes
                  limitrophes du Petit-Bornand (74).
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">🚗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
