import { ArtistModel } from './artist.model';
import { AlbumModel } from './album.model';
import { ModelAdapter } from '../shared/model-adapter';
import { Injectable } from '@angular/core';

export interface SearchResultModel {
  id?: number;
  title?: string;
  title_short?: string;
  title_version?: string;
  link?: string;
  duration?: number;
  preview?: string;
  artist?: ArtistModel;
  album?: AlbumModel;
  type?: string;
}

@Injectable({ providedIn: 'root' })
export class SearchResultModelAdapter implements ModelAdapter<SearchResultModel> {
  adaptFrom(item: any): SearchResultModel {
    return {
      id: item.id,
      title: item.title,
      title_short: item.title_short,
      title_version: item.title_version,
      link: item.link,
      duration: item.duration,
      preview: item.preview,
      type: item.type,
    };
  }
}
