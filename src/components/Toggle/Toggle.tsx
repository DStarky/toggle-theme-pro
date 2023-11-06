import { useThemeToggle } from '../theme-provider';
import styles from './Toggle.module.scss';

const Toggle = () => {
	const toggleTheme = useThemeToggle();

	return (
		<button
			className={styles.root}
			onClick={toggleTheme}></button>
	);
};
export default Toggle;
