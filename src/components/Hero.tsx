import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

const Hero = () => {
  const { user } = useAuth();

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl opacity-30 animate-float" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-2xl opacity-20 animate-float" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-40 animate-float" style={{animationDelay: '4s', animationDuration: '5s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Gradient overlays */}
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-yellow-300/20 rounded-full blur-md animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-blue-300/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Running Silhouettes - Enhanced */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-20 hidden lg:block">
        <div className="text-9xl animate-bounce" style={{animationDuration: '3s'}}>🏃‍♂️</div>
      </div>
      <div className="absolute left-10 bottom-1/4 opacity-15 hidden lg:block">
        <div className="text-7xl animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🏃‍♀️</div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20">
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-yellow-300 text-lg mr-2">✨</span>
            <span className="text-white font-semibold text-sm uppercase tracking-wide">Chennai's Hottest Running Community</span>
            <span className="text-yellow-300 text-lg ml-2">✨</span>
          </div>
          
          <div className="mb-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
              RUN.<br/>
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-pulse">CONNECT.</span><br/>
              <span className="bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent">THRIVE.</span>
            </h1>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-white mb-4 font-bold">
              Where Fitness Meets Community 💪
            </p>
            
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Join Chennai's most vibrant running tribe! Every Saturday at 6 AM, 
              we turn Thiruvanmiyur Beach into our playground. It's not just about the miles – 
              it's about the connections, the energy, and the unstoppable vibes we create together.
            </p>
            
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl animate-bounce">
              <span className="mr-2">🚀</span>
              LAUNCHING SOON - BE THE FIRST!
              <span className="ml-2">🚀</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {user ? (
              <Button 
                onClick={scrollToRegistration}
                size="lg" 
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white border-0 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
              >
                Complete Your Journey ✨
              </Button>
            ) : (
              <Link to="/auth">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white border-0 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                >
                  Join the Tribe 🔥
                </Button>
              </Link>
            )}
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-3 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 hover:border-white hover:scale-105"
            >
              Discover More 👀
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">👥</span>
              <span className="font-semibold">150+ Runners</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold">5-Star Community</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏃‍♀️</span>
              <span className="font-semibold">Every Saturday</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 text-white">
          <path fill="currentColor" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;