import { Theme, useTheme } from 'app/providers/ThemeProvider'
import MoonIc from 'shared/assets/icons/moonIc.svg'
import SunIc from 'shared/assets/icons/SunIc.svg'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <SunIc /> : <MoonIc />}
		</Button>
	)
}
