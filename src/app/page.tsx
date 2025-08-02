'use client'

import {  Users, Calendar, DollarSign, Globe, Award } from 'lucide-react';
import Hero from '@/components/Home/Hero'
import Mission from '@/components/Home/Mission'
import CTA from '@/components/Home/CTA'


export default function FoundationHomepage() {

  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Mock donor data - you can replace this with your database connection
  const donors = [
    { name: "Sarah Johnson", amount: 5000, date: "2025-01-15", type: "major" },
    { name: "Michael Chen", amount: 2500, date: "2025-01-12", type: "regular" },
    { name: "Emily Rodriguez", amount: 10000, date: "2025-01-10", type: "major" },
    { name: "David Kim", amount: 1000, date: "2025-01-08", type: "regular" },
    { name: "Jessica Taylor", amount: 7500, date: "2025-01-05", type: "major" },
    { name: "Robert Wilson", amount: 500, date: "2025-01-03", type: "regular" },
    { name: "Anna Kowalski", amount: 3000, date: "2025-01-01", type: "regular" },
    { name: "James Martinez", amount: 15000, date: "2024-12-28", type: "major" },
    { name: "Lisa Anderson", amount: 800, date: "2024-12-25", type: "regular" },
    { name: "Thomas Brown", amount: 4200, date: "2024-12-22", type: "regular" },
    { name: "Maria Garcia", amount: 6000, date: "2024-12-20", type: "major" },
    { name: "John Smith", amount: 1200, date: "2024-12-18", type: "regular" }
  ];

  // const formatCurrency = (amount) => {
  //   return new Intl.NumberFormat('en-US', {
  //     style: 'currency',
  //     currency: 'USD',
  //     minimumFractionDigits: 0
  //   }).format(amount);
  // };

  // const formatDate = (dateString) => {
  //   return new Date(dateString).toLocaleDateString('en-US', {
  //     year: 'numeric',
  //     month: 'short',
  //     day: 'numeric'
  //   });
  // };

  return (
    <div className="min-h-screen bg-white text-gray-900">


      {/* Hero Section - Full Screen with Image */}
      <Hero/>

      {/* Mission & Vision Section */}
      <Mission/>

      {/* Donors Section */}
      <section id="donors" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Amazing
              <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Supporters
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thanks to the generosity of our donors, we continue to make a meaningful 
              impact in communities worldwide.
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {/* {formatCurrency(donors.reduce((sum, donor) => sum + donor.amount, 0))} */}
              </h3>
              <p className="text-gray-600">Total Raised</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{donors.length}</h3>
              <p className="text-gray-600">Generous Donors</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Communities Served</p>
            </div>
          </div>

          {/* Donors List */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white">
              <h3 className="text-2xl font-bold flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Recent Donations
              </h3>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              <div className="divide-y divide-gray-200">
                {donors.map((donor, index) => (
                  <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          donor.type === 'major' 
                            ? 'bg-gradient-to-r from-red-500 to-red-600' 
                            : 'bg-gradient-to-r from-gray-500 to-gray-600'
                        }`}>
                          {donor.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{donor.name}</h4>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {/* {formatDate(donor.date)} */}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${
                          donor.type === 'major' ? 'text-red-600' : 'text-gray-700'
                        }`}>
                          {/* {formatCurrency(donor.amount)} */}
                        </div>
                        {donor.type === 'major' && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Major Donor
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA/>

      {/* Footer */}

    </div>
  );
}
