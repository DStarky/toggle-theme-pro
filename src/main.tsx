import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';

import './index.css';
import './components/theme-provider/themes.scss';

import App from './components/App/App';
import Theme from './components/theme-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Theme>
			<App />
		</Theme>
	</React.StrictMode>,
);
