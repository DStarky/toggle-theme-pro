import { useState } from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import styles from './App.module.scss';

const App: React.FC = () => {
	const [value, setValue] = useState<string>('');
	const [name, setName] = useState<string>('');

	const nameHandler = () => {
		setName(value.trim());
	};

	return (
		<div className={styles.root}>
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
				{name && <p className={styles.p}>Привет, <span>{name}</span>!</p>}
			</div>
		</div>
	);
};
export default App;
