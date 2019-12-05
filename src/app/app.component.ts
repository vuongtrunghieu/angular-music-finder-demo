import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';
import { SearchMusicAction } from './store/actions/find-music.actions';
import { ArtistModel } from './store/models/artist.model';
import { AlbumModel } from './store/models/album.model';
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
  searchResults$: Observable<Array<ArtistModel> | Array<AlbumModel> | Array<TrackModel>>;

  constructor(private _store: Store<AppState>) {
    this.searchText = '';
    this.searchType = 'track';
  }

  ngOnInit(): void {
    this.searchResults$ = this._store.select(store => store.searchResult);
  }

  onSearch(): void {
    if (this.searchText) {
      this._store.dispatch(new SearchMusicAction(this.searchText, this.searchType));
    }
  }
}
