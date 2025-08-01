import { Heart } from 'lucide-react';
import { Facebook, Instagram } from 'react-feather';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          

          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold">Hope Foundation</span>
          </div>


          <section className="mb-6 md:mb-0 text-center">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/pusongama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:underline"
              >
                <Facebook className="w-6 h-6" />
                <span>Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/pusongamamisyonero/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-pink-500 hover:underline"
              >
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </a>
            </div>
          </section>

          <div className="text-center font-semibold text-sm text-gray-400">
            <p>© 2024 Hope Foundation. All rights reserved.</p>
            <p>Building better communities together.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
