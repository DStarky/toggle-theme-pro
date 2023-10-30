import styles from './Input.module.scss';

interface IInputProps {
	value: string;
	setValue: (string: string) => void;
}

const Input: React.FC<IInputProps> = ({ value, setValue }) => {
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const enteredValue = e.target.value;
		setValue(enteredValue);
	};
	return (
		<input
			type='text'
			className={styles.root}
			value={value}
			onChange={changeHandler}
			placeholder='Введите имя'></input>
	);
};
export default Input;
