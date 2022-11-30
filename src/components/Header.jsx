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
      <nav class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-background relative">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="https://flowbite.com/" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-secondary">
              TwC
            </span>
          </Link>
          <button
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-gray-700 dark:text-white dark:hover:bg-bglight dark:focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block  md:w-auto" ref={menu}>
            <ul class="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-basic md:font-medium md:border-0 dark:bg-background md:dark:bg-background dark:border-background">
              {HeaderLinks.map((h, i) => (
                <HeaderLink text={h.text} href={h.href} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
