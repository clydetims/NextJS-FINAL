'use client';

import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-yellow-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-6">About The Puso ng Ama Foundation</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Puso ng Ama Foundation
          </h2>
          <p className="text-gray-700 text-lg">
            In 2005 father Paul Uwemedimo responded to the situation in Payatas and established 
            the PNA foundation which means HEART OF THE FATHER with the aim of personal and social 
            transformation of individuals, families and communities. This is achieved through a 
            child and youth development, education, human and spiritual formation and community 
            development, income generation, health and property ownership.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Puso ng Ama Mission</h2>
          <p className="text-gray-700 text-lg">
            The mission of Puso ng Ama (PNA) is to help people, especially those who are materially 
            poor to experience, know, accept, be reconciled by, be healed by, be transformed by and be 
            compelled to action by God's steadfast, merciful, gracious and infinite love.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Global Impact</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
            <li>Over 10,000+ wishes submitted online</li>
            <li>512+ wishes helped and realized worldwide</li>
            <li>300,000+ supporters from global communities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Executive Board of Directors</h2>
          <ul className="text-gray-700 text-lg space-y-1">
            <li><strong>Rev. Paul Uwemedimo</strong> – President</li>
            <li><strong>Emma Randal</strong> – Vice President</li>
            <li><strong>Noel Yolores</strong> – Executive Director</li>
            <li><strong>Kris Romanillos</strong> – Youth Coordinator</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Join Us</h2>
          <p className="text-gray-700 text-lg">
            We invite you to join us in our mission to spread hope, love, and kindness across the globe. 
            Together, we can make a difference in the lives of those who need it most.      
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
