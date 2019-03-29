import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Regions } from '../../models/regions.enum';

@Component({
  selector: 'app-plates-list',
  templateUrl: './plates-list.component.html',
  styleUrls: ['./plates-list.component.scss']
})
export class PlatesListComponent implements OnChanges {
    @Input() searchTerm: string|null = null;
    plateRegions: Regions[] = [
      Regions.AL,
      Regions.TX,
      Regions.CA
    ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
