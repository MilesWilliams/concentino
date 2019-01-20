import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import * as NavActions from '../actions';

import { map } from 'rxjs/operators';
import { SidebarNavigation } from 'src/app/core/configs/sidebar-navigation.config';

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
	setActiveRoute$ = this.actions$.ofType(NavActions.SET_ACTIVE_ROUTE).pipe(
		map((action: NavActions.SetActiveRoute) => action.payload),
		map(id => new NavActions.SetActiveRouteSuccess(id))
	);
}
