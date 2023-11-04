import styles from './App.module.scss';
import Toggle from 'src/components/Toggle/Toggle';

const App: React.FC = () => {

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<h1 className={styles.title}>Переключатель темы</h1>
				<Toggle />
			</div>
		</div>
	);
};
export default App;
