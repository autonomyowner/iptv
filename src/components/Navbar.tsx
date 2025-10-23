'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export const Navbar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 12)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-kitchen-white-clean/92 backdrop-blur border-b border-kitchen-marble-gray-light shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="flex items-center space-x-3 transition-opacity duration-200 hover:opacity-80"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/picturs/logo.png"
                alt="Cuisine Alger Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight text-kitchen-black-deep">
              <span className="text-xl font-semibold tracking-wide uppercase">
                Cuisine Alger
              </span>
              <span className="text-xs font-light text-kitchen-marble-gray">
                Conception et fabrication de cuisines
              </span>
            </div>
          </Link>

          <div className="hidden items-center space-x-7 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive
                      ? 'text-kitchen-black-deep'
                      : 'text-kitchen-marble-gray hover:text-kitchen-black-deep'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-full border border-kitchen-lux-dark-green-300 bg-gradient-to-r from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-kitchen-lux-dark-green-800 transition-all duration-200 hover:border-kitchen-lux-dark-green-500 hover:bg-gradient-to-r hover:from-kitchen-lux-dark-green-100 hover:to-kitchen-lux-dark-green-200 hover:text-kitchen-lux-dark-green-900 hover:shadow-md hover:shadow-kitchen-lux-dark-green-200/30 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Basculer la navigation"
            type="button"
          >
            {isMobileMenuOpen ? 'Fermer' : 'Menu'}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mb-4 rounded-2xl border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-3 pb-4 pt-2 backdrop-blur shadow-lg shadow-kitchen-lux-dark-green-200/20">
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-200 ${
                      isActive
                        ? 'bg-kitchen-lux-dark-green-200 text-kitchen-lux-dark-green-900 shadow-sm'
                        : 'text-kitchen-lux-dark-green-700 hover:bg-kitchen-lux-dark-green-200 hover:text-kitchen-lux-dark-green-900 hover:shadow-sm'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
