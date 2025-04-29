"use client";
import Image from "next/image";

export default function Presentation() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/plan_manuel.jpg"
                  alt="Plan manuel architectural"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#305544] bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-[#305544]">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Mon Engagement</p>
                    <p className="text-sm text-gray-600">
                      Une attention particulière pour chaque projet
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#305544] mb-8">
                Mon Parcours & Expérience
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  Après ma formation initiale dans le milieu équestre, j&apos;ai
                  exploré divers domaines, tels que le commerce et
                  l&apos;assistance aux personnes avec des enfants en milieu
                  scolaire, et des personnes âgées à domicile.
                </p>

                <p>
                  À 40 ans, j&apos;ai ressenti le besoin de me reconvertir,
                  j&apos;ai saisi l&apos;opportunité de travailler et de me
                  former dans un bureau d&apos;études spécialisé dans la
                  conception bois.
                </p>

                <p>
                  Après m&apos;être formé au dessin dans le bâtiment et à la
                  conception bois, et face à la demande croissante des clients
                  pour la réalisation de plans spécifiques pour les dossiers de
                  permis divers, j&apos;ai réalisé la complexité pour les
                  particuliers de constituer un dossier complet et conforme aux
                  exigences des mairies.
                </p>

                <p>
                  C&apos;est à ce moment que j&apos;ai compris l&apos;importance
                  d&apos;apporter mon aide à mes clients dans la réalisation de
                  leurs projets en mettant à profit toutes mes compétences et
                  mon expérience acquises toutes ces années. Je veillerai à
                  accorder une attention particulière et sur mesure à chaque
                  projet qui me sera confié.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <div className="bg-gray-50 p-4 rounded-lg flex-1">
                  <div className="text-[#305544] font-bold text-lg mb-1">
                    1+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Années d&apos;expérience
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex-1">
                  <div className="text-[#305544] font-bold text-lg mb-1">
                    10+
                  </div>
                  <div className="text-gray-600 text-sm">Projets réalisés</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex-1">
                  <div className="text-[#305544] font-bold text-lg mb-1">
                    50km
                  </div>
                  <div className="text-gray-600 text-sm">
                    Zone d&apos;intervention
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
