import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Arrière-plan avec superposition de dégradé */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ordinateur_plan.jpg"
          alt="Plans architecturaux professionnels"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/70"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-12 md:py-0">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 text-white text-center md:text-left">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={180}
                height={90}
                className="mb-8 mx-auto md:mx-0"
              />

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Plans & Permis de Construire
              </h1>

              <p className="text-xl md:text-2xl text-green-100 mb-8">
                pour vos Projets autour du Petit-Bornand (74)
              </p>

              <p className="text-lg text-green-50 mb-12">
                Vous souhaitez construire une véranda, agrandir votre maison ou
                aménager un garage en pièce de vie ? Je vous accompagne dans
                toutes vos démarches de permis de construire pour surfaces
                inférieures à 150 m², sur Le Petit-Bornand-les-Glières et dans
                un rayon de 50 km.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  className="bg-white text-green-800 hover:bg-green-50 font-bold py-4 px-8 rounded-lg 
                                transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contactez-moi
                </button>
                <button
                  className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg 
                                transition duration-300"
                >
                  Nos services
                </button>
              </div>
            </div>

            <div className="md:w-1/2 relative mt-8 md:mt-0">
              <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/plan_manuel.jpg"
                  alt="Plans architecturaux détaillés"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl transform translate-y-0 md:translate-y-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-green-800">Expertise locale</p>
                    <p className="text-sm text-gray-600">
                      50 km autour du Petit-Bornand
                    </p>
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
