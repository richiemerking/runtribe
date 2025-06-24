import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="RunTribe Logo" 
                className="h-12 w-12 rounded-2xl shadow-lg"
              />
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                RunTribe
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Chennai's most energetic running community. Building connections, 
              one Saturday morning at a time. Join the movement! 🏃‍♀️✨
            </p>
            <div className="flex space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 cursor-pointer group">
                <span className="text-xl group-hover:animate-bounce">📱</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 cursor-pointer group">
                <span className="text-xl group-hover:animate-bounce">📷</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 cursor-pointer group">
                <span className="text-xl group-hover:animate-bounce">💬</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Quick Links</h3>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-300 hover:text-pink-400 transition-colors hover:translate-x-2 transform duration-300">
                About the Tribe
              </a>
              <a href="#meetups" className="block text-gray-300 hover:text-pink-400 transition-colors hover:translate-x-2 transform duration-300">
                Saturday Runs
              </a>
              <a href="#community" className="block text-gray-300 hover:text-pink-400 transition-colors hover:translate-x-2 transform duration-300">
                Our Community
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-pink-400 transition-colors hover:translate-x-2 transform duration-300">
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Stay in the Loop</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get weekly updates about runs, events, and all the good vibes! 📬
            </p>
            <div className="flex">
              <Input 
                placeholder="Your email" 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-gray-400 rounded-r-none focus:border-pink-500 focus:ring-pink-500"
              />
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-l-none font-bold">
                Join ✨
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 RunTribe. Made with 💜 in Chennai. All vibes reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;