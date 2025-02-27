import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterInvestor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    investmentStage: "Seed",
    interestedIndustries: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signup/investor", {
        ...formData,
        interestedIndustries: formData.interestedIndustries.split(","),
      });
      localStorage.setItem("token", res.data.token);
      alert("Registered Successfully");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Register as Investor</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full p-3 border bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 border bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3  bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* <input
            type="text"
            name="investmentStage"
            placeholder="Investment Stage"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="interestedIndustries"
            placeholder="Interested Industries (comma-separated)"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          /> */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login/investor" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterInvestor;
