import React from 'react';

const Team = () => {
  const team = [
    {
      name: "AYESHA",
      role: "PROPRIÉTAIRE & STYLISTE PRINCIPALE",
      image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      experience: "Experte en coiffure"
    },
    {
      name: "MARIE DUBOIS",
      role: "COLORISTE EXPERTE",
      image: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      experience: "Spécialiste coloration"
    },
    {
      name: "SOPHIE MARTIN",
      role: "STYLISTE SENIOR",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      experience: "Coiffure moderne"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wide">
          NOTRE ÉQUIPE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="bg-black text-white py-6 px-4">
                <h3 className="text-lg tracking-wider font-light mb-1">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                <p className="text-xs text-gray-500">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;