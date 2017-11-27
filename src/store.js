import { createStore } from 'redux';

let ACTIONS = {
	SEARCH: ({ currencies, ...state }, { money }) => ({
		currencies: [...currencies, {
			id: Math.random().toString(36).substring(2),
			money
		}],
		...state
	})
};

const INITIAL = {
	currencies: []
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined);
