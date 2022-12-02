'use client'

import HeaderLink from '@components/HeaderLink'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import LoginButton from '@components/LoginButton'
import UserMenu from '@components/UserMenu'
import HomeIcon from '@mui/icons-material/HomeRounded'
import SearchIcon from '@mui/icons-material/SearchRounded'

const HeaderLinks = [
  {
    text: 'Home',
    href: '/',
    Icon: HomeIcon
  },
  {
    text: 'Browse',
    href: '/browse',
    Icon: SearchIcon
  }
]

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="block font-primary">
      <div className="relative flex items-center justify-between px-2 py-4 mx-auto md:px-20 bg-background">
        <Link href="/" className="text-4xl font-bold text-primary font-primary">
          TWC
        </Link>
        {session ? <UserMenu /> : <LoginButton />}
      </div>
      <nav className="fixed top-0 bottom-0 right-0 flex items-center justify-center w-16 min-h-screen">
        <div className="flex flex-col gap-3 shadow-lg rounded-2xl bg-bglight">
          {HeaderLinks.map(({ href, text, Icon }, i) => (
            <HeaderLink text={text} href={href} Icon={Icon} key={i} />
          ))}
        </div>
      </nav>
    </header>
  )
}
