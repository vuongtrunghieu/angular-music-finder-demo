import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';
import { SearchMusicAction } from './store/actions/find-music.actions';
import { SearchMusicState } from './store/reducers/find-music.reducer';
import { TrackModel } from './store/models/track.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-music-finder';
  searchText: string;
  searchType: string;
  selectedTrack: TrackModel;
  searchResults$: Observable<SearchMusicState>;

  constructor(private _store: Store<AppState>) {
    this.searchText = '';
    this.searchType = 'track';
    this.selectedTrack = null;
  }

  ngOnInit(): void {
    this.searchResults$ = this._store.select(store => store.searchResult);
  }

  onSearch(): void {
    if (this.searchText) {
      this._store.dispatch(new SearchMusicAction(this.searchText, this.searchType));
    }
  }

  goToDetailsPage(link: string): void {
    // TODO
  }

  playTrackPreview(trackLink: TrackModel): void {
    this.selectedTrack = trackLink;
  }
}
