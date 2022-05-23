import { Component, OnInit } from '@angular/core';
import {SearchResult} from "../models/search-result.model";
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchResult?: SearchResult;
  number: number= 0;
  constructor(private searchService: SearchService) { }
  ngOnInit(): void {
  }
  retrivePrimeNumbers(): void {
    this.searchService.findPrimeNumbersOfNumber(this.number)
      .subscribe({
        next: (data) => {
          this.searchResult = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
