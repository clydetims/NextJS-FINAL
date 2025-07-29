// /components/Header.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { guestLinks, financialLinks } from '@/constants/nav'
import { ROLES, UserRole } from '@/constants/roles'
import { Heart } from 'lucide-react'
import useScrollDirection from '@/hooks/useScrollDirection'


// Simulated cookie/session role (for example only)
const getRoleClientSide = (): UserRole => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('role') as UserRole) || ROLES.GUEST
  }
  return ROLES.GUEST
}

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [role, setRole] = useState<UserRole>(ROLES.GUEST)
  const scrollDirection = useScrollDirection();
  const [translateY, setTranslateY] = useState(0);
  // const [isVisible, setIsVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const currentScrollY = window.scrollY;

  //   if (scrollDirection === 'down' && currentScrollY > 100) {
  //     setIsVisible(false)
  //   } else if (scrollDirection === 'up') {
  //     setIsVisible(true)
  //   }

  //   setLastScrollY(currentScrollY)
  // }, [scrollDirection])

  useEffect(() => {
    if(scrollDirection === 'down') {
      setTranslateY(-100);
    } else if (scrollDirection === 'up') {
      setTranslateY(0);
    }
  }, [scrollDirection])
  

  useEffect(() => {
    // You can replace this with an API call or real session logic
    setRole(getRoleClientSide())
  }, [])



  const links = role === ROLES.FINANCIAL ? financialLinks : guestLinks

  return (
    <header className={`fixed top-0 left-0 right-0 z-100 transition-transform duration-300 ease-in-out bg-white shadow-sm border-b`}
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
          <div className="hidden md:flex space-x-6">
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
        </div>
      )}
    </header>
  )
}
