const axios = require('axios');
const API_ROOT = 'https://openexchangerates.org/api/latest.json?app_id=d28c2423b43d4e0bb89cf18e790df0b3';

export function addCurrency(money) {
	axios
		.get(`${API_ROOT}`)
		// .then(res => this.setState({ posts: res.data }))
		.then(res => res.data.rates)
		.catch(err => console.log(err));

	// let conversion = money * res;

	return {
		type: 'SEARCH',
		money
	};
}
