import { ArtistModel } from './artist.model';
import { TrackModel } from './track.model';

export interface AlbumModel {
  id?: number;
  title?: string;
  upc?: string;
  link?: string;
  cover?: string;
  cover_small?: string;
  cover_medium?: string;
  cover_big?: string;
  cover_xl?: string;
  genre_id?: number;
  label?: string;
  nb_tracks?: number;
  duration?: number;
  rating?: number;
  release_date?: Date;
  record_type?: string;
  available?: boolean;
  tracklist?: string;
  contributors?: ArtistModel[];
  artist?: ArtistModel;
  type?: string;
  tracks?: {
    data: TrackModel[];
  };
}
