import { ArtistModel } from './artist.model';
import { AlbumModel } from './album.model';

export interface TrackModel {
  id?: number;
  title?: string;
  title_short?: string;
  title_version?: string;
  link?: string;
  share?: string;
  duration?: number;
  track_position?: number;
  disk_number?: number;
  rank?: number;
  release_date?: Date;
  preview?: string;
  contributors?: ArtistModel[];
  artist?: ArtistModel;
  album?: AlbumModel;
  type?: string;
}
