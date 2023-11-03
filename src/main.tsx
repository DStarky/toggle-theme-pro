import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';

import './index.css';
import 'src/styles/themes.scss';

import App from './components/App/App';
import Theme from './Theme/Theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Theme>
			<App />
		</Theme>
	</React.StrictMode>,
);
