import { SearchMusicState } from '../reducers/find-music.reducer';

export interface AppState {
  readonly searchResult: SearchMusicState;
}
