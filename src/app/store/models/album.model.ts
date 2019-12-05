import { ArtistModel, ArtistModelAdapter } from './artist.model';
import { TrackModel } from './track.model';
import { ModelAdapter } from '../shared/model-adapter';
import { Injectable } from '@angular/core';

export interface AlbumModel {
  id?: number;
  title?: string;
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
  tracklist?: string;
  contributors?: ArtistModel[];
  artist?: ArtistModel;
  type?: string;
  tracks?: {
    data: TrackModel[];
  };
}

@Injectable({ providedIn: 'root' })
export class AlbumModelAdapter implements ModelAdapter<AlbumModel> {
  adaptFrom(item: any): AlbumModel {
    return {
      id: item.id,
      title: item.title,
      link: item.link,
      cover: item.cover,
      cover_small: item.cover_small,
      cover_medium: item.cover_medium,
      cover_big: item.cover_big,
      cover_xl: item.cover_xl,
      genre_id: item.genre_id,
      label: item.label,
      nb_tracks: item.nb_tracks,
      duration: item.duration,
      rating: item.rating,
      release_date: item.release_date,
      record_type: item.record_type,
      tracklist: item.tracklist,
      contributors: item.contributors.map(contributor => {
        new ArtistModelAdapter().adaptFrom(contributor);
      }),
      artist: new ArtistModelAdapter().adaptFrom(item.artist),
      type: item.type,
      tracks: null,
    };
  }
}
