import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CustomEncoder } from '../utils/custom-encoder';
import { Observable } from 'rxjs';
import { SearchResultModel, SearchResultModelAdapter } from '../store/models/search-result.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FindMusicService {
  private readonly API_BASE_URL = 'https://deezerdevs-deezer.p.rapidapi.com/';

  constructor(private _http: HttpClient, private readonly _searchResultAdapter: SearchResultModelAdapter) {}

  searchTracks(searchTerm: string): Observable<Array<SearchResultModel>> {
    const url = `${this.API_BASE_URL}search`;
    const httpParams: HttpParams = new HttpParams({ encoder: new CustomEncoder() }).set('q', searchTerm);
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'x-rapidapi-host': '',
      'x-rapidapi-key': '',
    });

    console.log(process.env.TEST);
    return this._http
      .get<any>(url, { headers: httpHeaders, params: httpParams })
      .pipe(
        map(res => {
          return res.data.map(data => this._searchResultAdapter.adaptFrom(data));
        }),
        catchError(err => err),
      ) as Observable<Array<SearchResultModel>>;
  }
}
