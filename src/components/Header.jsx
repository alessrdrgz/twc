'use client'

import HeaderLink from '@components/HeaderLink'
import Link from 'next/link'
import { createRef } from 'react'

const HeaderLinks = [
  {
    text: 'Home',
    href: ''
  },
  {
    text: 'Browse',
    href: ''
  }
]

export default function Header () {
  const menu = createRef()
  const toggleMenu = () => menu.current?.classList.toggle('hidden')

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between h-20 p-6 bg-gray-900">
        <Link className="flex items-center flex-shrink-0 mr-6 text-white" href="/">
          <span className="text-xl font-semibold tracking-tight">TWC</span>
        </Link>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-sky-300 hover:border-sky-300"
            type="button"
            onClick={toggleMenu}
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <div className="text-lg lg:flex-grow" ref={menu}>
            {HeaderLinks.map((h) => (
              <HeaderLink text={h.text} href={h.href} key={h.text} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
