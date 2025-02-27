import React from 'react';
import {
  CurrencyDollarIcon,
  BuildingOffice2Icon,
  ClipboardDocumentListIcon,
  EnvelopeIcon,
  TrophyIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function InvestorProfile() {
  const investorData = {
    name: "Jane Doe",
    netWorth: "$50B",
    investments: [
      { name: "EcoTech Solutions", description: "Leader in sustainable tech", year: 2022 },
      { name: "GreenEnergy Innovations", description: "Pioneering renewable energy solutions", year: 2021 },
      { name: "Clean Future Inc.", description: "Innovative waste management", year: 2023 },
      { name: "TechPioneers", description: "Early-stage tech investments", year: 2020 },
    ],
    founderOf: "VentureCapitalX",
    bio: "Jane Doe is a visionary investor with over 20 years of experience in the tech and startup world. She excels at identifying disruptive technologies and nurturing early-stage companies.",
    achievements: [
      "Recipient of the 2020 Entrepreneur of the Year Award",
      "Featured in Forbes' Top Investors List for 2022",
    ],
    investmentStrategy:
      "Focused on long-term value creation, Jane strategically invests in startups that demonstrate strong growth potential, innovative business models, and a clear path to market leadership. She believes in hands-on mentorship and leverages her vast network to help portfolio companies succeed.",
    recentInvestments: [
      { name: "FutureTech", description: "Revolutionizing AI integration", date: "2024-01-15" },
      { name: "MedInnovate", description: "Cutting-edge healthcare technology", date: "2023-11-10" },
    ],
    social: {
      website: "https://www.venturecapitalx.com",
      twitter: "https://twitter.com/janedoe",
      linkedin: "https://www.linkedin.com/in/janedoe",
    },
    contact: {
      email: "jane.doe@venturecapitalx.com",
      phone: "+1 123 456 7890",
    },
  };

  return (
    <div className="w-screen min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white  drop-shadow-xl"
          >
            {investorData.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto italic"
          >
            {investorData.bio}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex items-center justify-center space-x-6"
          >
            <div className="flex items-center space-x-1">
              <CurrencyDollarIcon className="h-6 w-6 text-white" />
              <span className="text-lg font-medium text-white">{investorData.netWorth}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BuildingOffice2Icon className="h-6 w-6 text-white" />
              <span className="text-lg font-medium text-white">{investorData.founderOf}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Investments Portfolio Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Investments Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {investorData.investments.map((startup, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border rounded-xl hover:shadow-2xl transition-shadow dark:border-gray-700 dark:bg-gray-700"
              >
                <ClipboardDocumentListIcon className="h-8 w-8 text-blue-600" />
                <span className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {startup.name}
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                  {startup.description}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Year: {startup.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Strategy Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Investment Strategy
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{investorData.investmentStrategy}</p>
        </div>

        {/* Recent Investments Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Recent Investments
          </h2>
          <div className="space-y-4">
            {investorData.recentInvestments.map((investment, index) => (
              <div
                key={index}
                className="p-4 border rounded-xl hover:shadow-2xl transition-shadow dark:border-gray-700 dark:bg-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                  {investment.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {investment.description}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Date: {investment.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social & Online Presence Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Social & Online Presence
          </h2>
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <LinkIcon className="h-6 w-6 text-blue-600" />
              <a
                href={investorData.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Website
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <LinkIcon className="h-6 w-6 text-blue-600" />
              <a
                href={investorData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Twitter
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <LinkIcon className="h-6 w-6 text-blue-600" />
              <a
                href={investorData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Notable Achievements
          </h2>
          <ul className="space-y-2">
            {investorData.achievements.map((achievement, index) => (
              <li key={index} className="flex items-center space-x-2">
                <TrophyIcon className="h-6 w-6 text-blue-600" />
                <span className="text-gray-800 dark:text-gray-200">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Get in Touch
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-6 w-6 text-blue-600" />
              <span className="text-gray-800 dark:text-gray-200">{investorData.contact.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-6 w-6 text-blue-600" />
              <span className="text-gray-800 dark:text-gray-200">{investorData.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
