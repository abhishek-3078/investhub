// LandingPage.jsx
export default function LandingPage() {
    return (
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen">
        {/* Hero Section */}
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-white">
            Connect Startups & Investors Smarter
          </h1>
          <div className="mt-8">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
  
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 p-8">
          {['Matching Algorithm', 'Analytics', 'Due Diligence'].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }