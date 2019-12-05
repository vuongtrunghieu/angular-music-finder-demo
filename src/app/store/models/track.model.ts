import { ArtistModel, ArtistModelAdapter } from './artist.model';
import { AlbumModel, AlbumModelAdapter } from './album.model';
import { Injectable } from '@angular/core';
import { ModelAdapter } from '../shared/model-adapter';

export interface TrackModel {
  id?: number;
  title?: string;
  title_short?: string;
  title_version?: string;
  link?: string;
  duration?: number;
  track_position?: number;
  disk_number?: number;
  release_date?: Date;
  preview?: string;
  contributors?: ArtistModel[];
  artist?: ArtistModel;
  album?: AlbumModel;
  type?: string;
}

@Injectable({ providedIn: 'root' })
export class TrackModelAdapter implements ModelAdapter<TrackModel> {
  adaptFrom(item: any): TrackModel {
    return {
      id: item.id,
      title: item.title,
      title_short: item.title_short,
      title_version: item.title_version,
      link: item.link,
      duration: item.duration,
      track_position: item.track_position,
      disk_number: item.disk_number,
      release_date: item.release_date,
      preview: item.preview,
      contributors: item.contributors.map(contributor => {
        new ArtistModelAdapter().adaptFrom(contributor);
      }),
      artist: new ArtistModelAdapter().adaptFrom(item.artist),
      album: new AlbumModelAdapter().adaptFrom(item.album),
      type: item.type,
    };
  }
}
