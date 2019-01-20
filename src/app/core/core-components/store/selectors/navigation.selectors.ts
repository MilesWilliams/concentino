import { createSelector } from '@ngrx/store';
import * as fromReducer from '../../../store/reducers';
import * as fromNavReducer from '../reducers/navigation.reducer';
import { Utils } from '../../../../utils';
import { SidebarNavigationInterface, NavItem } from 'src/app/core/interfaces/sidebar-nav.interface';

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

export const getActiveRoute = createSelector(
	getNavigationState,
	getRoutes,
	(state, routes) => {
		let activeRoute: NavItem;
		routes.forEach((section: SidebarNavigationInterface) => {
			if (section.nav_items && section.nav_items.length > 0) {
				if (activeRoute) {
					return activeRoute;
				}
				activeRoute = section.nav_items.find(n => n.route === state.active_route);
			}
		})

		return activeRoute;
	});
