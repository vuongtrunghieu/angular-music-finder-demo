import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CustomEncoder } from '../utils/custom-encoder';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SearchResultModel, SearchResultModelAdapter } from '../store/models/search-result.model';

@Injectable({
  providedIn: 'root',
})
export class FindMusicService {
  private readonly API_BASE_URL = environment.API_URL;
  private readonly _httpHeader: HttpHeaders;

  constructor(private _http: HttpClient, private readonly _searchResultAdapter: SearchResultModelAdapter) {
    this._httpHeader = new HttpHeaders({
      'x-rapidapi-host': environment.RAPID_HOST,
      'x-rapidapi-key': environment.RAPID_API_KEY,
    });
  }

  searchMusic(searchTerm: string, searchType: string): Observable<SearchResultModel> {
    const url = `${this.API_BASE_URL}search/${searchType === 'track' ? 'track' : searchType === 'artist' ? 'artist' : 'album'}`;
    const httpParams: HttpParams = new HttpParams({ encoder: new CustomEncoder() }).set('q', searchTerm);

    return this._http
      .get<any>(url, { headers: this._httpHeader, params: httpParams })
      .pipe(
        map(res => {
          return { ...this._searchResultAdapter.adaptFrom(res), searchType };
        }),
        catchError(err => err),
      ) as Observable<SearchResultModel>;
  }
}
