import React from "react";
import { MapPin, Star, ExternalLink } from "lucide-react";

const GoogleReviews = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light tracking-wide text-black mb-4">
            AVIS CLIENTS & LOCALISATION
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-6"></div>
          <p className="text-gray-600">
            Découvrez ce que nos clients pensent de nos services et trouvez-nous
            facilement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Widget Elfsight Google Reviews */}
          <div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-light tracking-wide text-black mb-6 text-center">
                AVIS GOOGLE MY BUSINESS
              </h3>

              {/* Widget Elfsight intégré */}
              <div className="min-h-[400px] bg-white rounded-lg p-6 shadow-sm">
                <div
                  className="elfsight-app-1e677fe2-468b-4851-9863-223c7ba6618e"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>
          </div>

          {/* Localisation avec lien vers Google Maps */}
          <div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-light tracking-wide text-black mb-6 text-center">
                NOTRE LOCALISATION
              </h3>

              {/* Image de carte statique avec overlay */}
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop")',
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-16 w-16 mx-auto mb-4 text-white" />
                      <h4 className="text-xl font-light mb-2">BARBER PLUS</h4>
                      <p className="text-sm mb-4">Saint-Geneviève-des-Bois</p>
                      <a
                        href="https://maps.google.com/?q=134B+Route+de+Corbeil+91700+Saint-Geneviève-des-Bois"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-sm font-medium">
                          Ouvrir dans Google Maps
                        </span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations de localisation */}
              <div className="text-center mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-2">
                  <h4 className="font-medium text-black flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>ADRESSE</span>
                  </h4>
                  <p className="text-gray-600 text-sm">134B Route de Corbeil</p>
                  <p className="text-gray-600 text-sm">
                    91700 Saint-Geneviève-des-Bois
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-2xl font-light text-black">4,7</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Note Google My Business
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    319 interactions avec les clients
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href="https://maps.google.com/?q=134B+Route+de+Corbeil+91700+Saint-Geneviève-des-Bois"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-black px-6 py-2 text-xs tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                  >
                    VOIR SUR GOOGLE MAPS
                  </a>

                  <div className="text-xs text-gray-500">
                    <p>📞 01 87 90 22 03</p>
                    <p>🕒 Mar-dim: 9h-20h </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-black text-white p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-light tracking-wide mb-4">
              REJOIGNEZ NOS CLIENTS SATISFAITS
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Prenez rendez-vous dès maintenant et découvrez pourquoi nos
              clients nous font confiance.
            </p>
            <a
              href="tel:0187902203"
              className="inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              PRENDRE RENDEZ-VOUS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
