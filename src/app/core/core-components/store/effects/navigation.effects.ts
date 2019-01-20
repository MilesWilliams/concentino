import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import * as NavActions from '../actions';

import { map } from 'rxjs/operators';
import { SidebarNavigation } from 'src/app/core/configs/sidebar-navigation.config';
import { GO, Go } from 'src/app/core/store';

@Injectable()
export class NavigationEffects {
	constructor(private actions$: Actions) {}
	@Effect()
	loadNavigationRoutes$ = this.actions$
		.ofType(NavActions.LOAD_ROUTES)
		.pipe(
			map(_ => new NavActions.LoadNavigationRoutesSuccess(SidebarNavigation))
		);

	@Effect()
	triggerSetActiveRoute$ = this.actions$
		.ofType(GO)
		.pipe(
			map((action: Go) => action.payload),
			map((payload) => new NavActions.SetActiveRoute(payload.path[0] as string))
		);

	@Effect()
	setActiveRoute$ = this.actions$.ofType(NavActions.SET_ACTIVE_ROUTE).pipe(
		map((action: NavActions.SetActiveRoute) => action.payload),
		map(id => new NavActions.SetActiveRouteSuccess(id))
	);
}
