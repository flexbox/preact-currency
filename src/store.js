import {
	createStore,
	applyMiddleware
} from 'redux';
import {
	composeWithDevTools
} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const INITIAL_STATE = {
	currencies: [],
	money: 42
};

export const ACTIONS = {
	FETCH_CHANGE: 'FETCH_CHANGE',
	SEARCH_FILTERS: 'SEARCH_FILTERS'
};

export const reducer = ( state = INITIAL_STATE, action ) => {
	switch ( action.type ) {
		case ACTIONS.FETCH_CHANGE:
			return {
				...state,
				currencies: action.currencies
			};
		// case ACTIONS.SEARCH_FILTERS:
		// 	return {
		// 		...state,
		// 		searchFilters: action.searchFilters
		// 	};
		default:
			return state;
	}
};

export const fetchChange = () => ( dispatch, getState ) => {
	return axios.get( 'https://openexchangerates.org/api/latest.json?app_id=d28c2423b43d4e0bb89cf18e790df0b3')
		.then( ( result ) => {
			dispatch( {
				type: ACTIONS.FETCH_CHANGE,
				currencies: result.data.currencies
			});
		});
};

export const setSearchFilters = ( searchFilters ) => ( dispatch ) => {
	dispatch( {
		type: ACTIONS.SEARCH_FILTERS,
		searchFilters
	} );
};

export const initStore = ( INITIAL_STATE = INITIAL_STATE ) => createStore(
	reducer,
	INITIAL_STATE,
	composeWithDevTools( applyMiddleware( thunkMiddleware ) )
);
