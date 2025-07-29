
import { Sign } from 'crypto'
import { ArrowRight } from 'lucide-react'
import { ChangeEvent } from 'react'
import Input from '../Input'
import { useState } from 'react'

interface SignUpForm {
  label: string
  type?: string
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
  error?: string;
}

export default function RegisterForm() {

  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'volunteer',
    agreeToTerms: false
  })
  

  // const validateForm = () => {
  //   const newErrors = {}

  //   if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
  //   if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
  //   if (!formData.email.trim()) newErrors.email = 'Email is required'
  //   else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
  //   if (!formData.password) newErrors.password = 'Password is required'
  //   else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
  //   if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
  //   if (!formData.agreeToTerms) newErrors.agreeToTerms = 'Please accept the terms and conditions'


  //   setErrors(newErrors)
  //   return Object.keys(newErrors).length === 0
  // }

  




  return (
    <form action="" className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
      <div className="space-y-6">
        {/* Name Field */}
        <div className='grid grid-cols-2 gap-4'>
          {/* First name */}
          <Input 
            value="a" 
            required={true}
            onChange={() => ""}
            type='text'
            id='firstName'
            label='First Name'
            labelClassName='block text-sm font-semibold text-gray-700 mb-2'
            className={`w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
            placeholder='John'
          />

          {/* last name */}
          <Input 
            value="a" 
            required={true}
            onChange={() => ""}
            type='text'
            id='lastName'
            label='Last Name'
            labelClassName='block text-sm font-semibold text-gray-700 mb-2'
            className={`w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
            placeholder='Doe'
          />
        </div>

        {/* Email Field */}

        <Input
          value='a'
          required={true}
          type='email'
          id='email'
          label='Email'
          labelClassName='block text-sm font-semibold text-gray-700 mb-2'
          className='w-full pl-4 text-gray-700 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
          onChange={() => ''}
        />

        {/* password */}
        <Input
          value='a'
          required={true}
          type='password'
          id='password'
          label='Password'
          labelClassName='block text-sm font-semibold text-gray-700 mb-2'
          className='w-full pl-4 text-gray-700 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
          onChange={() => ''}
        />
      </div>

      {/* Terms and Policy */}
      <div className='mt-4'>
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={() => ''}
            className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
          />
          <label className="text-sm text-gray-700 leading-relaxed">
            I agree to the{' '}
            <a href="/terms" className="text-red-600 hover:text-red-700 font-semibold underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-red-600 hover:text-red-700 font-semibold underline">
              Privacy Policy
            </a>
          </label>
        </div>

      </div>

      {/* Submit Button */}
      <button
        // onClick={}
        // disabled={}
        className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 cursor-pointer"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Creating Account...</span>
          </>
        ) : (
          <>
            <span>Join Our Mission</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  )
}