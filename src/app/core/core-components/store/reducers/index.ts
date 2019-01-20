import {
	ActionReducer,
	combineReducers,
	createSelector,
	ActionReducerMap,
	createFeatureSelector,
	compose,
} from '@ngrx/store';
import * as fromNavigation from './navigation.reducer';

import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';
import { App } from '../../../configs/app.config';

export interface NavigationState {
	navigation: fromNavigation.INavigationState;
}

export const reducers: ActionReducerMap<NavigationState> = {
	navigation: fromNavigation.reducer,
};

export const storeConfig: LocalStorageConfig = {
	keys: ['navigation'],
	rehydrate: !App.production,
};

const developmentReducer: ActionReducer<NavigationState> = compose(
	localStorageSync(storeConfig),
	combineReducers
)(reducers);

// production reducer
const productionReducer: ActionReducer<NavigationState> = combineReducers(
	reducers
);

export function NavigationStateReducer(state: NavigationState, action: any) {
	return developmentReducer(state, action);
}

export const getNavigationState = createFeatureSelector<NavigationState>(
	'Navigation'
);
