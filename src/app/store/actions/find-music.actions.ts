import { Action } from '@ngrx/store';
import {SearchResultModel} from '../models/search-result.model';

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

  constructor(public payload: SearchResultModel) {}
}

export class SearchMusicFailureAction implements Action {
  readonly type = FindMusicActionTypes.FIND_MUSIC_FAILURE;

  constructor(public payload: Error) {}
}

export type FindMusicAction = SearchMusicAction | SearchMusicSuccessAction | SearchMusicFailureAction;
