import { Provider } from 'preact-redux';
import store from './store';
import App from './components/app';
import Header from './components/header';
import './style';

export default () => (
	<div>
		<Header />
		<Provider store={store}>
			<App />
		</Provider>
	</div>
);
