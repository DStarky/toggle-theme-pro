import styles from './Input.module.scss';

const Input: React.FC = () => {
	return (
		<input
			type='text'
			className={styles.root}
			placeholder='Введите имя'></input>
	);
};
export default Input;
