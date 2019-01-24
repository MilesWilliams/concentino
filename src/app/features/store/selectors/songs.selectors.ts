import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSongs from '../reducers/songs.reducer';
import { Utils } from 'src/app/utils';
// import { getSearchBarQuery } from 'src/app/core/store/reducers/search-bar.reducer';


// Acronyms state slice
export const getSongsState = createSelector(
    fromFeature.getConcentinotate,
    (state: fromFeature.Concentino) => state.songs
);

// Acronyms state entities
export const getAcronymEntities = createSelector(
    getSongsState,
    fromSongs.getSongEntities
);

// Acronyms state
export const getAllSongs = createSelector(
    getAcronymEntities, 
    (entities) => entities
    );

export const getSongsLoaded = createSelector(getSongsState, fromSongs.geSongsLoaded);

// export const getSortAcronyms = createSelector(getSongsState, getAllAcronyms,
//     (state, entities) => {
//         return Utils.Format.MapToSortedEntities(entities, state);
//     }
// )
