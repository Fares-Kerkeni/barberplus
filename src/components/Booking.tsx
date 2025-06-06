import React from "react";

const Booking = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light tracking-wide mb-4">
            NOUS CONTACTER
          </h2>
          <div className="w-16 h-px bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-light tracking-wider mb-4">
                  ADRESSE
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  134B Route de Corbeil
                  <br />
                  91700 Saint-Geneviève-des-Bois
                </p>
              </div>

              <div>
                <h3 className="text-lg font-light tracking-wider mb-4">
                  TÉLÉPHONE
                </h3>
                <a
                  href="tel:0187902203"
                  className="text-2xl font-light hover:text-gray-300 transition-colors"
                >
                  01 87 90 22 03
                </a>
              </div>

              <div>
                <h3 className="text-lg font-light tracking-wider mb-4">
                  HORAIRES
                </h3>
                <div className="text-gray-400 space-y-1">
                  <p>Mardi - Dimanche: 9h00 - 20h00</p>

                  <p>Lundi: Fermé</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Pause déjeuner: 13h30 - 14h30
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-light tracking-wide mb-8">
                PRÊT POUR UN NOUVEAU LOOK ?
              </h3>

              <a
                href="tel:0187902203"
                className="inline-block border border-white px-12 py-4 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 mb-8"
              >
                APPELER MAINTENANT
              </a>

              <p className="text-gray-400 text-sm leading-relaxed">
                Appelez-nous directement pour réserver.
                <br />
                Nous trouverons le créneau parfait pour vous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
