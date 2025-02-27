import React, { useState } from "react";

const investors = [
  {
    id: 1,
    name: "John Doe",
    firm: "Alpha Ventures",
    investmentFocus: "Tech",
    fundingStagePreferred: ["Seed", "Series A"],
    ticketSize: 500000,
    linkedin: "https://linkedin.com/in/johndoe",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Sarah Lee",
    firm: "Beta Capital",
    investmentFocus: "Healthcare",
    fundingStagePreferred: ["Series A", "Series B"],
    ticketSize: 1000000,
    linkedin: "https://linkedin.com/in/sarahlee",
    image: "https://via.placeholder.com/100",
  },
];

const InvestorSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterFocus, setFilterFocus] = useState("");
  const [filterStage, setFilterStage] = useState("");
  const [sortKey, setSortKey] = useState("");

  const filteredInvestors = investors
    .filter(
      (investor) =>
        investor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterFocus ? investor.investmentFocus === filterFocus : true) &&
        (filterStage
          ? investor.fundingStagePreferred.includes(filterStage)
          : true)
    )
    .sort((a, b) => {
      if (sortKey === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortKey === "ticketSize") {
        return b.ticketSize - a.ticketSize;
      }
      return 0;
    });

  return (
    <div className="flex bg-gray-900 text-white min-h-screen w-full px-8">
      {/* Sidebar Filters */}
      <div className="w-1/4 p-6 bg-gray-800 min-h-screen rounded-lg">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-700 bg-gray-900 rounded-md mb-4"
        />
        <select
          onChange={(e) => setFilterFocus(e.target.value)}
          value={filterFocus}
          className="w-full p-2 border border-gray-700 bg-gray-900 rounded-md mb-4"
        >
          <option value="">All Focus Areas</option>
          <option value="Tech">Tech</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Finance">Finance</option>
        </select>
        <select
          onChange={(e) => setFilterStage(e.target.value)}
          value={filterStage}
          className="w-full p-2 border border-gray-700 bg-gray-900 rounded-md mb-4"
        >
          <option value="">All Funding Stages</option>
          <option value="Seed">Seed</option>
          <option value="Series A">Series A</option>
          <option value="Series B">Series B</option>
        </select>
        <select
          onChange={(e) => setSortKey(e.target.value)}
          value={sortKey}
          className="w-full p-2 border border-gray-700 bg-gray-900 rounded-md mb-4"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="ticketSize">Ticket Size</option>
        </select>
      </div>

      {/* Investor Cards */}
      <div className="w-3/4 p-6">
        <h1 className="text-3xl font-bold mb-6">Investor Listings</h1>
        <div className="grid gap-6">
          {filteredInvestors.length > 0 ? (
            filteredInvestors.map((investor) => (
              <div
                key={investor.id}
                className="flex items-center p-4 border border-gray-700 rounded-lg bg-gray-800 shadow-md"
              >
                <img
                  src={investor.image}
                  alt={investor.name}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold text-blue-400">
                    {investor.name}
                  </h2>
                  <p className="text-gray-400 font-semibold">
                    Firm: {investor.firm}
                  </p>
                  <p className="text-gray-400 font-semibold">
                    Ticket Size: ${investor.ticketSize.toLocaleString()}
                  </p>
                  <p className="text-gray-400">
                    Focus: {investor.investmentFocus}
                  </p>
                  <p className="text-gray-400">
                    Preferred Stages:{" "}
                    {investor.fundingStagePreferred.join(", ")}
                  </p>
                  <a
                    href={investor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No investors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestorSearch;
