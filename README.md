# Учебный проект про смену темы на более продвинутом уровне

## Как использовать?

Скопировать папку theme-provider.
Обернуть приложение в пользовательский компонент <Theme> из папки theme-provider

`<Theme>
			<App />
		</Theme>`

Хук useTheme() - возвращает три параметра

- theme - текущая тема (по-умолчанию light);
- setTheme - функция для смены темы (поставить можно только из списка supportedThemes)
- supportedThemes - список поддерживаемых тем (поменять можно в src/components/theme-provider)
