import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CustomEncoder } from '../utils/custom-encoder';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ArtistModel, ArtistModelAdapter } from '../store/models/artist.model';
import { TrackModel, TrackModelAdapter } from '../store/models/track.model';
import { AlbumModel, AlbumModelAdapter } from '../store/models/album.model';

@Injectable({
  providedIn: 'root',
})
export class FindMusicService {
  private readonly API_BASE_URL = environment.API_URL;
  private readonly _httpHeader: HttpHeaders;

  constructor(
    private _http: HttpClient,
    private readonly _artistModelAdapter: ArtistModelAdapter,
    private readonly _albumModelAdapter: AlbumModelAdapter,
    private readonly _trackModelAdapter: TrackModelAdapter,
  ) {
    this._httpHeader = new HttpHeaders({
      'x-rapidapi-host': environment.RAPID_HOST,
      'x-rapidapi-key': environment.RAPID_API_KEY,
    });
  }

  searchTracks(searchTerm: string): Observable<Array<TrackModel>> {
    const url = `${this.API_BASE_URL}search/track`;
    const httpParams: HttpParams = new HttpParams({ encoder: new CustomEncoder() }).set('q', searchTerm);

    return this._http
      .get<any>(url, { headers: this._httpHeader, params: httpParams })
      .pipe(
        map(res => {
          return res.data.map(data => this._trackModelAdapter.adaptFrom(data));
        }),
        catchError(err => err),
      ) as Observable<Array<TrackModel>>;
  }

  searchArtists(searchTerm: string): Observable<Array<ArtistModel>> {
    const url = `${this.API_BASE_URL}search/artist`;
    const httpParams: HttpParams = new HttpParams({ encoder: new CustomEncoder() }).set('q', searchTerm);

    return this._http
      .get<any>(url, { headers: this._httpHeader, params: httpParams })
      .pipe(
        map(res => {
          return res.data.map(data => this._artistModelAdapter.adaptFrom(data));
        }),
        catchError(err => err),
      ) as Observable<Array<ArtistModel>>;
  }

  searchAlbums(searchTerm: string): Observable<Array<AlbumModel>> {
    const url = `${this.API_BASE_URL}search/album`;
    const httpParams: HttpParams = new HttpParams({ encoder: new CustomEncoder() }).set('q', searchTerm);

    return this._http
      .get<any>(url, { headers: this._httpHeader, params: httpParams })
      .pipe(
        map(res => {
          return res.data.map(data => this._albumModelAdapter.adaptFrom(data));
        }),
        catchError(err => err),
      ) as Observable<Array<AlbumModel>>;
  }
}
