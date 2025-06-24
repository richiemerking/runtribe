const WhyJoin = () => {
  const benefits = [
    {
      icon: "🧠",
      title: "Meet Your People",
      description: "Connect with entrepreneurs, creatives, and changemakers who get your hustle and ambition"
    },
    {
      icon: "🤝",
      title: "Build Real Connections",
      description: "Form genuine friendships and professional networks that go way beyond just running"
    },
    {
      icon: "⚡",
      title: "Start Your Day Right",
      description: "Begin each Saturday with endorphins, fresh air, and that unstoppable main character energy"
    },
    {
      icon: "🌱",
      title: "Level Up Everything",
      description: "Holistic growth through fitness, mindfulness, and community support that hits different"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Why Join <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">RunTribe</span>? 🌱
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a community that believes in growth, connection, and starting every day with pure intention and good vibes only! ✨
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group border border-white/50"
            >
              <div className="text-5xl mb-6 group-hover:animate-bounce transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-full px-8 py-4 shadow-lg transform hover:scale-105 transition-all duration-300">
            <p className="text-lg font-semibold text-white">
              Ready to transform your Saturdays? Let's gooo! 🚀✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;