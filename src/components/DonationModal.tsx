'use client';

import { useSession } from '@/hooks/useSession';
import React, { useState } from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const { user } = useSession();
  const categories = [
    { value: 'General', label: 'General Fund' },
    { value: 'Education', label: 'Education' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Environment', label: 'Environment' },
    { value: 'Community', label: 'Community' },
  ];

  const [form, setForm] = useState({
    source_name: '',
    description: '',
    amount: '',
    category: 'General',
    payment_method: 'GCash',
  });

  const [submitted, setSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState('Donate Now');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setButtonText('Processing...');

    try {
      const res = await fetch('/api/donors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          ...form,
          source_name: user ? `${user.first_name} ${user.last_name}` : form.source_name,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setButtonText('✓ Added!');
        setSubmitted(true);
        setTimeout(() => {
          setButtonText('Thank you!');
        }, 1000);

        setForm({
          source_name: '',
          description: '',
          amount: '',
          category: 'General',
          payment_method: 'GCash',
        });
      } else {
        alert(data.error || 'Donation not recorded');
        setButtonText('Donate Now');
      }
    } catch (err) {
      alert(err);
      setButtonText('Donate Now');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-107 left-200 inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="bg-white w-full max-w-2xl rounded-lg p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>

        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">Hope Foundation</h1>

        <section className="mb-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your Generosity Makes a Difference
          </h2>
          <p className="text-gray-700">
            Every donation helps us continue our mission. Thank you for your support.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
          {/* Name Displayed but Not Editable */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">Name</label>
            <input
              name="source_name"
              type="text"
              readOnly
              value={user ? `${user.first_name} ${user.last_name}` : ''}
              className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-1">Message</label>
            <textarea
              name="description"
              rows={2}
              value={form.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Leave a message (optional)"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-1">Amount (₱)</label>
            <input
              name="amount"
              type="number"
              min="1"
              required
              value={form.amount}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter amount"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              {categories.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-1">Payment Method</label>
            <select
              name="payment_method"
              value={form.payment_method}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="GCash">GCash</option>
              <option value="Paymaya">Paymaya</option>
              <option value="Bank">Bank</option>
            </select>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 w-full"
            >
              {buttonText}
            </button>
          </div>

          {submitted && (
            <div className="text-green-600 font-semibold text-center mt-4">
              Thank you for your donation!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DonationModal;
