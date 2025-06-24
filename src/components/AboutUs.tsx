const AboutUs = () => {
  const features = [
    {
      icon: "🏃‍♀️",
      title: "Epic Group Runs",
      description: "Turn up the energy with beach runs that hit different. Every stride with your new squad!"
    },
    {
      icon: "☕",
      title: "Post-Run Vibes",
      description: "Coffee dates that turn into business ideas, friendships, and maybe your next collab 👀"
    },
    {
      icon: "🧘‍♀️",
      title: "Mindful Moments",
      description: "Cool down sessions that center your mind and prep you to absolutely slay the day"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide mb-6 shadow-lg">
            About RunTribe
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-8 leading-tight">
            What's <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">RunTribe</span> About? 🤔
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're not your average running club – we're a whole movement! 
            Think fitness meets networking meets pure good vibes. Every Saturday, 
            ambitious souls gather to start their day with intention, energy, and epic connections.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 border border-white/50"
            >
              <div className="text-6xl mb-6 animate-float group-hover:animate-bounce" style={{animationDelay: `${index * 0.5}s`}}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-8 max-w-4xl text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <p className="text-xl font-semibold mb-4">
              "We're building more than fitness habits – we're creating a community of dreamers, 
              hustlers, and go-getters who lift each other up!" 
            </p>
            <div className="flex justify-center space-x-2 text-2xl">
              <span>💫</span>
              <span>🚀</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;