import { PlateResult } from 'models/plate-result';
import { PlateSearch } from './plate-search.service';
import { Regions } from 'models/regions.enum';

export class PlateSearchAL extends PlateSearch {
	constructor() {
		super();
	}

	search(term: String): PlateResult {
		let result: PlateResult = {
			availability: true,
			regionCode: Regions.AL,
			searchCount: 0,
			lastSearched: new Date()
		};

		console.log('search', term);

		return result;
	}
}