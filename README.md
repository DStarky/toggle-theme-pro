# Изменение цветовой темы сайта (продвинутый уровень)

Написано на typescript, использует React Context без дополнительных библиотек, легко применить на любом проекте, записывает тему в localStorage, количество цветовых тем не ограничено (задаются в объекте `supportedThemes` в `src/components/theme-provider`), имеется пользовательский хук для удобства использования

## Как использовать?

Скопировать папку theme-provider.
Обернуть приложение в пользовательский компонент <Theme> из папки theme-provider

```
<Theme>
	<App />
</Theme>
```

## Пользовательский хук useTheme()

Хук `useTheme()` - возвращает три параметра

- theme - текущая тема (по-умолчанию light);
- setTheme - функция для смены темы (поставить можно только из списка supportedThemes)
- supportedThemes - список поддерживаемых тем (поменять можно в src/components/theme-provider)

## Пользовательский хук useThemeToggle()

Чаще всего на сайте встрачаются всего 2 темы: светлая и темная. В этом случае для их переключения можно использовать пользовательский хук `useThemeToggle()`:

- Хук возвращает функцию, которая переключает тему со светлой на темную и наоборот;
- Задаем значение какой-нибудь переменной, например, `const toggleTheme = useThemeToggle();`
- Вешаем переключение на нужное событие, например, `<button onClick={toggleTheme}>Переключить тему</button>`

## Примечания

Изменение темы происходит путем присвоение data-атрибута `data-theme` для родительского элемента. Изначально данный атрибут вешается на тег `<body>`, однако вы можете изменить это, переписав 62 строчку из файла index.tsx в директории theme-provider:

`document.body.setAttribute('data-theme', theme)`

В файле themes.scss необходимо прописать CSS-переменные для каждой темы, а также универсальные значения. Поскольку применяются обычные CSS-переменные можно использовать любые препроцессоры, а также ванильный CSS3.
