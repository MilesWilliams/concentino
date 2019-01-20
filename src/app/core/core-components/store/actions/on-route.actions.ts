import { Action } from '@ngrx/store';
import { Utils } from 'src/app/utils';

export const SET_ACTIVE_ROUTE = Utils.Type(
	'[Navigation: Set] Set active route'
);
export const SET_ACTIVE_ROUTE_SUCCESS = Utils.Type(
	'[Navigation: Set] Set active route success'
);
export const SET_ACTIVE_ROUTE_FAIL = Utils.Type(
	'[Navigation: Set] Set active route fail'
);

export const CLEAR_ACTIVE_ROUTE = Utils.Type(
	'[Navigation: Clear] Clear active route'
);

export class SetActiveRoute implements Action {
	readonly type = SET_ACTIVE_ROUTE;
	constructor(public payload: string) {}
}

export class SetActiveRouteSuccess implements Action {
	public readonly type = SET_ACTIVE_ROUTE_SUCCESS;
	constructor(public payload: string) {}
}

export class SetActiveRouteFail implements Action {
	public readonly type = SET_ACTIVE_ROUTE_FAIL;
	constructor(public payload: any) {}
}

export class ClearActiveRoute implements Action {
	public readonly type = CLEAR_ACTIVE_ROUTE;
}
/**
 * OnRouteActions type.
 * @type {Actions}
 */
export type OnRouteActions =
	| SetActiveRoute
	| SetActiveRouteSuccess
	| SetActiveRouteFail
	| ClearActiveRoute;
