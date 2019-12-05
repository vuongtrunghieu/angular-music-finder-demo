import { FindMusicAction, FindMusicActionTypes } from '../actions/find-music.actions';
import { ArtistModel } from '../models/artist.model';
import { AlbumModel } from '../models/album.model';
import { TrackModel } from '../models/track.model';

export interface FindMusicState {
  results: Array<ArtistModel> | Array<AlbumModel> | Array<TrackModel>;
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
