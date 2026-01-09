import React from 'react';

const About = () => {
  const people = [
    {
      name: "Person One",
      role: "Lead Developer",
      bio: "Passionate about creating intuitive web experiences and data prediction models.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Person Two",
      role: "Data Analyst",
      bio: "Expert in education statistics and trend analysis for competitive exams.",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet the Team</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {people.map((person, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className={`h-32 bg-gradient-to-r ${person.color}`}></div>
            <div className="p-8 pt-0 relative">
              <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-white absolute -top-12 shadow-md flex items-center justify-center text-3xl font-bold text-gray-400">
                {person.name[0]}
              </div>
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900">{person.name}</h2>
                <p className="text-blue-600 font-medium mb-4">{person.role}</p>
                <p className="text-gray-600 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
