import { useTheme } from '../theme-provider';
import styles from './Toggle.module.scss';

const Toggle = () => {
		const { theme, setTheme } = useTheme();
  
  const toggleThemeHandler = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

	return <button className={styles.root} onClick={toggleThemeHandler}></button>;
};
export default Toggle;
