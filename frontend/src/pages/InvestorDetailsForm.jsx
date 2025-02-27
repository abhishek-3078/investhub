import React, { useState } from "react";

const InvestorDetailsForm = () => {
  const [investorBio, setInvestorBio] = useState("");
  const [investmentStrategy, setInvestmentStrategy] = useState("");
  const [portfolio, setPortfolio] = useState([]);
  const [recentInvestments, setRecentInvestments] = useState([]);
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [mobile, setMobile] = useState("");
  const [achievements, setAchievements] = useState([]);
  const [investmentFirm, setInvestmentFirm] = useState("");
  const [totalInvestment, setTotalInvestment] = useState();

  const handleAddPortfolio = () => {
    setPortfolio([...portfolio, { startupName: "", industry: "", year: "" }]);
  };

  const handlePortfolioChange = (index, field, value) => {
    const updatedPortfolio = [...portfolio];
    updatedPortfolio[index][field] = value;
    setPortfolio(updatedPortfolio);
  };

  const handleRemovePortfolio = (index) => {
    setPortfolio(portfolio.filter((_, i) => i !== index));
  };

  const handleAddRecentInvestment = () => {
    setRecentInvestments([
      ...recentInvestments,
      { startupName: "", industry: "", year: "" },
    ]);
  };

  const handleRecentInvestmentChange = (index, field, value) => {
    const updatedInvestments = [...recentInvestments];
    updatedInvestments[index][field] = value;
    setRecentInvestments(updatedInvestments);
  };

  const handleRemoveRecentInvestment = (index) => {
    setRecentInvestments(recentInvestments.filter((_, i) => i !== index));
  };

  const handleAddAchievement = () => {
    setAchievements([...achievements, ""]);
  };

  const handleAchievementChange = (index, value) => {
    const updatedAchievements = [...achievements];
    updatedAchievements[index] = value;
    setAchievements(updatedAchievements);
  };

  const handleRemoveAchievement = (index) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const investorData = {
      investorBio,
      investmentStrategy,
      portfolio,
      recentInvestments,
      website,
      twitter,
      linkedin,
      mobile,
      achievements,
    };
    console.log("Submitted Investor Data:", investorData);
  };

  return (
    <div className="w-screen min-h-screen p-6 bg-gray-900 text-white flex justify-center">
      <div className="max-w-3xl w-full bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Investor Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Investor Bio"
            value={investorBio}
            onChange={(e) => setInvestorBio(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <input
            type="number"
            placeholder="Total Investment"
            value={totalInvestment}
            onChange={(e) => setTotalInvestment(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <input
            type="text"
            placeholder="Investment Firm"
            value={totalInvestment}
            onChange={(e) => setInvestmentFirm(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <input
            type="text"
            placeholder="Investment Strategy"
            value={investmentStrategy}
            onChange={(e) => setInvestmentStrategy(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />

          {/* Portfolio */}
          <div>
            <h3 className="font-bold">Portfolio</h3>
            {portfolio.map((item, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Startup Name"
                  value={item.startupName}
                  onChange={(e) =>
                    handlePortfolioChange(index, "startupName", e.target.value)
                  }
                  className="p-2 bg-gray-700 border border-gray-600 rounded"
                />
                <input
                  type="text"
                  placeholder="Industry"
                  value={item.industry}
                  onChange={(e) =>
                    handlePortfolioChange(index, "industry", e.target.value)
                  }
                  className="p-2 bg-gray-700 border border-gray-600 rounded"
                />
                <input
                  type="number"
                  placeholder="Year"
                  value={item.year}
                  onChange={(e) =>
                    handlePortfolioChange(index, "year", e.target.value)
                  }
                  className="p-2 bg-gray-700 border border-gray-600 rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemovePortfolio(index)}
                  className="text-red-500"
                >
                  ✖
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddPortfolio}
              className="text-blue-400"
            >
              + Add Portfolio
            </button>
          </div>

          {/* Recent Investments */}
          <div>
            <h3 className="font-bold">Recent Investments</h3>
            {recentInvestments.map((item, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Startup Name"
                  value={item.startupName}
                  onChange={(e) =>
                    handleRecentInvestmentChange(
                      index,
                      "startupName",
                      e.target.value
                    )
                  }
                  className="p-2 bg-gray-700 border border-gray-600 rounded"
                />
                <input
                  type="text"
                  placeholder="Industry"
                  value={item.industry}
                  onChange={(e) =>
                    handleRecentInvestmentChange(
                      index,
                      "industry",
                      e.target.value
                    )
                  }
                  className="p-2 bg-gray-700 border border-gray-600 rounded"
                />
                <input
                  type="number"
                  placeholder="Year"
                  value={item.year}
                  onChange={(e) =>
                    handleRecentInvestmentChange(index, "year", e.target.value)
                  }
                  className="p-2 bg-gray-700 border border-gray-600 rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveRecentInvestment(index)}
                  className="text-red-500"
                >
                  ✖
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddRecentInvestment}
              className="text-blue-400"
            >
              + Add Investment
            </button>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="font-bold">Achievements</h3>
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Achievement"
                  value={achievement}
                  onChange={(e) =>
                    handleAchievementChange(index, e.target.value)
                  }
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveAchievement(index)}
                  className="text-red-500"
                >
                  ✖
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddAchievement}
              className="text-blue-400"
            >
              + Add Achievement
            </button>
          </div>

          <input
            type="url"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <input
            type="url"
            placeholder="LinkedIn"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <input
            type="url"
            placeholder="Twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <button type="submit" className="bg-blue-600 px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InvestorDetailsForm;
