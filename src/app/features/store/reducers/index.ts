import {
    ActionReducer,
    combineReducers,
    ActionReducerMap,
    createFeatureSelector,
    compose,
} from '@ngrx/store';

import * as fromSongs from './songs.reducer';

import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';

export interface Concentino {
    songs: fromSongs.ISongsState;
}

export const reducers: ActionReducerMap<Concentino> = {
    songs: fromSongs.reducer,
};

export const storeConfig: LocalStorageConfig = {
    keys: ['songs'],
    rehydrate: true,
};

const developmentReducer: ActionReducer<Concentino> = compose(
    localStorageSync(storeConfig),
    combineReducers
)(reducers);

// production reducer
const productionReducer: ActionReducer<Concentino> = combineReducers(reducers);

export function ConcentinoStateReducer(state: Concentino, action: any) {
    return developmentReducer(state, action);
}

export const getConcentinotate = createFeatureSelector<Concentino>('ConcentinoState');
