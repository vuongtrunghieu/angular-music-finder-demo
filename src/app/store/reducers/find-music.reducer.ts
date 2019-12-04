import { SearchResultModel } from '../models/search-result.model';
import { FindMusicAction, FindMusicActionTypes } from '../actions/find-music.actions';

export interface FindMusicState {
  results: Array<SearchResultModel>;
  error: Error;
}

const initialState: FindMusicState = {
  results: [],
  error: undefined,
};

export function FindMusicReducer(state: FindMusicState = initialState, action: FindMusicAction) {
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
