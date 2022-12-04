import Link from 'next/link'
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    boxShadow: theme.shadows[1],
    fontSize: 18,
    padding: '5px'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: 'rgba(0, 0, 0, 0.9)'
  }
}))

export default function HeaderLink({ href, text, Icon }) {
  return (
    <CustomTooltip title={text} placement="left" arrow>
      <Link
        href={href}
        data-tip={text}
        className="p-2 transition-all duration-200 ease-in-out group hover:bg-terciary rounded-2xl h-full w-full"
      >
        <Icon className="w-10 h-10 fill-white text-white group-hover:fill-background" />
      </Link>
    </CustomTooltip>
  )
}
