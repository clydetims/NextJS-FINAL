import { Heart, ArrowDown} from 'lucide-react';
import Image from 'next/image'


// Hero Component
const Hero = () => (
      <section id="hero" className="relative mt-20 h-[calc(100vh-80px)] flex justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="https://drive.google.com/uc?export=view&id=1UzGiXpzKlDVZ8OAnkwHiZ2n0k5sOrM1Y"
            fill
            alt="Foundation Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-[calc(100vh-80px)] z-10 mx-auto text-white px-6 flex flex-col w-screen max-w-7xl">
          <h1 className="text-5xl pt-50 md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Building Hope,
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Changing Lives
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed opacity-90">
            Together, we create lasting impact in communities around the world through 
            compassion, dedication, and unwavering commitment to positive change.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 flex items-center">
              Make a Donation
              <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            
            <button className="px-8 py-4 border-2 border-white/80 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn Our Story
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/80" />
          </div>
        </div>
      </section>
);

export default Hero;