import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
  MapPinIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion, AnimatePresence } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function StartupDetails() {
  const { id } = useParams(); // Get the startup ID from the URL
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startupData, setStartupData] = useState(null);

  // Simulate dynamic data fetching (replace with your actual API call)
  useEffect(() => {
    setTimeout(() => {
      setStartupData({
        id: id,
        name: "Tech Innovators",
        tagline: "Revolutionizing the tech industry",
        logo: "https://source.unsplash.com/160x160/?startup,logo",
        industry: "SaaS",
        stage: "Series A",
        location: "San Francisco, CA",
        description:
          "Tech Innovators is a cutting-edge SaaS company providing innovative solutions for businesses to streamline their operations. Our platform leverages AI and machine learning to deliver actionable insights and improve efficiency.",
        contact: {
          email: "contact@techinnovators.com",
          phone: "+1-123-456-7890",
          website: "https://techinnovators.com",
          linkedin: "https://linkedin.com/company/techinnovators"
        },
        pitchDeck: "https://example.com/pitch-deck.pdf",
        metrics: [
          { label: "Monthly Revenue", value: "$50K" },
          { label: "Funding Raised", value: "$2M" },
          { label: "Customers", value: "500+" }
        ],
        team: [
          {
            name: "John Doe",
            role: "CEO",
            avatar: "https://source.unsplash.com/80x80/?person,ceo",
            bio: "Ex-Google, 10+ years in tech leadership"
          },
          {
            name: "Jane Smith",
            role: "CTO",
            avatar: "https://source.unsplash.com/80x80/?person,cto",
            bio: "PhD in Computer Science, AI expert"
          }
        ],
        traction: {
          users: "1500+",
          revenue: "$200K ARR",
          growth: "300% YoY"
        },
        problemStatement: "Traditional energy sources remain inefficient and environmentally harmful",
        solution: "AI-powered energy optimization platform reducing waste by 40%",
        marketSize: "$50B+ global renewable energy market",
        businessModel: "SaaS subscription + transaction fees"
      });
      setLoading(false);
    }, 1000); // Simulate 1 second loading
  }, [id]);

  // Sample chart data for Growth Metrics
  const chartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Revenue Growth',
      data: [65000, 89000, 120000, 200000],
      backgroundColor: '#3b82f6'
    }]
  };

  // Scroll function to Contact Details section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-details");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-screen bg-gray-50 dark:bg-gray-900"
    >
      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.history.back()}
        className="fixed top-4 left-4 z-50 flex items-center text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back
      </motion.button>

      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 py-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">{startupData.name}</h1>
          <div className="mt-4 flex items-center justify-center space-x-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-lg">
              {startupData.industry}
            </span>
            <span className="flex items-center text-white text-lg">
              <MapPinIcon className="w-6 h-6 mr-1" />
              {startupData.location}
            </span>
          </div>
          <div className="mt-8">
            <button 
              onClick={scrollToContact}  // Scroll to the Contact Details section
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 inline-flex items-center"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Contact Team
            </button>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 space-y-12">
        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {startupData.metrics.map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-3">
                <ChartBarIcon className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">{metric.label}</h3>
              </div>
              <p className="text-3xl font-bold">{metric.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Investment Pitch Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <h2 className="text-3xl font-bold mb-6">Investment Pitch</h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <div>
              <h3 className="text-xl font-semibold mb-2">The Problem</h3>
              <p>{startupData.problemStatement}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
              <p>{startupData.solution}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Market Opportunity</h3>
              <p>{startupData.marketSize}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Business Model</h3>
              <p>{startupData.businessModel}</p>
            </div>
          </div>
        </motion.div>

        {/* Growth Metrics Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <h2 className="text-3xl font-bold mb-6">Growth Metrics</h2>
          <div className="h-64">
            <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </motion.div>

        {/* Founding Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <h2 className="text-3xl font-bold mb-6">Founding Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {startupData.team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-600 mb-1">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Details Section */}
        <motion.div
          id="contact-details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <h2 className="text-3xl font-bold mb-6">Contact Details</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <EnvelopeIcon className="w-6 h-6 mr-2" />
              <span>{startupData.contact.email}</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-6 h-6 mr-2" />
              <span>{startupData.contact.phone}</span>
            </div>
            <div className="flex items-center">
              <LinkIcon className="w-6 h-6 mr-2" />
              <a
                href={startupData.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {startupData.contact.website}
              </a>
            </div>
            <div className="flex items-center">
              <LinkIcon className="w-6 h-6 mr-2" />
              <a
                href={startupData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {startupData.contact.linkedin}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Documents Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <h2 className="text-3xl font-bold mb-6">Documents</h2>
          <div className="space-y-4">
            <a
              href={startupData.pitchDeck}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <DocumentTextIcon className="w-5 h-5 mr-2" />
              Pitch Deck (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
