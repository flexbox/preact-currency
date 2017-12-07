import { h, Component } from 'preact';

export default class CurrencyList extends Component {
	shouldComponentUpdate({ currency }) {
		return this.props.currency;
	}

	render({ currency }) {
		return (
			<li>
				{ ' ' + currency.money } USD
				{ ' ' + currency.money } EUR
			</li>
		);
	}
}
