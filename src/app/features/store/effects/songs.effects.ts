import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



import * as SongsActions from '../actions/songs.actions';
import { FileManagerService } from 'src/app/core/services/file-manager/file-manager.service';
import { Song } from '../../pages/songs/interfaces/song.interface';


@Injectable()
export class SongsEffects {

    constructor(private actions$: Actions, private _svc: FileManagerService) { }

    /**
     *
     *
     * @memberof SongsEffects
     */
    @Effect()
    allAcronyms$ = this.actions$.ofType(SongsActions.LOAD_SONGS).pipe(
        switchMap(_ => {
            return this._svc
                .getAllSongs({path: '/Users/miles/Music'})
                .pipe(
                    map(res => new SongsActions.LoadSongsSuccess(res as any)),
                    catchError(error =>
                        of(new SongsActions.LoadSongsFail(error))
                    )
                );
        })
    );
}