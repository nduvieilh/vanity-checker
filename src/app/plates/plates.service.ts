import { Injectable } from '@angular/core';
import { PlateConfig } from './plate-config/plate-config';
import { PlateConfigTX } from './plate-config/plate-config-tx';

@Injectable({
  providedIn: 'root'
})
export class PlatesService {
  constructor() { }

  /**
   * @description Attempts to find a plate config for the provided plateRegionCode, else 
   * return generic plate config
   * @param plateRegionCode 
   * @returns PlateConfig
   */
  getPlateConfig(plateRegionCode): PlateConfig {
    switch(plateRegionCode) {
      case 'TX':
        return new PlateConfigTX();
      default:
        return new PlateConfig();
    }
  }
}
