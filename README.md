# Изменение цветовой темы сайта (продвинутый уровень)

Написано на typescript, легко применить на любом проекте, записывает тему в localStorage, количество цветовых тем не ограничено (задаются в объекте `supportedThemes` в `src/components/theme-provider`), пользовательский хук для удобства использования

## Как использовать?

Скопировать папку theme-provider.
Обернуть приложение в пользовательский компонент <Theme> из папки theme-provider

```
<Theme>
	<App />
</Theme>
```

## Пользовательский хук

Хук useTheme() - возвращает три параметра

- theme - текущая тема (по-умолчанию light);
- setTheme - функция для смены темы (поставить можно только из списка supportedThemes)
- supportedThemes - список поддерживаемых тем (поменять можно в src/components/theme-provider)

## Примечания

Изменение темы происходит путем присвоение data-атрибута `data-theme` для родительского элемента. Изначально данный атрибут вешается на тег `<body>`, однако вы можете изменить это, переписав 62 строчку из файла index.tsx в директории theme-provider:

`document.body.setAttribute('data-theme', theme)`

В файле themes.scss необходимо прописать CSS-переменные для каждой темы, а также универсальные значения. Поскольку применяются обычные CSS-переменные можно использовать любые препроцессоры, а также ванильный CSS3. 
