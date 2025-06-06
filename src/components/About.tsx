import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <div>
            <h2 className="text-4xl font-light tracking-wide text-black mb-6">
              À PROPOS DE<br />
              <span className="font-normal">BARBER PLUS</span>
            </h2>
            
            <div className="w-16 h-px bg-black mb-8"></div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Situé au cœur de Saint-Geneviève-des-Bois, Barber Plus est votre 
              destination de confiance pour un service de coiffure masculine 
              d'exception depuis 2023.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Notre équipe de professionnels passionnés maîtrise les techniques 
              traditionnelles et modernes pour vous offrir une expérience unique. 
              Chaque coupe est réalisée avec précision et attention aux détails.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Nous privilégions la qualité du service et l'écoute de nos clients 
              pour créer le style qui vous correspond parfaitement.
            </p>

            <div className="flex items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-light text-black mb-1">4,7</div>
                <div className="text-xs tracking-wider text-gray-500">NOTE GOOGLE</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-black mb-1">25+</div>
                <div className="text-xs tracking-wider text-gray-500">AVIS CLIENTS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-black mb-1">2023</div>
                <div className="text-xs tracking-wider text-gray-500">DEPUIS</div>
              </div>
            </div>
            
            <a
              href="tel:0187902203"
              className="inline-block border border-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            >
              NOUS CONTACTER
            </a>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
                alt="Barbier professionnel Barber Plus Saint-Geneviève-des-Bois"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;