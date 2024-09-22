"use client";

import { useState } from 'react';
import Button from '../../components/Button';

export default function WebsiteDesign() {
  const [industry, setIndustry] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Redirect to the budget page
    window.location.href = `/get-started/5/budget?industry=${industry}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-semibold text-black mb-4">Website Design</h1>
        <p className="text-2xl text-gray-600 mb-6">
          Discover how our custom website design solutions can elevate your brand.
        </p>
        <Button href="#get-started-form" className="bg-black text-white hover:bg-gray-800">
          Get Started
        </Button>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-black mb-12">How It Works</h2>
          <p className="text-lg text-gray-600 mb-6">
            We follow a simple process: understanding your needs, designing prototypes, refining the user interface, and launching your website with a strategic focus on conversion.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Whether it's a corporate site, an e-commerce platform, or a personal blog, our team provides a fully custom design that’s optimized for both desktop and mobile.
          </p>
        </div>
      </section>

      {/* Get Started Form Section */}
      <section id="get-started-form" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-black mb-12">Select Your Industry</h2>
          <form onSubmit={handleSubmit}>
            <select
              className="border border-gray-300 rounded-lg p-4 w-80 mb-4"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
            >
              <option value="">Choose your industry</option>
              <option value="technology">Technology</option>
              <option value="retail">Retail</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
            </select>
            <br />
            <button type="submit" className="bg-black text-white hover:bg-gray-800">
              Continue
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}