import { Action } from '@ngrx/store';
import {ArtistModel} from '../models/artist.model';
import {AlbumModel} from '../models/album.model';
import {TrackModel} from '../models/track.model';

export enum FindMusicActionTypes {
  FIND_MUSIC = '[FIND-MUSIC] Find Music',
  FIND_MUSIC_SUCCESS = '[FIND-MUSIC] Find Music Success',
  FIND_MUSIC_FAILURE = '[FIND-MUSIC] Find Music Failure',
}

export class SearchMusicAction implements Action {
  readonly type = FindMusicActionTypes.FIND_MUSIC;

  constructor(public payload: string, public searchType: string) {}
}

export class SearchMusicSuccessAction implements Action {
  readonly type = FindMusicActionTypes.FIND_MUSIC_SUCCESS;

  constructor(public payload: Array<ArtistModel> | Array<AlbumModel> | Array<TrackModel>) {}
}

export class SearchMusicFailureAction implements Action {
  readonly type = FindMusicActionTypes.FIND_MUSIC_FAILURE;

  constructor(public payload: Error) {}
}

export type FindMusicAction = SearchMusicAction | SearchMusicSuccessAction | SearchMusicFailureAction;
