module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/jsx-indent': [2, 2], // отступы в JSX
		'react/jsx-indent-props': [2, 2], // отступы для пропсов в JSX
		indent: [2, 2], // отступы в коде
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		], // разрешенные расширения для JSX
		'import/no-unresolved': 'off', // отключить проверку неразрешенных импортов
		'import/prefer-default-export': 'off', // разрешить именованные экспорты
		'no-unused-vars': 'warn', // предупреждение для неиспользуемых переменных
		'react/require-default-props': 'off', // не требовать defaultProps
		'react/react-in-jsx-scope': 'off', // не требовать импорт React в JSX
		'react/jsx-props-no-spreading': 'warn', // предупреждение при spread пропсов
		'react/function-component-definition': 'off', // разрешить любые формы определения компонентов
		'no-shadow': 'off', // разрешить затенение переменных
		'import/extensions': 'off', // не требовать расширения в импортах
		'import/no-extraneous-dependencies': 'off', // разрешить внешние зависимости
		'no-underscore-dangle': 'off', // разрешить подчеркивания в именах
		semi: 'off', // отключить точки с запятой
	},
	globals: {
		__IS_DEV__: true,
	},
}
