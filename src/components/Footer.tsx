import { Heart } from 'lucide-react'
import { Facebook, Instagram} from 'react-feather'
import Link from 'next/link'

export default function Footer() {
    return(
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Hope Foundation</span>
              </div>
              <p className="text-gray-400">
                Building hope and changing lives through compassion and dedication.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">Programs</Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">Impact</Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">News</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">Donate</Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">Volunteer</Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">Partner</Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">Fundraise</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@foundation.org</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Hope Street</p>
              </div>
            </div>
          </div>

            <div className='flex space-x-2'>
                <div>
                    Follow us on
                </div>
                    <Facebook href='/facebook.com'/>
                    <Instagram/>
            </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400">© 2025 Foundation. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    )
}