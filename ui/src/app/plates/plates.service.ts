import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Regions } from '../models/regions.enum';
import { PlateResult } from '../models/plate-result';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PlatesService {

    baseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }
   

    checkPlate(regionCode: Regions, term: string): Observable<PlateResult> {
        let url = this.baseUrl + `/api/v1/plates/regions/${regionCode}`;

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
