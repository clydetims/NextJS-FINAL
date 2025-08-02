import { Heart, Handshake } from "lucide-react";

const CTA = () => (
      <section className="py-20 px-6 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Mission Today
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Every donation, no matter the size, helps us create lasting change 
            in communities that need it most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-red-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Heart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Donate Now
            </button>
            
            <button className="px-8 py-4 border-2 border-white rounded-xl text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
              <Handshake className="inline w-5 h-5 mr-2" />
              Become a Partner
            </button>
          </div>
        </div>
      </section>
)

export default CTA;