import * as fromActions from '../actions/songs.actions';

import { Utils } from 'src/app/utils';
import { Song } from '../../pages/songs/interfaces/song.interface';
import { isArray } from 'util';

export interface ISongsState {
    entities: Song[];
    loading: boolean;
    loaded: boolean;
}
export const initialState: ISongsState = {
    entities: [],
    loading: false,
    loaded: false,
};

export function reducer(
    state: ISongsState = initialState,
    action: fromActions.SongActions
): ISongsState {
    switch (action.type) {
        case fromActions.LOAD_SONGS: {
            return { ...state, loading: true };
        }
        case fromActions.LOAD_SONGS_SUCCESS: {
            const entities = action.payload['Files'].slice(0, 600);
            console.log(entities);
            return {
                ...state,
                loading: false,
                loaded: true,
                entities,
            };
        }
        case fromActions.LOAD_SONGS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
            };
        }

        // case fromActions.ADD_SONGS_SUCCESS: {
        //     const songs = action.payload;
        //     const entities: {[id: number]: Song} = state.entities;
        //     if (isArray(songs)) {
        //         songs.forEach(s => {
        //             entities[s.id] = s;
        //         })
        //     } else {

        //         entities[songs.id] = songs;
        //     }
            
        //     return {
        //         ...state,
        //         entities
        //     };

        // }

        default:
            return state;
    }
}

export const getSongEntities = (state: ISongsState) => state.entities;
export const geSongsLoaded = (state: ISongsState) => state.loaded;