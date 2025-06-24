import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform group">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="RunTribe Logo" 
                  className="h-12 w-12 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                RunTribe
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-sm uppercase tracking-wider hover:scale-105 px-4 py-2 rounded-full hover:bg-purple-50 relative group">
                About
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </a>
              <a href="#meetups" className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-sm uppercase tracking-wider hover:scale-105 px-4 py-2 rounded-full hover:bg-purple-50 relative group">
                Meetups
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </a>
              <a href="#community" className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-sm uppercase tracking-wider hover:scale-105 px-4 py-2 rounded-full hover:bg-purple-50 relative group">
                Community
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-sm uppercase tracking-wider hover:scale-105 px-4 py-2 rounded-full hover:bg-purple-50 relative group">
                Contact
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </a>
            </nav>
            
            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {user.user_metadata?.name?.charAt(0) || user.email?.charAt(0)}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium">
                      Hey there! 👋
                    </span>
                  </div>
                  <Button 
                    onClick={signOut}
                    variant="ghost" 
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 rounded-full font-semibold"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="ghost" className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 rounded-full font-semibold">
                      Login
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white border-0 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bold">
                      Join the Tribe ✨
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-purple-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-lg">
              <div className="p-6 space-y-6">
                <nav className="space-y-4">
                  <a href="#about" className="block text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-sm uppercase tracking-wider px-4 py-3 rounded-xl hover:bg-purple-50">
                    About
                  </a>
                  <a href="#meetups" className="block text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-sm uppercase tracking-wider px-4 py-3 rounded-xl hover:bg-purple-50">
                    Meetups
                  </a>
                  <a href="#community" className="block text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-sm uppercase tracking-wider px-4 py-3 rounded-xl hover:bg-purple-50">
                    Community
                  </a>
                  <a href="#contact" className="block text-gray-700 hover:text-purple-600 transition-all duration-300 font-semibold text-sm uppercase tracking-wider px-4 py-3 rounded-xl hover:bg-purple-50">
                    Contact
                  </a>
                </nav>
                
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  {user ? (
                    <>
                      <div className="flex items-center space-x-3 px-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">
                            {user.user_metadata?.name?.charAt(0) || user.email?.charAt(0)}
                          </span>
                        </div>
                        <div className="text-gray-700 font-medium">
                          Welcome back! 🎉
                        </div>
                      </div>
                      <Button 
                        onClick={signOut}
                        variant="ghost" 
                        className="w-full text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 rounded-xl font-semibold"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/auth" className="block">
                        <Button variant="ghost" className="w-full text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 rounded-xl font-semibold">
                          Login
                        </Button>
                      </Link>
                      <Link to="/auth" className="block">
                        <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white border-0 rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 font-bold">
                          Join the Tribe ✨
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;