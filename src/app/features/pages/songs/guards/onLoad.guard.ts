import { Injectable } from '@angular/core';
import { CanActivate, Params } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';

import { tap, filter, take, switchMap, catchError, map } from 'rxjs/operators';

import * as fromFeature from '../../../store';
import * as featureReducer from '../../../store/reducers';

@Injectable()
export class SongsLoadedGuard implements CanActivate {
	constructor(private store: Store<featureReducer.Concentino>) {}

	canActivate(): Observable<boolean> {
		const res= this.checkStore().pipe(
			switchMap(() => of(true)),
			catchError(() => of(false))
		);
		return res;
	}

	private checkStore(): Observable<boolean> {
		return this.store.select(fromFeature.getSongsLoaded).pipe(
			tap(loaded => {
				console.log('load', loaded);
				if (!loaded) {
					this.store.dispatch(new fromFeature.LoadSongs());
				}
			}),
			filter(loaded => loaded),
			take(1)
		);
	}
}
