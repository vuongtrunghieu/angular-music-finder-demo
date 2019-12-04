import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CustomEncoder } from '../utils/custom-encoder';
import { Observable } from 'rxjs';
import { SearchResultModel, SearchResultModelAdapter } from '../store/models/search-result.model';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FindMusicService {
  private readonly API_BASE_URL = environment.API_URL;

  constructor(private _http: HttpClient, private readonly _searchResultAdapter: SearchResultModelAdapter) {}

  searchTracks(searchTerm: string): Observable<Array<SearchResultModel>> {
    const url = `${this.API_BASE_URL}search`;
    const httpParams: HttpParams = new HttpParams({ encoder: new CustomEncoder() }).set('q', searchTerm);
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'x-rapidapi-host': environment.RAPID_HOST,
      'x-rapidapi-key': environment.RAPID_API_KEY,
    });

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
