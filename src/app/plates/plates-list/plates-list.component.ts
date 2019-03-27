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
      Regions.AK,
      Regions.AS,
      Regions.AZ,
      Regions.AR,
      Regions.CA,
      Regions.CO,
      Regions.CT,
      Regions.DE,
      Regions.DC,
      Regions.FL,
      Regions.GA,
      Regions.GU,
      Regions.HI,
      Regions.ID,
      Regions.IL,
      Regions.IN,
      Regions.IA,
      Regions.KS,
      Regions.KY,
      Regions.LA,
      Regions.ME,
      Regions.MH,
      Regions.MD,
      Regions.MA,
      Regions.MI,
      Regions.MN,
      Regions.MS,
      Regions.MO,
      Regions.MT,
      Regions.NE,
      Regions.NV,
      Regions.NH,
      Regions.NJ,
      Regions.NM,
      Regions.NY,
      Regions.NC,
      Regions.ND,
      Regions.MP,
      Regions.OH,
      Regions.OK,
      Regions.OR,
      Regions.PW,
      Regions.PA,
      Regions.PR,
      Regions.RI,
      Regions.SC,
      Regions.SD,
      Regions.TN,
      Regions.TX,
      Regions.UT,
      Regions.VT,
      Regions.VI,
      Regions.VA,
      Regions.WA,
      Regions.WV,
      Regions.WI,
      Regions.WY
    ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
