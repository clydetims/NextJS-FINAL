'use client';
import { useSession } from '@/hooks/useSession';
import Link from 'next/link';

export default function Home() {
  const { user } = useSession();

  return (
    <main className="min-h-screen bg-yellow-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Puso ng Ama Foundation
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Building Better Communities Together.<br />
            Join us in spreading hope, love, and kindness across the globe.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/donate"
              className="bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-red-700 transition"
            >
              Donate Now
            </Link>
            <Link
              href="/register"
              className="bg-yellow-400 text-red-700 px-6 py-3 rounded font-bold hover:bg-yellow-500 transition"
            >
              Become a Volunteer
            </Link>
          </div>
        </section>

        {/* Impact Highlights */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <span className="text-red-600 text-4xl font-bold">10,000+</span>
            <div className="text-gray-700 mt-2">Wishes Submitted</div>
          </div>
          <div>
            <span className="text-red-600 text-4xl font-bold">512+</span>
            <div className="text-gray-700 mt-2">Wishes Realized</div>
          </div>
          <div>
            <span className="text-red-600 text-4xl font-bold">300,000+</span>
            <div className="text-gray-700 mt-2">Supporters Worldwide</div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            We help people, especially those who are materially poor, to experience, know, and be transformed by God's steadfast, merciful, gracious, and infinite love. We focus on child and youth development, education, human and spiritual formation, and community development.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Ready to make a difference?
          </h3>
          <Link
            href="/about"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition"
          >
            Learn More About Us
          </Link>
        </section>

        {/* User Role (for demonstration) */}
        <div className="mt-8 text-gray-500 text-center">
          {user ? <div>Your role: {user.role}</div> : <div>Loading...</div>}
        </div>
      </div>
    </main>
  );
}