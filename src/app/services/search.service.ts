import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SearchResult} from "../models/search-result.model";
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/prime-numbers';
const baseUrlSearchHistory = 'http://localhost:8080/api/search-history';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearchHistory(): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>( baseUrlSearchHistory);
  }

  findPrimeNumbersOfNumber(number: number): Observable<SearchResult> {
    return this.http.post(`${baseUrl}/${number}`, null);
  }
}
