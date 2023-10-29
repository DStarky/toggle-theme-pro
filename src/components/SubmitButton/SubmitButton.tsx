import styles from './SubmitButton.module.scss';

interface ISubmitButtonProps {
	children: React.ReactNode;
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({ children }) => {
	return <button className={styles.Root}>{children}</button>;
};
export default SubmitButton;
