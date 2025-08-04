'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Galerie', href: '/gallery' },
  { label: 'Services', href: '/services' },
  { label: 'À Propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const Navbar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (): void => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-white hover:text-red-300 transition-colors duration-200"
            onClick={handleNavClick}
          >
            <span className="text-2xl font-elegant font-bold">
              Perfect Events ❤️
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-red-300 ${
                  pathname === item.href
                    ? 'text-red-400 border-b-2 border-red-400'
                    : 'text-white'
                }`}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-300 transition-colors duration-200"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-b-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-red-300 hover:bg-slate-800 ${
                  pathname === item.href
                    ? 'text-red-400 bg-slate-800'
                    : 'text-white'
                }`}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 