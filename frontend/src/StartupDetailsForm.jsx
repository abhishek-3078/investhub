import React, { useState } from "react";

const StartupForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    mobile: "",
    monthlyRevenue: "",
    fundsRaised: "",
    customers: "",
    pitch: {
      problem: "",
      solution: "",
      opportunities: "",
      businessModel: "",
    },
    revenues: {
      quarter1: "",
      quarter2: "",
      quarter3: "",
      quarter4: "",
    },
    ceo: { name: "", experience: "", photo: null },
    cto: { name: "", experience: "", photo: null },
    pitchDeck: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (e, section) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [section]: { ...formData[section], [name]: value },
    });
  };

  const handleFileChange = (e, section, key) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [section]: { ...formData[section], [key]: file },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Startup Details Form
        </h2>

        <label className="block mb-2">Startup Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-700 rounded-md"
          required
        />

        <label className="block mb-2">Mobile No:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-700 rounded-md"
          pattern="\d*"
          required
        />

        <label className="block mb-2">Monthly Revenue:</label>
        <input
          type="number"
          name="monthlyRevenue"
          value={formData.monthlyRevenue}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-700 rounded-md"
          required
        />

        <label className="block mb-2">Funds Raised:</label>
        <input
          type="number"
          name="fundsRaised"
          value={formData.fundsRaised}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-700 rounded-md"
          required
        />

        <label className="block mb-2">Number of Customers:</label>
        <input
          type="number"
          name="customers"
          value={formData.customers}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-700 rounded-md"
          required
        />

        <h3 className="text-xl font-semibold mb-2">Pitch</h3>
        {Object.keys(formData.pitch).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            value={formData.pitch[key]}
            onChange={(e) => handleNestedChange(e, "pitch")}
            placeholder={key}
            className="w-full p-2 mb-2 bg-gray-700 rounded-md"
            required
          />
        ))}

        <h3 className="text-xl font-semibold mb-2">Quarterly Revenue</h3>
        {Object.keys(formData.revenues).map((key) => (
          <input
            key={key}
            type="number"
            name={key}
            value={formData.revenues[key]}
            onChange={(e) => handleNestedChange(e, "revenues")}
            placeholder={key}
            className="w-full p-2 mb-2 bg-gray-700 rounded-md"
            required
          />
        ))}

        {["ceo", "cto"].map((role) => (
          <div key={role} className="mb-4">
            <h3 className="text-xl font-semibold capitalize">
              {role.toUpperCase()}
            </h3>
            <input
              type="text"
              name="name"
              value={formData[role].name}
              onChange={(e) => handleNestedChange(e, role)}
              placeholder="Name"
              className="w-full p-2 mb-2 bg-gray-700 rounded-md"
              required
            />
            <input
              type="text"
              name="experience"
              value={formData[role].experience}
              onChange={(e) => handleNestedChange(e, role)}
              placeholder="Experience"
              className="w-full p-2 mb-2 bg-gray-700 rounded-md"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, role, "photo")}
              className="w-full p-2 mb-2 bg-gray-700 rounded-md"
              required
            />
          </div>
        ))}

        <label className="block mb-2">Upload Pitch Deck (PDF):</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) =>
            setFormData({ ...formData, pitchDeck: e.target.files[0] })
          }
          className="w-full p-2 mb-4 bg-gray-700 rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StartupForm;
