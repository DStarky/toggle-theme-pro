import { useState } from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import styles from './App.module.scss';
import { useTheme } from '../theme-provider';

const App: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const [name, setName] = useState<string>('');
	const { theme, setTheme } = useTheme();

	console.log(theme);

	const nameHandler = () => {
		setName(value.trim());
	};

	const toggleThemeHandler = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<h1 className={styles.title}>Переключатель темы</h1>
			</div>
		</div>
	);
};
export default App;
