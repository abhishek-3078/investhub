import React, { useState } from "react";

const startups = [
  {
    id: 1,
    name: "Startup One",
    founder: "Alice Johnson",
    industry: "Tech",
    location: "San Francisco",
    funding: 500000,
    fundingStage: "Seed",
    businessModel: "B2B",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Startup Two",
    founder: "Bob Smith",
    industry: "Health",
    location: "New York",
    funding: 1000000,
    fundingStage: "Series A",
    businessModel: "B2C",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Startup Three",
    founder: "Charlie Davis",
    industry: "Finance",
    location: "Chicago",
    funding: 750000,
    fundingStage: "Series B",
    businessModel: "D2C",
    image: "https://via.placeholder.com/100",
  },
];

const StartupSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("");
  const [filterFundingStage, setFilterFundingStage] = useState("");
  const [filterBusinessModel, setFilterBusinessModel] = useState("");
  const [sortKey, setSortKey] = useState("");

  const filteredStartups = startups
    .filter(
      (startup) =>
        startup.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterIndustry ? startup.industry === filterIndustry : true) &&
        (filterFundingStage
          ? startup.fundingStage === filterFundingStage
          : true) &&
        (filterBusinessModel
          ? startup.businessModel === filterBusinessModel
          : true)
    )
    .sort((a, b) => {
      if (sortKey === "name") {
        return a?.name.localeCompare(b?.name);
      } else if (sortKey === "funding") {
        return b?.funding - a?.funding;
      }
      return 0;
    });

  if (loading) {
    return (
      <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-2xl text-blue-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold mb-3 text-white">Filters</h2>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 text-sm border border-gray-700 bg-gray-900 rounded-md mb-3 text-white"
          />
          <select
            onChange={(e) => setFilterIndustry(e.target.value)}
            value={filterIndustry}
            className="w-full p-2 text-sm border border-gray-700 bg-gray-900 rounded-md mb-3 text-white"
          >
            <option value="">All Industries</option>
            <option value="Tech">Tech</option>
            <option value="Health">Health</option>
            <option value="Finance">Finance</option>
          </select>
          <select
            onChange={(e) => setFilterFundingStage(e.target.value)}
            value={filterFundingStage}
            className="w-full p-2 text-sm border border-gray-700 bg-gray-900 rounded-md mb-3 text-white"
          >
            <option value="">All Funding Stages</option>
            <option value="Seed">Seed</option>
            <option value="Series A">Series A</option>
            <option value="Series B">Series B</option>
          </select>
          <select
            onChange={(e) => setFilterBusinessModel(e.target.value)}
            value={filterBusinessModel}
            className="w-full p-2 text-sm border border-gray-700 bg-gray-900 rounded-md mb-3 text-white"
          >
            <option value="">All Business Models</option>
            <option value="B2B">B2B</option>
            <option value="B2C">B2C</option>
            <option value="D2C">D2C</option>
          </select>
          <select
            onChange={(e) => setSortKey(e.target.value)}
            value={sortKey}
            className="w-full p-2 text-sm border border-gray-700 bg-gray-900 rounded-md text-white"
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="funding">Funding</option>
          </select>
        </div>

      {/* Startup Cards */}
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-semibold mb-4">Startup Listings</h1>
        <div className="grid gap-4">
          {filteredStartups.length > 0 ? (
            filteredStartups.map((startup) => (
              <div
                key={startup.id}
                className="flex items-center p-3 border border-gray-700 rounded-lg bg-gray-800 shadow-sm"
              >
                <img
                  src={startup.image}
                  alt={startup.name}
                  className="w-16 h-16 object-cover rounded-md mr-3"
                />
                <div>
                  <h2 className="text-lg font-semibold text-blue-400">
                    {startup.name}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Founder: {startup.founder}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Funding: ${startup.funding.toLocaleString()}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Industry: {startup.industry}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Location: {startup.location}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Funding Stage: {startup.fundingStage}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Business Model: {startup.businessModel}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No startups found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartupSearch;
