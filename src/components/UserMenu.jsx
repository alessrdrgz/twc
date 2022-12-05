'use client'

import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import LogoutIcon from '@mui/icons-material/LogoutRounded'
import { useUser } from 'src/hooks/useUser'

export default function Example() {
  const user = useUser()

  if (user) {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-full rounded-full">
            <Image
              src={user.image}
              className="rounded-full"
              alt="User avatar"
              width={50}
              height={50}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 p-0.5 mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg w-max bg-bglight ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className="flex items-center w-full px-2 py-2 text-sm text-white rounded-md group bg-background hover:bg-terciary hover:text-background"
                    onClick={() => signOut()}
                  >
                    <LogoutIcon className="w-5 h-5 mr-2" />
                    Cerrar sesión
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }
}
