import { FindMusicAction, FindMusicActionTypes } from '../actions/find-music.actions';
import { SearchResultModel } from '../models/search-result.model';

export interface SearchMusicState {
  results: SearchResultModel;
  error: Error;
}

const initialState: SearchMusicState = {
  results: {
    data: [],
    total: 0,
    searchType: null,
  },
  error: undefined,
};

export function FindMusicReducer(state: SearchMusicState = initialState, action: FindMusicAction) {
  switch (action.type) {
    case FindMusicActionTypes.FIND_MUSIC:
      return { ...state };
    case FindMusicActionTypes.FIND_MUSIC_SUCCESS:
      return { ...state, results: action.payload };
    case FindMusicActionTypes.FIND_MUSIC_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
