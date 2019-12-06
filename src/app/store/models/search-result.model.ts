import { Injectable } from '@angular/core';
import { ModelAdapter } from '../shared/model-adapter';

export interface SearchResultModel {
  data?: any[];
  total?: number;
  prev?: string;
  next?: string;
  searchType?: string;
}

@Injectable({ providedIn: 'root' })
export class SearchResultModelAdapter implements ModelAdapter<SearchResultModel> {
  adaptFrom(item: any): SearchResultModel {
    return {
      data: item.data,
      total: item.total,
      prev: item.prev,
      next: item.next,
    };
  }
}
