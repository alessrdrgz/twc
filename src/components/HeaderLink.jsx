import Link from 'next/link'

export default function HeaderLink ({ href, text }) {
  return (
    <Link
      href={href}
      className="block pl-2 mt-4 mr-4 text-white border-l-2 hover:text-sky-300 border-l-transparent lg:inline-block lg:mt-0 hover:border-l-sky-300 lg:border-l-0 lg:pl-0 lg:pt-2 lg:border-t-2 lg:border-t-transparent lg:hover:border-t-sky-300"
    >
      {text}
    </Link>
  )
}
