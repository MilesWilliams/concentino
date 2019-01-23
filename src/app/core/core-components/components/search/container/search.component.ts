import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'concentino-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }

  public onSearch(e: KeyboardEvent) {
    const element = e.target as HTMLInputElement;
    console.log(element.value);
  }
}
