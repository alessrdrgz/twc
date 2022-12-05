import { IconProps } from '@interfaces/IconProps'

interface ComponentPlaceHolderProps {
  text?: string
  Icon: (props: IconProps) => JSX.Element
  checked?: boolean
}

export default function ComponentPlaceHolder({
  text,
  Icon,
  checked
}: ComponentPlaceHolderProps) {
  return (
    <button
      disabled={checked}
      className={`flex flex-col items-center justify-center w-full p-4 bg-gray-100 border-2 border-gray-300 cursor-pointer group rounded-2xl ${
        checked ? 'border-sky-500' : ''
      } focus:outline-none focus:border-none`}
    >
      <Icon
        className={`w-16 h-16 ${checked ? 'text-sky-500' : 'text-gray-400'}`}
      />
      <span
        className={`font-medium select-none ${
          checked ? 'text-sky-500' : 'text-black'
        }`}
      >
        {text}
      </span>
    </button>
  )
}
