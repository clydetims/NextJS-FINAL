'use client';

import React, { useState } from 'react';

const DonatePage = () => {
  const [form, setForm] = useState({
    name: '',
    message: '',
    amount: '',
    method: 'GCash',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can handle the donation logic (API call, etc.)
  };

  return (
    <main className="min-h-screen bg-yellow-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
          Donate to Puso ng Ama Foundation
        </h1>

        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Your Generosity Makes a Difference
          </h2>
          <p className="text-gray-700 text-lg">
            Every donation helps us continue our mission to support the materially poor, empower youth, and build stronger communities.<br />
            Thank you for being part of our journey of hope, love, and transformation.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-800 font-medium mb-1">
              Donation Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
              placeholder="Leave a message (optional)"
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-gray-800 font-medium mb-1">
              Donation Amount (₱)
            </label>
            <input
              id="amount"
              name="amount"
              type="number"
              min="1"
              required
              value={form.amount}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label htmlFor="method" className="block text-gray-800 font-medium mb-1">
              Payment Method
            </label>
            <select
              id="method"
              name="method"
              value={form.method}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
            >
              <option value="GCash">GCash</option>
              <option value="Paymaya">Paymaya</option>
              <option value="Bank">Bank</option>
            </select>
          </div>
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition w-full"
            >
              Donate Now
            </button>
          </div>
          {submitted && (
            <div className="text-green-600 font-semibold text-center mt-4">
              Thank you for your donation!
            </div>
          )}
        </form>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thank You For Your Support!</h2>
          <p className="text-gray-700 text-lg">
            Your kindness brings hope and change to countless lives. Together, we can make a lasting impact.
          </p>
        </section>
      </div>
    </main>
  );
};

export default DonatePage;