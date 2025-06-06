import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Ayesha est une vraie artiste ! Elle a transformé mes cheveux de façon spectaculaire. Le salon est magnifique et l'accueil est chaleureux. Je recommande vivement ce salon à toutes les femmes qui veulent se sentir belles.",
      author: "Sophie Tremblay",
      image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Un service exceptionnel ! L'équipe est très professionnelle et à l'écoute. Ma coloration est parfaite et exactement ce que je voulais. L'ambiance du salon est très relaxante. Je reviendrai certainement !",
      author: "Marie Lavoie",
      image: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wide">
          CE QUE DISENT NOS CLIENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center bg-white p-8 shadow-sm">
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <span className="font-light tracking-wide">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;