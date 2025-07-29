'use client'
import { Eye, EyeOff, Mail, User, Lock, ArrowRight, CheckCircle, Heart, Shield, Users } from 'lucide-react'
import Link from 'next/link';
import RegisterForm from '../../../components/forms/RegisterForm';

interface NavItem {
  href:string
  label: string
}

const navItems: NavItem[] = [
  {href: '/', label: 'Home'},
  {href: '/about', label: 'About'},
  {href: '/contact', label: 'Contact'}
]

export default function SignUpPage(){
  

  return(
    <div className="min-h-screen bg-gray-50">
      <div className='flex items-center justify-center min-h-[calc(100vh-80px)]'>
        {/* Left Side - Hero Section */}
        <div>

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


          </div>
          
        </div>
      </div>



    </div>
  )

}