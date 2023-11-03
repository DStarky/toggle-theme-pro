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
			<button
				className={styles.toggle}
				onClick={toggleThemeHandler}></button>
			<div className={styles.container}>
				<Form
					nameHandler={nameHandler}
					setValue={setValue}>
					<Input
						value={value}
						setValue={setValue}
					/>
					<SubmitButton>Поздороваться</SubmitButton>
				</Form>
				{name && (
					<p className={styles.p}>
						Привет, <span>{name}</span>
					</p>
				)}
			</div>
		</div>
	);
};
export default App;
