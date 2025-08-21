import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Navbar } from 'widgets/Navbar'
import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback='loading'>
				<LangSwitcher />
				<Navbar />
				<AppRouter />
			</Suspense>
		</div>
	)
}

export default App
