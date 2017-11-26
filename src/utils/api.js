const axios = require('axios');

module.exports = {
	fetchCurrency (amount) {
		const encodedURI = encodeURI('https://openexchangerates.org/api/latest.json?app_id=d28c2423b43d4e0bb89cf18e790df0b3');

		return axios.get(encodedURI)
			.then((response) => response.data)
			.catch((error) => error);
	}
};
