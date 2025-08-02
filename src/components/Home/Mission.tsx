import { Eye, Target } from "lucide-react";
import Image from 'next/image'


const Mission = () => (
          <section id="mission" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Purpose &
              <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by compassion and guided by purpose, we work tirelessly to create 
              meaningful change in the world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower communities and transform lives through sustainable programs 
                  that address education, healthcare, and economic development. We believe 
                  every person deserves the opportunity to thrive and reach their full potential.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">Education</span>
                  <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">Healthcare</span>
                  <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">Community</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where every community has access to the resources and opportunities 
                  needed to build a better future. We envision sustainable development that 
                  preserves dignity while creating lasting positive impact.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Sustainability</span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Impact</span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Growth</span>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="space-y-6">
                <div className="relative w-full h-64 rounded-2xl shadow-lg group cursor-pointer overflow-hidden">
                    <Image
                    src="https://drive.google.com/uc?export=view&id=163tqXya2aZHtZlyYt_b1Z3w0H2K2V2J8"
                    alt="Community Impact"
                    fill
                    className="object-cover group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">Community Programs</h4>
                    <p className="text-sm opacity-90">Empowering local communities</p>
                    </div>
                </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="relative w-full h-48 rounded-2xl shadow-lg group cursor-pointer overflow-hidden">
                    <Image
                    
                        src="https://drive.google.com/uc?export=view&id=1xvw4bu0br3p_iv_Im-7VfOeaPK0kkFzs"
                        alt="Education"
                        fill
                        className="object-cover group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                        <h5 className="font-bold">Education</h5>
                    </div>
                </div>
                
                <div className="relative w-full h-48 rounded-2xl shadow-lg group cursor-pointer overflow-hidden">
                    <Image
                        src="https://drive.google.com/uc?export=view&id=1EI5ZncK4EO-i6Zv-_U0Lqjkar-5k9eWi"
                        alt="Healthcare"
                        fill
                        className="object-cover group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                        <h5 className="font-bold">Healthcare</h5>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
);

export default Mission;