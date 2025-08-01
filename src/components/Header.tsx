// /components/Header.tsx
'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { guestLinks, financialLinks } from '@/constants/nav'
import { ROLES, UserRole } from '@/constants/roles'
import { Heart } from 'lucide-react'
import useScrollDirection from '@/hooks/useScrollDirection'
import {useSession} from '@/hooks/useSession'

interface UserData {
  role: UserRole;
  first_name?: string;
  last_name?: string;
  isAuthenticated: boolean;
}


export default function Header() {
  const { user } = useSession();
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [userData, setUserData] = useState<UserData>({
    role: ROLES.GUEST,
    isAuthenticated: false
  })
  const scrollDirection = useScrollDirection();
  const [translateY, setTranslateY] = useState(0);
  const router = useRouter()

  const handleLogout = async () => {
    try {
      // Clear client-side storage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('role')
        localStorage.removeItem('first_name')
        localStorage.removeItem('last_name')
        localStorage.removeItem('isAuthenticated')
      }

      // Call logout API
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        
      })

      if (!response.ok) {
        throw new Error('Logout failed')
      }

      // Redirect to login and refresh
      router.push('/login')
      router.refresh()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }


  useEffect(() => {
    if (user) {
      setUserData({
        role: user.role,
        first_name: user.first_name,
        last_name: user.last_name,
        isAuthenticated: true,
      });
    } else {
      setUserData({
        role: ROLES.GUEST,
        isAuthenticated: false,
      });
    }
  }, [user]);



  useEffect(() => {
    if (scrollDirection === 'down') {
      setTranslateY(-100);
    } else if (scrollDirection === 'up') {
      setTranslateY(0);
    }
  }, [scrollDirection])

  const getLinks = () => {
    if (userData.role === ROLES.FINANCIAL) {
      return financialLinks
    }
    
    // Filter out login/signup if authenticated
    if (userData.isAuthenticated) {
      return guestLinks.filter(link  => 
        link.href !== '/login' && 
        link.href !== '/register'
      )
    }

    return guestLinks
  }

  const links = getLinks()
  let fullName = '';
  if (user) {
    fullName = user.first_name && user.last_name
      ? `${user.first_name} ${user.last_name}`
      : user.first_name || '';
  }


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-100 transition-transform duration-300 ease-in-out bg-white shadow-sm border-b`}
      style={{ transform: `translateY(${translateY}%)`}}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <Heart className='w-6 h-6 text-white'/>
          </div>
          <div>
            <Link href='/' className='text-xl font-bold text-gray-900'>Hope Foundation</Link>
            <p className='text-sm text-gray-600'>Building Better Communities</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-red-600 ${
                pathname === link.href ? 'text-red-600 font-bold' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* User profile section - only shown when authenticated */}
          {userData.isAuthenticated && (
            <div className="flex items-center space-x-4">
              {fullName && (
                <span className="text-sm font-medium text-gray-700">
                  {user.first_name}
                </span>
              )}
              <button 
                onClick={handleLogout} 
                className="text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium hover:text-blue-600 ${
                pathname === link.href ? 'text-blue-600 font-bold' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {user && (
            <div className="pt-2 border-t">
              {fullName && (
                <p className="block text-sm font-medium text-gray-700 py-2">
                  {user && <p>{user.first_name}</p>}

                </p>
              )}
              <button 
                onClick={() => {
                  handleLogout()
                  setIsOpen(false)
                }}
                className="block text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded w-full text-center"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  )
}

