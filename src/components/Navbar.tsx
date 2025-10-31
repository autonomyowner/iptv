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
  { label: 'Produits', href: '/services' },
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
          ? 'bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm'
          : 'bg-white'
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
                alt="iptvzh Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight text-iptvzh-black-deep">
              <span className="text-xl font-bold tracking-wide text-iptvzh-purple-accent">
                iptvzh
              </span>
              <span className="text-xs font-light text-iptvzh-gray-blue">
                Produits numériques premium
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
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-iptvzh-navy-blue border-b-2 border-iptvzh-navy-blue'
                      : 'text-iptvzh-gray-blue hover:text-iptvzh-navy-blue'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-lg bg-iptvzh-navy-blue px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-iptvzh-navy-blue-dark md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Basculer la navigation"
            type="button"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mb-4 rounded-xl border border-gray-200 bg-white px-3 pb-4 pt-2 backdrop-blur shadow-lg">
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-iptvzh-navy-blue text-white shadow-sm'
                        : 'text-iptvzh-navy-blue hover:bg-iptvzh-navy-blue/10'
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
