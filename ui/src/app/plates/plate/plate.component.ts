import { Component, OnInit, OnChanges, SimpleChanges, Input, HostBinding } from '@angular/core';
import { PlateConfig } from '../plate-config/plate-config';
import { PlatesService } from '../plates.service';
import { Regions } from 'src/app/models/regions.enum';
import { style } from '@angular/animations';
import { config, Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PlateResult } from 'src/app/models/plate-result';

@Component({
    selector: 'app-plate',
    templateUrl: './plate.component.html',
    styleUrls: ['./plate.component.scss']
})
export class PlateComponent implements OnInit, OnChanges {
    @Input() searchTerm: string;
    @Input() plateRegionCode: Regions;
    withRefresh: boolean = false;
    config: PlateConfig;
    plateResult$: Observable<PlateResult>;
    private searchTerm$: Subject<string> = new Subject();

    constructor(private platesService: PlatesService) { }

    @HostBinding('style.backgroundColor') get backgroundColor() { return this.config.design.backgroundColor; }
    @HostBinding('style.color') get color() { return this.config.design.textColor; }
    @HostBinding('class.invalid') get valid() { return !this.config.test(this.searchTerm) }

    ngOnInit() {
        this.config = this.platesService.getPlateConfig(this.plateRegionCode);
        console.log('[', this.plateRegionCode, '] plate config ', this.config);


        this.plateResult$ = this.searchTerm$.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            switchMap(searchTerm =>
              this.platesService.checkPlate(this.plateRegionCode, searchTerm))
          );
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.searchTerm.currentValue) {
            let searchTerm = changes.searchTerm.currentValue.trim();
            //this.checkPlate(this.searchTerm);
            this.searchTerm$.next(searchTerm);
        }
    }


    // checkPlate(searchTerm: string) {
    //     this.platesService.checkPlate(this.plateRegionCode, searchTerm)
    //         .subscribe((data: any) => {
    //             console.log(data);
    //         });
    // }

}
