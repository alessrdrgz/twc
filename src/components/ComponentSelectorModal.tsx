import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ComponentSelectorGrid from './ComponentSelectorGrid'

export default function ComponentSelectorModal({ value, setValue }) {
  const [isOpen, setIsOpen] = useState(true)
  const closeModal = () => setIsOpen(false)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold leading-6 text-center text-gray-900 select-none"
                >
                  Selecciona el tipo de componente
                </Dialog.Title>
                <ComponentSelectorGrid value={value} setValue={setValue} />
                <div className="flex items-center justify-center mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-500 cursor-pointer hover:bg-blue-700 rounded-2xl"
                    onClick={closeModal}
                  >
                    Seleccionar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
