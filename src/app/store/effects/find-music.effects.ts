import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FindMusicService } from '../../services/find-music.service';
import { FindMusicAction, FindMusicActionTypes, SearchMusicSuccessAction } from '../actions/find-music.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class FindMusicEffects {
  constructor(private _actions$: Actions, private findMusicService: FindMusicService) {}

  @Effect() findMusic$ = this._actions$.pipe(
    ofType<FindMusicAction>(FindMusicActionTypes.FIND_MUSIC),
    mergeMap(data => {
      return this.findMusicService.searchMusic(data.payload as string, data['searchType']).pipe(
        map(res => new SearchMusicSuccessAction(res)),
        catchError(error => of(new SearchMusicSuccessAction(error))),
      );
    }),
  );
}
