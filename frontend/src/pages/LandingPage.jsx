import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function LandingPage() {
  // Simulated authentication flag (set to false to force login redirection)
  const isLoggedIn = false;
  const navigate = useNavigate();

  // Helper function to handle navigation based on destination key
  const handleNavigation = (destination) => {
    if (!isLoggedIn) {
      // Not logged in
      switch (destination) {
        case 'startup':
          navigate('/login/startup');
          break;
        case 'investor':
          navigate('/login/investor');
          break;
        case 'startup-list':
          navigate('/login/startup');
          break;
        case 'investor-list':
          navigate('/login/investor');
          break;
        case 'getStarted':
          navigate('/login');
          break;
        default:
          navigate('/login');
      }
    } else {
      // User is logged in
      switch (destination) {
        case 'startup':
          navigate('/profile/startup');
          break;
        case 'investor':
          navigate('/profile/investor');
          break;
        case 'startup-list':
          navigate('/startups-list');
          break;
        case 'investor-list':
          navigate('/investors-list');
          break;
        case 'getStarted':
          navigate('/startups-list');
          break;
        default:
          navigate(destination);
      }
    }
  };

  // Dynamic data from backend simulation
  const [data, setData] = useState(null);
  // Toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Background image slider index
  const [index, setIndex] = useState(0);

  // Simulate backend fetch
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              images: [
                "https://wallpapercave.com/wp/wp3987074.jpg",
                "https://wallpapercave.com/wp/wp3987074.jpg",
                "https://wallpapercave.com/wp/wp3987074.jpg"
              ],
              features: [
                { title: "Smart Matching", desc: "AI-powered investor-startup matching based on industry, stage, and business model" },
                { title: "Deal Analytics", desc: "Real-time insights into funding trends and investment opportunities" },
                { title: "Secure Dashboard", desc: "Central hub for managing connections and documents" },
              ],
              steps: [
                { title: 'Create Profile', desc: 'Complete your profile with key details about your startup or investment criteria' },
                { title: 'Get Matched', desc: 'Our algorithm suggests the best matches based on your profile' },
                { title: 'Connect', desc: 'Start conversations and move forward with due diligence' }
              ],
              metrics: [
                { value: '1,200+', label: 'Startups Registered' },
                { value: '$450M+', label: 'Capital Deployed' },
                { value: '300+', label: 'Active Investors' },
              ]
            });
          }, 1000);
        });
        setData(response);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
    fetchData();
  }, []);

  // Background slider animation (only if images exist)
  useEffect(() => {
    if (data && data.images && data.images.length > 0) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % data.images.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 w-screen">
        <div className="text-2xl text-blue-600">Loading...</div>
      </div>
    );
  }

  const { images, features, steps, metrics } = data;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-gray-900 w-screen">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Invest Hub</h1>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('investor-list')}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Find Investor
              </button>
              <button 
                onClick={() => handleNavigation('startup-list')}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Find Startup
              </button>
              <button 
                onClick={() => handleNavigation('/testimonials')}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavigation('getStarted')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-7 w-7 text-gray-800 dark:text-gray-200" />
              ) : (
                <Bars3Icon className="h-7 w-7 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute w-full bg-white dark:bg-gray-800 border-b dark:border-gray-700 z-10"
            >
              <div className="px-6 py-6 flex flex-col space-y-4">
                <button 
                  onClick={() => handleNavigation('investor-list')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                >
                  Find Investor
                </button>
                <button 
                  onClick={() => handleNavigation('startup-list')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                >
                  Find Startup
                </button>
                <button 
                  onClick={() => handleNavigation('/testimonials')}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => handleNavigation('getStarted')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section with Animated Background Slider */}
      <section className="relative">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800"
        >
          <div className="max-w-7xl mx-auto py-32 px-6 sm:px-8 lg:px-10 text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-white">
              Connecting Innovation with Capital
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Data-driven matchmaking platform for startups and investors
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => handleNavigation('startup')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
              >
                I'm a Startup
              </button>
              <button 
                onClick={() => handleNavigation('investor')}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition transform hover:scale-105"
              >
                I'm an Investor
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <div className="max-w-7xl mx-auto py-20 px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md dark:text-gray-100"
            >
              <p className="text-4xl font-bold text-blue-600">{metric.value}</p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
            Why Choose VentureConnect?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="p-8 border rounded-lg hover:shadow-xl transition-shadow dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200"
              >
                <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <ChevronRightIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mt-6">{feature.title}</h3>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-gray-100">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
                className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-lg dark:text-gray-200"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                </div>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-To-Action Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-blue-600 dark:bg-blue-700 py-20"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Funding Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join hundreds of startups and investors already finding success on our platform
          </p>
          <button 
            onClick={() => handleNavigation('getStarted')}
            className="bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-200 transition transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">VentureConnect</h3>
              <p className="text-gray-400 dark:text-gray-300">Connecting innovation with capital through intelligent matchmaking</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Startups</h4>
              <ul className="space-y-3 text-gray-400 dark:text-gray-300">
                <li>
                  <button onClick={() => handleNavigation('investor-list')} className="hover:text-white transition-colors duration-200">
                    Find Investors
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/pitch-deck-tools')} className="hover:text-white transition-colors duration-200">
                    Pitch Deck Tools
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Investors</h4>
              <ul className="space-y-3 text-gray-400 dark:text-gray-300">
                <li>
                  <button onClick={() => handleNavigation('/deal-flow')} className="hover:text-white transition-colors duration-200">
                    Deal Flow
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/analytics-dashboard')} className="hover:text-white transition-colors duration-200">
                    Analytics Dashboard
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400 dark:text-gray-300">
                <li>
                  <button onClick={() => handleNavigation('/about')} className="hover:text-white transition-colors duration-200">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/blog')} className="hover:text-white transition-colors duration-200">
                    Blog
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors duration-200">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 dark:text-gray-300">
            <p>&copy; {new Date().getFullYear()} VentureConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
