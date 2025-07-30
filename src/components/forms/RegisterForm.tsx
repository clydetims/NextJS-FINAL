'use client'
import { ArrowRight } from 'lucide-react'
import Input from '@/components/Input'
import { useState, ChangeEvent, FormEvent } from 'react'

// interface SignUpForm {
//   label: string
//   type?: string
//   id: string
//   value: string
//   onChange: (e: ChangeEvent<HTMLFormElement>) => void;
//   error?: string;
// }

// interface FormData {
//   first_name: string;
//   last_name: string;
//   email: string;
//   password: string
// }

// interface SignupResponse {
//   token?:string;
//   error?: string
// }

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  agreeToTerms: boolean;
}

export default function RegisterForm() {

  // const [errors, setErrors] = useState({});
  
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'guest',
    agreeToTerms: false,
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked: value}));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData)

    // Prevent submission if terms not accepted
    if (!formData.agreeToTerms) {
      alert('You must agree to the terms and privacy policy.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Account created successfully!');
        // Optionally reset form or redirect
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }


  




  return (
    <form action="" onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
  
      <div className="space-y-6">
        {/* Name Field */}
        <div className='grid grid-cols-2 gap-4'>
          {/* First name */}
          <Input 
            value={formData.first_name} 
            required={true}
            onChange={handleChange}
            type='text'
            id='first_name'
            label='First Name'
            labelClassName='block text-sm font-semibold text-gray-700 mb-2'
            className={`w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
            placeholder='John'
          />

          {/* last name */}
          <Input 
            value={formData.last_name} 
            required={true}
            onChange={handleChange}
            type='text'
            id='last_name'
            label='Last Name'
            labelClassName='block text-sm font-semibold text-gray-700 mb-2'
            className={`w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
            placeholder='Doe'
          />
        </div>

        {/* Email Field */}

        <Input
          value={formData.email}
          required={true}
          type='email'
          id='email'
          label='Email'
          labelClassName='block text-sm font-semibold text-gray-700 mb-2'
          className='w-full pl-4 text-gray-700 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
          onChange={handleChange}
          placeholder='clyde@example.com'
        />

        {/* password */}
        <Input
          value={formData.password}
          required={true}
          type='password'
          id='password'
          label='Password'
          labelClassName='block text-sm font-semibold text-gray-700 mb-2'
          className='w-full pl-4 text-gray-700 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
          onChange={handleChange}
        />

        {/* Terms and Policy */}
        <div className='mt-4'>
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
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
          type='submit'
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
      </div>
    </form>
  )
}