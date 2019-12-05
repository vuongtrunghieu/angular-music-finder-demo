import {Injectable} from '@angular/core';
import {ModelAdapter} from '../shared/model-adapter';

export interface ArtistModel {
  id?: number;
  name?: string;
  link?: string;
  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
  tracklist?: string;
  type?: string;
}

@Injectable({providedIn: 'root'})
export class ArtistModelAdapter implements ModelAdapter<ArtistModel> {
  adaptFrom(item: any): ArtistModel {
    return {
      id: item.id,
      name: item.name,
      link: item.link,
      picture: item.picture,
      picture_small: item.picture,
      picture_big: item.picture_big,
      picture_xl: item.picture_xl,
      tracklist: item.tracklist,
      type: item.type,
    };
  }
}
