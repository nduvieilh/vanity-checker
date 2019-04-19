import { Injectable } from '@angular/core';
import { Regions } from '../models/regions.enum';
import { PlatesConfigService } from './plates-config.service';
import { PlateConfig } from './plate-config/plate-config';

@Injectable({
	providedIn: 'root'
})
export class PlatesValidationService {

	constructor() { }

	validatePlate(regionCode: Regions, term: string) {
		let config: PlateConfig = PlatesConfigService.getPlateConfig(regionCode);

		console.log(config);
	}
}
