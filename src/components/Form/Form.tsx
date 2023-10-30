import styles from './Form.module.scss';

interface IFromProps {
	children: React.ReactNode;
	nameHandler: () => void;
	setValue: (string: string) => void;
}

const Form: React.FC<IFromProps> = ({ children, nameHandler, setValue }) => {
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		nameHandler();
		setValue('');
	};

	return (
		<form
			action=''
			className={styles.root}
			onSubmit={submitHandler}>
			{children}
		</form>
	);
};
export default Form;
