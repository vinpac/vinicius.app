import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import {
  FaGithub,
  FaTwitter,
  FaDribbble,
  FaAngleDown,
  FaSun,
  FaMoon,
} from 'react-icons/fa'
import { isBreakpoint, useTailwindCx } from 'lib/theme'
import { ColorName } from 'lib/theme'
import { MdSearch, MdEdit } from 'react-icons/md'
import ToolbarButton from 'components/ToolbarButton'
import { useQuickOpen } from 'lib/quickOpen/hooks'
import { useTheme } from 'lib/theme'
import Logo from 'assets/svg/logo.svg'
import Tooltip from '@reach/tooltip'

export interface ToolbarProps {
  readonly className?: string
  readonly color?: ColorName
}

const Toolbar: React.FC<ToolbarProps> = ({ className, color }) => {
  const theme = useTheme()
  const tcx = useTailwindCx(color)
  const quickOpen = useQuickOpen()
  const handleThemeChange = (): void => {
    theme.setTheme(theme.name === 'dark' ? 'light' : 'dark')
  }
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (!isBreakpoint('md')) {
      e.preventDefault()
      quickOpen.open({ text: '' })
      return
    }
  }

  return (
    <div className={cx('flex flex-row relative', className)}>
      <Link href="/">
        <a className="flex items-center mr-auto" onClick={handleLogoClick}>
          <Logo
            alt="Vinicius.app"
            width="146px"
            height="32px"
            className={`${tcx('text', 700)} ${tcx('hover:text', 800)}`}
          />
          <Tooltip label="Status: Surfando">
            <span className="text-2xl ml-3">🏄🏻‍♂️</span>
          </Tooltip>
          <FaAngleDown className="inline-block ml-2 text-xl md:hidden" />
        </a>
      </Link>
      <div className="hidden md:flex space-x-6 items-center px-6 text-lg">
        <ToolbarButton
          as="button"
          href="/"
          icon={MdSearch}
          label="Navegar"
          color={color}
          onClick={() => quickOpen.open({ text: '' })}
        />
        <Link href="/blog" passHref>
          <ToolbarButton icon={MdEdit} label="Blog" color={color} />
        </Link>
        <ToolbarButton
          href="https://github.com/vinpac/"
          icon={FaGithub}
          label="GitHub"
          color={color}
        />
        <div className="space-x-2">
          <ToolbarButton
            href="/"
            icon={FaTwitter}
            label="Twitter"
            color={color}
            hideText
          />
          <ToolbarButton
            href="https://dribbble.com/oivini"
            icon={FaDribbble}
            label="Dribbble"
            color={color}
            hideText
          />
          <Tooltip
            label={
              theme.name === 'light'
                ? 'Ativar modo dark'
                : 'Desativar modo dark'
            }
          >
            <ToolbarButton
              as="button"
              icon={theme.name === 'dark' ? FaMoon : FaSun}
              label="Dribbble"
              color={color}
              onClick={handleThemeChange}
              hideText
            />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

Toolbar.displayName = 'Toolbar'

export { Toolbar }
export default React.memo(Toolbar)
