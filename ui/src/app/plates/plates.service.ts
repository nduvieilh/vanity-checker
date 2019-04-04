import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PlateConfig } from './plate-config/plate-config';
import { PlateConfigTX } from './plate-config/plate-config-tx';
import { PlateConfigCA } from './plate-config/plate-config-ca';
import { Regions } from '../models/regions.enum';
import { PlateResult } from '../models/plate-result';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlatesService {

    constructor(private http: HttpClient) { }
    /**
     * @description Attempts to find a plate config for the provided plateRegionCode, else 
     * return generic plate config
     * @param plateRegionCode 
     * @returns PlateConfig
     */
    getPlateConfig(plateRegionCode): PlateConfig {
        switch (plateRegionCode) {
            case 'CA':
                return new PlateConfigCA();
            case 'TX':
                return new PlateConfigTX();
            default:
                return new PlateConfig();
        }
    }

    checkPlate(regionCode: Regions, term: string): Observable<PlateResult> {
        let url = `/api/v1/plates/regions/${regionCode}`;

        // Trim search term
        term = term.trim();

        // Add safe, URL encoded search parameter if there is a search term
        const options = term ? { 
            params: new HttpParams().set('term', term) 
        } : {};

        return this.http.get<PlateResult>(url, options)
            // .pipe(
            //     catchError(this.handleError())
            // );
        // let result: PlateResult = {
        //     availability: false,
        //     searchCount: 5,
        //     lastSearched: new Date()
        // }

        // return result;
    }
}
