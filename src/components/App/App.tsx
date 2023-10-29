import Form from '../Form/Form';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import styles from './App.module.scss';

const App: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<Form>
					<Input />
          <SubmitButton>Поздороваться</SubmitButton>
				</Form>
			</div>
		</div>
	);
};
export default App;
