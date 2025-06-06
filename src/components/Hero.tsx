import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            NOUS CONNAISSONS
            <br />
            <span className="font-normal">VOTRE STYLE</span>
          </h1>

          <div className="w-16 h-px bg-white mx-auto mb-6"></div>
          <p className="text-sm tracking-widest mb-12 text-gray-300">
            DEPUIS 2023
          </p>

          <a
            href="tel:0187902203"
            className="inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            PRENDRE RENDEZ-VOUS
          </a>
        </div>
      </div>

      {/* Info en bas à droite */}
      <div className="absolute bottom-8 right-8 text-white text-right">
        <div className="bg-black/50 p-4 backdrop-blur-sm">
          <p className="text-sm mb-1">📞 01 87 90 22 03</p>
          <p className="text-xs text-gray-300">Mar-Dim: 9h-20h</p>
          <p className="text-xs text-gray-300">Pause: 13h30-14h30</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
