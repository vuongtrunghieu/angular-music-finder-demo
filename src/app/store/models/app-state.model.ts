import { ArtistModel } from './artist.model';
import { AlbumModel } from './album.model';
import { TrackModel } from './track.model';

export interface AppState {
  readonly searchResult: Array<ArtistModel> | Array<AlbumModel> | Array<TrackModel>;
}
