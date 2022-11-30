export default function ButtonIcon (props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M47 48c8.837 0 16-7.163 16-16s-7.163-16-16-16H17C8.163 16 1 23.163 1 32s7.163 16 16 16h30z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M29 32 A12 12 0 0 1 17 44 A12 12 0 0 1 5 32 A12 12 0 0 1 29 32 z"
      />
    </svg>
  )
}
