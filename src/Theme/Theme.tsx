import { useState, createContext, useEffect } from 'react';

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

// хук для темы

// Сам компонент

interface IThemeProps {
	children: React.ReactNode;
}

const Theme: React.FC<IThemeProps> = ({ children }) => {
	const [theme, setTheme] = useState<Themes>(getTheme);

	useEffect(() => {
		localStorage.setItem(StorageKey, theme);
		document.documentElement.setAttribute('data-theme', theme);
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


export default Theme;
