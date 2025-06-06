import React from 'react';

const Services = () => {
  const services = [
    {
      title: "COUPE HOMME",
      price: "25€",
      description: "Coupes classiques et modernes"
    },
    {
      title: "BARBE",
      price: "15€", 
      description: "Taille et entretien de barbe"
    },
    {
      title: "COUPE + BARBE",
      price: "35€",
      description: "Service complet"
    },
    {
      title: "COIFFAGE",
      price: "20€",
      description: "Mise en forme et finition"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light tracking-wide text-black mb-4">
            NOS SERVICES
          </h2>
          <div className="w-16 h-px bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <h3 className="text-lg font-light tracking-wider text-black mb-4">
                {service.title}
              </h3>
              <div className="text-2xl font-light text-black mb-4">
                {service.price}
              </div>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                {service.description}
              </p>
              <a
                href="tel:0187902203"
                className="inline-block border border-black px-6 py-2 text-xs tracking-widest hover:bg-black hover:text-white transition-all duration-300"
              >
                RÉSERVER
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;