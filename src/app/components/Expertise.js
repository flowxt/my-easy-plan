import Image from "next/image";

export default function Expertise() {
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
              Une Expertise Locale au Service de Vos Projets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profitez d&apos;une connaissance précise des règles
              d&apos;urbanisme locales et des spécificités des communes dans un
              rayon de 50 km.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ordinateur_plan.jpg"
                  alt="Expertise en plans architecturaux"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-green-700">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Expertise locale</p>
                    <p className="text-sm text-gray-600">
                      Connaissance approfondie du terrain
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-8 mb-8 shadow-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                  <span className="text-3xl mr-3">📍</span> Zone
                  d&apos;Intervention
                </h3>
                <p className="text-gray-700 mb-6">
                  Installée au Petit-Bornand-les-Glières, j&apos;interviens dans
                  tout le secteur :
                </p>
                <ul className="grid grid-cols-2 gap-4 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                    La Roche-sur-Foron
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                    Bonneville
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                    Thônes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                    Cluses
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                    Saint-Pierre-en-Faucigny
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                    Sallanches
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                    La Clusaz
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                    Et plus encore...
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🌟</span> Avantages
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>
                        Connaissance précise des règles d&apos;urbanisme locales
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>Expertise des spécificités des communes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>Intervention rapide sur tout le bassin alpin</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">💡</span> Pourquoi Me Faire
                    Confiance ?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2 mt-1">✓</span>
                      <span>Spécialiste des démarches administratives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2 mt-1">✓</span>
                      <span>Prise en charge complète de votre projet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2 mt-1">✓</span>
                      <span>Tarifs clairs et adaptés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
