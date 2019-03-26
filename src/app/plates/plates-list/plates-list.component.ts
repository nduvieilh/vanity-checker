import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Regions } from '../../models/regions.enum';

@Component({
  selector: 'app-plates-list',
  inputs: ['searchTerm'],
  templateUrl: './plates-list.component.html',
  styleUrls: ['./plates-list.component.scss']
})
export class PlatesListComponent implements OnChanges {
    searchTerm: string|null = null;
    plateRegions: Regions[] = [
        Regions.AL,
        Regions.TX
    ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
