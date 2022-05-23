import { Component, OnInit } from '@angular/core';
import {SearchResult} from "../models/search-result.model";
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit {
  searchResult?: SearchResult[];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  retriveLast10Searchs(): void {
    this.searchService.getSearchHistory()
      .subscribe({
        next: (data) => {
          this.searchResult = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
