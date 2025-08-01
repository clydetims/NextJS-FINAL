// app/about/page.tsx

import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-red-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-6">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            Our mission is to promote transparency in charitable giving by providing a platform where donors can clearly see how their contributions are used. 
            We aim to empower charities with a stronger online presence and give visitors an easy, secure, and meaningful way to support causes they believe in.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            Our vision is to build a world where trust in charitable organizations is strengthened through openness, and where technology bridges the gap 
            between donors and the impact they make. We envision a future where every donation inspires confidence and creates lasting change.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
