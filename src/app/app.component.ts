import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';
import { SearchResultModel } from './store/models/search-result.model';
import { SearchMusicAction } from './store/actions/find-music.actions';
import { FindMusicState } from './store/reducers/find-music.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-music-finder';
  searchResults$: Observable<FindMusicState>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.searchResults$ = this._store.select(store => store.searchResult);
    this.searchResults$.subscribe(res => console.log(res.results));
  }

  searchMusic(): void {
    this._store.dispatch(new SearchMusicAction('kupl'));
  }
}
