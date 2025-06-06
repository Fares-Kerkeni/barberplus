import React from 'react';

const Welcome = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6 tracking-wide">
              BIENVENUE CHEZ
              <br />
              <span className="font-normal text-red-500">BARBER PLUS</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Situé au 134B Route de Corbeil à Saint-Geneviève-des-Bois, notre salon 
              de coiffure vous accueille dans un cadre moderne et professionnel. 
              Avec une note de 4,7/5 étoiles, nous sommes fiers de la satisfaction 
              de nos clients.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Spécialisés dans la coiffure, les colorations capillaires, le brushing, 
              les cheveux attachés et frisés, nous offrons des services de qualité 
              adaptés à tous vos besoins capillaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-3 text-sm tracking-wider hover:bg-gray-800 transition-colors">
                EN SAVOIR PLUS
              </button>
              <a
                href="tel:0187902203"
                className="border-2 border-red-500 text-red-500 px-8 py-3 text-sm tracking-wider hover:bg-red-500 hover:text-white transition-colors text-center"
              >
                APPELER MAINTENANT
              </a>
            </div>
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
              alt="Salon Barber Plus Saint-Geneviève-des-Bois"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;