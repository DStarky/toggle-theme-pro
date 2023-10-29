import styles from './Form.module.scss';

interface IFromProps {
	children: React.ReactNode;
}

const Form: React.FC<IFromProps> = ({ children }) => {
	return (
		<form
			action=''
			className={styles.root}>
			{children}
		</form>
	);
};
export default Form;
