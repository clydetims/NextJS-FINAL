'use client'
import { User, Users, Heart, Shield, CheckCircle } from 'lucide-react'

import RegisterForm from '../../../components/forms/RegisterForm';


// interface NavItem {
//   href:string
//   label: string
// }



// const navItems: NavItem[] = [
//   {href: '/', label: 'Home'},
//   {href: '/about', label: 'About'},
//   {href: '/contact', label: 'Contact'}
// ]

export default function SignUpPage(){
  
  


  return(

    <main className='flex min-h-screen items-center justify-center bg-gray-100'>

      <div className="min-h-screen flex justify-center bg-gray-50">
          <div className="flex min-h-[calc(100vh-80px)]">
          {/* Left Side - Hero Section */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/15 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 flex flex-col justify-center px-12 text-white">
                <div className="max-w-md">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="flex space-x-2">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6" />
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-6 leading-tight">
                    Join Our Mission to 
                    <span className="block text-red-200">Make a Difference</span>
                  </h2>
                  
                  <p className="text-xl text-red-100 mb-8 leading-relaxed">
                    Together, we can create lasting change in communities worldwide. Your journey starts here.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-200" />
                      <span className="text-red-100">Secure and trusted platform</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-200" />
                      <span className="text-red-100">Join thousands of volunteers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-200" />
                      <span className="text-red-100">Make measurable impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          

          <div className='w-full lg:w-1/2 flex items-center justify-center p-8'>
            <div className='w-full max-w-md'>
              {/* Form Header */}
              <div className='text-center mb-8'>
                <div className='w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <User className='w-8 h-8 text-red-600'/>
                </div>
                <h2 className='text-3xl font-bold text-gray-900 mb-2'>Create Your Account</h2>
                <p className='text-gray-600'>Start making a difference today</p>
              </div>
              <RegisterForm />

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <a href="/login" className="text-red-600 hover:text-red-700 font-semibold transition-colors">
                    Welcome Back
                  </a>
                </p>
              </div>
            </div>
            
          </div>
        </div>



      </div>
    </main>
  )

}