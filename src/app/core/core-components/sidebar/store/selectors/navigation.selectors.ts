import { createSelector } from '@ngrx/store';
import * as fromReducer from '../../../../store/reducers';
import * as fromNavReducer from '../reducers/navigation.reducer';
import { Utils } from '../../../../../utils';

/**
 * Get Auth store state
 */
export const getNavigationState = createSelector(
	fromReducer.getCoreState,
	(state: fromReducer.CoreState) => state.navigation
);

/**
 * Get authenticated boolean.
 */
export const getRoutesLoaded = createSelector(
	getNavigationState,
	fromNavReducer.getRoutesLoaded
);

/**
 * Get authenticated user
 */
export const getRoutesEntities = createSelector(getNavigationState, state => {
	return state.routes;
});

export const getRoutes = createSelector(getRoutesEntities, entities => {
	return Utils.Format.GetStringKeyEntities(entities);
});

export const getActiveRoute = createSelector(getNavigationState, state => {
	return state.active_route;
});
