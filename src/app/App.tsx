import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/Navbar'
import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />

			<button onClick={toggleTheme}>Toggle Theme</button>

			<AppRouter />
		</div>
	)
}

export default App
