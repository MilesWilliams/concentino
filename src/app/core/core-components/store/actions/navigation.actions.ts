import { Action } from '@ngrx/store';
import { Utils } from 'src/app/utils';
import { SidebarNavigationInterface } from 'src/app/core/interfaces/sidebar-nav.interface';

export const LOAD_ROUTES = Utils.Type('[Navigation: Load] Load all navigation');
export const LOAD_ROUTES_SUCCESS = Utils.Type(
	'[Navigation: Load] Load all navigation success'
);
export const LOAD_ROUTES_FAIL = Utils.Type(
	'[Navigation: Load] Load all navigation fail'
);

export class LoadNavigationRoutes implements Action {
	readonly type = LOAD_ROUTES;
}

export class LoadNavigationRoutesSuccess implements Action {
	public readonly type = LOAD_ROUTES_SUCCESS;
	constructor(public payload: SidebarNavigationInterface[]) {}
}

export class LoadNavigationRoutesFail implements Action {
	public readonly type = LOAD_ROUTES_FAIL;
	constructor(public payload: any) {}
}

/**
 * Authentication type.
 * @type {Actions}
 */
export type NavigationActions =
	| LoadNavigationRoutes
	| LoadNavigationRoutesSuccess
	| LoadNavigationRoutesFail;
