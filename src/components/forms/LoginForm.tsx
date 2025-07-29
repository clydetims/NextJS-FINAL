// components/forms/LoginForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true)
    try {
      // Replace this with your actual login logic (API call)
      console.log('Login attempt:', data)

      // Simulate successful login
      setTimeout(() => {
        setLoading(false)
        router.push('/dashboard') // Redirect after login
      }, 1000)
    } catch (error) {
      setLoading(false)
      console.error('Login failed:', error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm mx-auto bg-white shadow-md rounded-xl p-6 space-y-5"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register('email')}
          className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          {...register('password')}
          className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>

      <p className="text-center text-sm text-gray-500">
        Don’t have an account?{' '}
        <a href="/auth/register" className="text-blue-600 hover:underline">
          Register
        </a>
      </p>
    </form>
  )
}
