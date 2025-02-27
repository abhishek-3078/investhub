import { useState } from 'react';
import { MapPinIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

import { ChartBarIcon, UserGroupIcon, CurrencyDollarIcon, DocumentTextIcon, LinkIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function StartupProfile() {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data - replace with real data from your backend
  const startupData = {
    name: "EcoTech Solutions",
    industry: "Clean Energy",
    location: "San Francisco, CA",
    stage: "Seed Stage",
    fundingSought: "$500,000",
    valuation: "$5M",
    team: [
      { name: "John Smith", role: "CEO", bio: "Ex-Google, 10+ years in energy sector" },
      { name: "Sarah Lee", role: "CTO", bio: "PhD in Material Science, MIT graduate" }
    ],
    problemStatement: "Traditional energy sources remain inefficient and environmentally harmful",
    solution: "AI-powered energy optimization platform reducing waste by 40%",
    marketSize: "$50B+ global renewable energy market",
    businessModel: "SaaS subscription + transaction fees",
    traction: {
      users: "1500+",
      revenue: "$200K ARR",
      growth: "300% YoY"
    },
    documents: {
      pitchDeck: "/documents/pitch.pdf",
      financials: "/documents/financials.pdf"
    }
  };

  const chartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Revenue Growth',
      data: [65000, 89000, 120000, 200000],
      backgroundColor: '#3b82f6'
    }]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{startupData.name}</h1>
            <div className="mt-2 flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {startupData.industry}
              </span>
              <span className="text-gray-600">
              <MapPinIcon className="w-6 h-6 text-gray-500" />
                {startupData.location}
              </span>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            Contact Team
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-2">
            <CurrencyDollarIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">Funding Stage</h3>
          </div>
          <p className="text-gray-600">{startupData.stage}</p>
          <div className="mt-4">
            <p className="text-2xl font-bold">{startupData.fundingSought}</p>
            <p className="text-gray-600">Funding Sought</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-2">
            <ChartBarIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">Valuation</h3>
          </div>
          <p className="text-gray-600">Current Valuation</p>
          <p className="text-2xl font-bold mt-4">{startupData.valuation}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-2">
            <UserGroupIcon className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">Traction</h3>
          </div>
          <div className="space-y-2">
            <p><span className="font-semibold">{startupData.traction.users}</span> Active Users</p>
            <p><span className="font-semibold">{startupData.traction.revenue}</span> Annual Revenue</p>
            <p><span className="font-semibold">{startupData.traction.growth}</span> Growth</p>
          </div>
        </div>
      </div>

      {/* Pitch Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Investment Pitch</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">The Problem</h3>
            <p className="text-gray-600">{startupData.problemStatement}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Our Solution</h3>
            <p className="text-gray-600">{startupData.solution}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Market Opportunity</h3>
            <p className="text-gray-600">{startupData.marketSize}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Business Model</h3>
            <p className="text-gray-600">{startupData.businessModel}</p>
          </div>
        </div>
      </div>

      {/* Traction Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Growth Metrics</h2>
        <div className="h-64">
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Founding Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {startupData.team.map((member, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon className="h-8 w-8 text-gray-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documents Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Documents</h2>
        <div className="space-y-4">
          <a href={startupData.documents.pitchDeck} className="flex items-center text-blue-600 hover:text-blue-800">
            <DocumentTextIcon className="h-5 w-5 mr-2" />
            Pitch Deck (PDF)
          </a>
          <a href={startupData.documents.financials} className="flex items-center text-blue-600 hover:text-blue-800">
            <DocumentTextIcon className="h-5 w-5 mr-2" />
            Financial Projections (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}