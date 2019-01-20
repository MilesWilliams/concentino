import * as fromActions from '../actions/navigation.actions';
import * as fromRouteActions from '../actions/on-route.actions';
import { Utils } from 'src/app/utils';
import { SidebarNavigationInterface } from '../../../../interfaces/sidebar-nav.interface';


export interface INavigationState {
	routes: { [section: string]: SidebarNavigationInterface };
	active_route: number;
	loading: boolean;
	loaded: boolean;
}
export const initialState: INavigationState = {
	routes: {},
	active_route: 1,
	loading: false,
	loaded: false,
};

export function reducer(
	state: INavigationState = initialState,
	action: fromActions.NavigationActions | fromRouteActions.OnRouteActions
): INavigationState {
	switch (action.type) {
		case fromActions.LOAD_ROUTES: {
			return { ...state, loading: true };
		}
		case fromActions.LOAD_ROUTES_SUCCESS: {
			const routes = Utils.Format.MapRoutesWithKey(action.payload, state);
			return {
				...state,
				loading: false,
				loaded: true,
				routes,
			};
		}
		case fromActions.LOAD_ROUTES_FAIL: {
			return {
				...state,
				loading: false,
				loaded: false,
			};
		}

		case fromRouteActions.SET_ACTIVE_ROUTE_SUCCESS: {
			const active_route = action.payload;
			return {
				...state,
				active_route,
			};
		}

		case fromRouteActions.CLEAR_ACTIVE_ROUTE: {
			return {
				...state,
				active_route: 1,
			};
		}

		default:
			return state;
	}
}

export const getRoutes = (state: INavigationState) => state.routes;
export const getRoutesLoaded = (state: INavigationState) => state.loaded;
export const getActiveRoutes = (state: INavigationState) => state.active_route;
