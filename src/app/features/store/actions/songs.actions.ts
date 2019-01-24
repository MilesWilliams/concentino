import { Action } from '@ngrx/store';

import { Utils } from 'src/app/utils';
import { Song } from '../../pages/songs/interfaces/song.interface';

export const DELETE_SONGS = Utils.Type('[Songs] Delete songs');


export const LOAD_SONGS = Utils.Type('[Songs] Load songs');
export const LOAD_SONGS_SUCCESS = Utils.Type('[Songs] Load songs success');
export const LOAD_SONGS_FAIL = Utils.Type('[Songs] Load songs fail');

export class LoadSongs implements Action {
	readonly type = LOAD_SONGS;
}
export class LoadSongsSuccess implements Action {
	readonly type = LOAD_SONGS_SUCCESS;
	constructor( public payload: any[] ) {}
}
export class LoadSongsFail implements Action {
	readonly type = LOAD_SONGS_FAIL;
	constructor( public payload: any ) {}
}


export const ADD_SONGS = Utils.Type('[Songs] Add songs');
export const ADD_SONGS_SUCCESS = Utils.Type('[Songs] Add songs success');
export const ADD_SONGS_FAIL = Utils.Type('[Songs] Add songs fail');

export class AddSongs implements Action {
    public readonly type = ADD_SONGS;
}
export class AddSongsSuccess implements Action {
    public readonly type = ADD_SONGS_SUCCESS;
    
    constructor( public payload: Song | Song[] ) {}
}
export class AddSongsFail implements Action {
    public readonly type = ADD_SONGS_FAIL;
    
    constructor( public payload: any) {}
}

/**
 * Song type.
 * @type {Actions}
 */
export type SongActions = 
LoadSongs 
| AddSongs
| LoadSongsSuccess
| LoadSongsFail
| AddSongsSuccess
| AddSongsFail;
