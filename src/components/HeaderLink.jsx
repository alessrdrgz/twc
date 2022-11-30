import Link from 'next/link'

export default function HeaderLink ({ href, text }) {
  return (
    <li>
      <Link
        href={href}
        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-gray-500 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-terciary md:bg-transparent  dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        {text}
      </Link>
    </li>
  )
}
