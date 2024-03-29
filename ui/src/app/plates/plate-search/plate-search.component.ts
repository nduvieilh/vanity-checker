import { Component, OnInit } from '@angular/core';
import { PlateSuggestions } from '../plate-suggestions';
import { sample } from 'lodash';

@Component({
  selector: 'app-plate-search',
  templateUrl: './plate-search.component.html',
  styleUrls: ['./plate-search.component.scss']
})
export class PlateSearchComponent implements OnInit {
    searchTerm: string = 'test 123';
    randomPlateSuggestion: string;
    

  constructor() { }

  ngOnInit() {
      // Start generating random plates
      setInterval(() => this.generateRandomPlateSuggestion(), 5000);
  }

  generateRandomPlateSuggestion() {
    this.randomPlateSuggestion = ''+sample(PlateSuggestions);
  }

}
