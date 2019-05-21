import { PlateResult } from 'models/plate-result';
import { Regions } from 'models/regions.enum';
import { PlateSearch } from './plate-search.service';

export class PlateSearchTX extends PlateSearch {
	constructor() {
		super();
	}

	search(term: String): PlateResult {
		let result: PlateResult = {
			availability: true,
			regionCode: Regions.TX,
			searchCount: 2,
			lastSearched: new Date()
		};

		console.log('search', term);

		return result;
	}
}