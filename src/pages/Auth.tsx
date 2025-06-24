import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signUp, signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Check if this is a redirect from email verification
  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'signup') {
      // User clicked the verification link, redirect to success page
      navigate('/success');
    }
  }, [searchParams, navigate]);

  // Redirect if already logged in
  if (user) {
    navigate('/');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let error;
      if (isSignUp) {
        if (!name.trim()) {
          toast({
            title: "Name Required",
            description: "Please enter your name to continue",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
        
        // Set redirect URL to auth page with success parameter
        const redirectUrl = `${window.location.origin}/auth?type=signup`;
        
        ({ error } = await signUp(email, password, name));
        if (!error) {
          toast({
            title: "Check Your Email! 📧",
            description: "We've sent you a verification link. Click it to join the tribe!",
          });
        }
      } else {
        ({ error } = await signIn(email, password));
        if (!error) {
          toast({
            title: "Welcome Back! 🎉",
            description: "Ready to run with the community?",
          });
          navigate('/');
        }
      }

      if (error) {
        toast({
          title: "Oops! Something went wrong 😅",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-2xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-40 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20 relative z-10">
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <img 
              src="/logo.png" 
              alt="RunTribe Logo" 
              className="h-16 w-16 mx-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
            {isSignUp ? "Join the Tribe! ✨" : "Welcome Back! 🎉"}
          </h1>
          <p className="text-gray-600">
            {isSignUp ? "Ready to start your running journey?" : "Let's get back to those good vibes!"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignUp && (
            <div>
              <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                required
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="text-gray-700 font-semibold">Password *</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a secure password"
              className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
              required
            />
          </div>
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {loading ? "Please wait... ⏳" : isSignUp ? "Create Account 🚀" : "Sign In 🎯"}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
          >
            {isSignUp ? "Already part of the tribe? Sign in 👋" : "New here? Join the tribe! ✨"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;