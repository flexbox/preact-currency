import { h, Component } from 'preact';

import CurrencyList from './currency-list';
import { Input } from 'reactbulma';

export default class App extends Component {
	addConversion = () => {
		this.props.addCurrency(this.state.money);
		this.setState({ money: '' });
	};

	updateMoney = (e) => {
		this.setState({ money: e.target.value });
	};

	render({ currencies }, { money }) {
		return (
			<div id="app">
				<form onSubmit={this.addConversion} action="javascript:">
					<Input value={money} onInput={this.updateMoney} placeholder="42 USD" autofocus />
				</form>
				<ul>
					{ currencies.map(currency => (
						<CurrencyList key={currency.id} currency={currency} />
					)) }
				</ul>
			</div>
		);
	}
}
