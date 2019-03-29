import { Component, OnInit, OnChanges, SimpleChanges, Input, HostBinding } from '@angular/core';
import { PlateConfig } from '../plate-config/plate-config';
import { PlatesService } from '../plates.service';
import { Regions } from 'src/app/models/regions.enum';
import { style } from '@angular/animations';
import { config } from 'rxjs';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.scss']
})
export class PlateComponent implements OnInit, OnChanges {
  @Input() searchTerm: String;
  @Input() plateRegionCode: Regions;
  config: PlateConfig;

  constructor(private platesService: PlatesService) { }

  @HostBinding('style.backgroundColor') get backgroundColor() { return this.config.design.backgroundColor; }
  @HostBinding('style.color') get color() { return this.config.design.textColor; }
  @HostBinding('class.invalid') get valid() { return !this.config.test(this.searchTerm) }

  ngOnInit() {
    this.config = this.platesService.getPlateConfig(this.plateRegionCode);
    console.log('[', this.plateRegionCode,'] plate config ', this.config);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.searchTerm.currentValue) {
      this.checkPlate(this.searchTerm);  
    }
  }


  checkPlate(searchTerm: String) {
    this.platesService.checkPlate(this.plateRegionCode, searchTerm)
        .subscribe((data: any) => {
            console.log(data);
        });
  }

}
