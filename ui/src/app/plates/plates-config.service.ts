import { Injectable } from '@angular/core';
import { PlateConfig } from './plate-config/plate-config';
import { PlateConfigCA } from './plate-config/plate-config-ca';
import { PlateConfigTX } from './plate-config/plate-config-tx';
import { Regions } from '../models/regions.enum';

@Injectable({
	providedIn: 'root'
})
export class PlatesConfigService {
	constructor() { }

	/**
	  * @description Attempts to find a plate config for the provided plateRegionCode, else 
	  * return generic plate config
	  * @param plateRegionCode 
	  * @returns PlateConfig
	  */
	static getPlateConfig(plateRegionCode: Regions): PlateConfig {
		switch (plateRegionCode) {
			case 'CA':
				return new PlateConfigCA();
			case 'TX':
				return new PlateConfigTX();
			default:
				return new PlateConfig();
		}
	}
}
