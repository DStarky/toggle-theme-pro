import { useState, createContext, useEffect, useContext } from 'react';

// Ключ для localStorage

const StorageKey = 'color-theme';

// Задаем тип

const supportedThemes = {
	light: 'light',
	dark: 'dark',
};

type Themes = keyof typeof supportedThemes;

// Создаем контекст

interface IThemeContextGenerator {
	theme: Themes;
	setTheme: (theme: Themes) => void;
	supportedThemes: { [key: string]: string };
}

const ThemeContext = createContext<IThemeContextGenerator | undefined>(undefined);

// Получение темы из localStorage

const getTheme = (): Themes => {
	let theme = localStorage.getItem(StorageKey);

	if (!theme) {
		localStorage.setItem(StorageKey, 'light');
		theme = 'light';
	}

	return theme as Themes;
};

// хук для темы - получить текущую тему, функцию для изменения и список доступных

const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('Этот хук может использоваться только с ThemeContext');
	}

	return context;
};

// Если в проекте используется всего 2 темы (в большинстве случаев), то можно использовать этот хук для их переключения

const useThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return toggleTheme;
};

// Сам компонент

interface IThemeProps {
	children: React.ReactNode;
}

const Theme: React.FC<IThemeProps> = ({ children }) => {
	const [theme, setTheme] = useState<Themes>(getTheme);

	useEffect(() => {
		localStorage.setItem(StorageKey, theme);
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				supportedThemes,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};

export { useTheme, useThemeToggle };
export default Theme;
