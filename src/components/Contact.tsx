import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      details: ["123 Rue de la République", "75001 Paris, France"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      details: ["+33 1 23 45 67 89"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaires",
      details: ["Mar-Sam: 9h00-19h00", "Dimanche: 10h00-17h00", "Lundi: Fermé"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["contact@barbershop-elite.fr"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prenez <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Rendez-vous</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Contactez-nous pour réserver votre créneau ou pour toute question. 
            Nous sommes là pour vous offrir la meilleure expérience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-900/50 border border-amber-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Formulaire de Contact</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Service souhaité
                </label>
                <select className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors">
                  <option>Coupe Classique</option>
                  <option>Coupe Premium</option>
                  <option>Rasage Traditionnel</option>
                  <option>Forfait Complet</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-4 rounded-lg text-lg font-semibold hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-lg text-black">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-400">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-gray-900/50 border border-amber-500/20 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-white mb-6">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-black/50 p-4 rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300 text-amber-400">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-black/50 p-4 rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300 text-amber-400">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-900/50 border border-amber-500/20 rounded-xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <p className="text-gray-400">Carte interactive disponible</p>
                <p className="text-gray-400">123 Rue de la République, Paris</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;