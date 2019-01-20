export * from '../router';

import {
	ActionReducer,
	combineReducers,
	ActionReducerMap,
	createFeatureSelector,
	compose,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromNavigation from '../../core-components/store/reducers/navigation.reducer';

import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';

import { RouterStateUrl } from '../router';
import { App } from '../../configs/app.config';

export interface CoreState {
	routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;

	navigation: fromNavigation.INavigationState;
}

export const reducers: ActionReducerMap<CoreState> = {
	routerReducer: fromRouter.routerReducer,
	navigation: fromNavigation.reducer,
};

export const storeConfig: LocalStorageConfig = {
	keys: ['routerReducer', 'navigation'],
	rehydrate: !App.production,
};

const developmentReducer: ActionReducer<CoreState> = compose(
	localStorageSync(storeConfig),
	combineReducers
)(reducers);

// production reducer
const productionReducer: ActionReducer<CoreState> = combineReducers(reducers);

export function CoreStateReducer(state: CoreState, action: any) {
	return developmentReducer(state, action);
}

export const getCoreState = createFeatureSelector<CoreState>('CoreState');
