import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="bg-gradient-to-br from-green-300 via-blue-300 to-purple-400 min-h-screen font-hand">
      {/* Navbar */}
      <header className="bg-green-200 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-900">🌾 CROP DEAL</h1>
          <nav className="space-x-6 text-green-800 font-semibold">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">How it Works</a>
            <a href="#">Sign Up/Login</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 text-white">
        <h2 className="text-5xl font-bold mb-4">
          "Connecting Farmers and Dealers for a Transparent Marketplace"
        </h2>
        <p className="text-xl mt-4">
          Empowering rural agriculture with smart and fair trading.
        </p>
      </section>

      {/* Images Section */}
      <section className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-4">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="w-40 md:w-48 rounded-lg shadow-lg"
              alt="Dealer"
            />
            <p className="mt-4 text-lg">Smart Dealer</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://openart.ai/static/farmer-illustration.png" // replace with actual AI image
              className="w-48 md:w-56 rounded-xl shadow-lg"
              alt="Farmer AI"
            />
            <p className="mt-4 text-lg">Happy Farmer</p>
          </div>
        </div>
      </section>

      {/* Crop Price Tracker */}
      <section className="bg-white py-10 text-center">
        <h3 className="text-3xl font-bold text-green-900 mb-4">Live Crop Prices</h3>
        <div className="flex justify-center gap-8">
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h4 className="text-xl font-semibold">Wheat</h4>
            <p className="text-lg">₹2100 / Quintal</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            <h4 className="text-xl font-semibold">Rice</h4>
            <p className="text-lg">₹1950 / Quintal</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg shadow">
            <h4 className="text-xl font-semibold">Sugarcane</h4>
            <p className="text-lg">₹3000 / Quintal</p>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="bg-gradient-to-r from-green-300 to-green-500 py-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Need Help? Ask our AI Chatbot!</h3>
        <iframe
          src="https://your-chatbot-link.com" // Replace with actual chatbot
          title="AI Chatbot"
          className="w-4/5 h-96 mx-auto rounded-lg border border-white"
        ></iframe>
      </section>

      {/* Call to Action */}
      <section className="bg-green-300 py-8 text-center text-green-900">
        <h3 className="text-3xl font-bold mb-2">Join Crop Deal Today</h3>
        <p className="mb-4">Start buying or selling with transparency and trust</p>
        <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default App;
