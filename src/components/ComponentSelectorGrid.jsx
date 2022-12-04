import ButtonIcon from '@icons/ButtonIcon'
import InputIcon from '@icons/InputIcon'
import ComponentPlaceholder from '@components/ComponentPlaceholder'
import { RadioGroup } from '@headlessui/react'

const ComponentsPlaceholders = [
  {
    text: 'Button',
    Icon: ButtonIcon,
    value: 'button'
  },
  {
    text: 'Input',
    Icon: InputIcon,
    value: 'input'
  }
]

export default function ComponentSelectorGrid({ value, setValue }) {
  return (
    <RadioGroup
      className="grid w-full h-full grid-cols-2 gap-4 mt-2"
      value={value}
      onChange={setValue}
    >
      {ComponentsPlaceholders.map((c, i) => {
        return (
          <RadioGroup.Option value={c.value} key={i}>
            {({ checked }) => (
              <ComponentPlaceholder
                text={c.text}
                Icon={c.Icon}
                checked={checked}
              />
            )}
          </RadioGroup.Option>
        )
      })}
    </RadioGroup>
  )
}
