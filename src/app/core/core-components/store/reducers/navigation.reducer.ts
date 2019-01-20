import * as fromActions from '../actions/navigation.actions';
import * as fromRouteActions from '../actions/on-route.actions';
import { Utils } from 'src/app/utils';
import { SidebarNavigationInterface } from '../../../interfaces/sidebar-nav.interface';


export interface INavigationState {
	routes: { [section: string]: SidebarNavigationInterface };
	active_route: string;
	loading: boolean;
	loaded: boolean;
}
export const initialState: INavigationState = {
	routes: {},
	active_route: '',
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
			const sections = Utils.Format.GetStringKeyEntities(state.routes);
			sections.forEach((section: SidebarNavigationInterface) => {
				if (section.nav_items && section.nav_items.length >0 ) {
					if (section.nav_items.find(n => n.route === active_route)) {
						section.nav_items.find(n => n.route === active_route).active = true;
					}
					section.nav_items.filter(n => n.route !== active_route).forEach(n => n.active = false);
					
				} else {
					return;
				}
			})

			const routes = Utils.Format.MapRoutesWithKey(sections, state);
			return {
				...state,
				active_route,
				routes
			};
		}

		case fromRouteActions.CLEAR_ACTIVE_ROUTE: {
			return {
				...state,
				active_route: '',
			};
		}

		default:
			return state;
	}
}

export const getRoutes = (state: INavigationState) => state.routes;
export const getRoutesLoaded = (state: INavigationState) => state.loaded;
export const getActiveRoutes = (state: INavigationState) => state.active_route;
