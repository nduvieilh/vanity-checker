import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlateConfig } from './plate-config/plate-config';
import { PlateConfigTX } from './plate-config/plate-config-tx';
import { PlateConfigCA } from './plate-config/plate-config-ca';

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
    switch(plateRegionCode) {
        case 'CA':
            return new PlateConfigCA();
        case 'TX':
           return new PlateConfigTX();
        default:
            return new PlateConfig();
    }
  }

  checkPlate(plateRegionCode, searchTerm) {
    return this.http.get('/api/v1/plates/'+plateRegionCode+'/search/'+searchTerm);
  }
}
