import { PlateResult } from 'models/plate-result';
import { Regions } from 'models/regions.enum';
import { PlateSearch } from './plate-search.service';

export class PlateSearchTX extends PlateSearch {
	constructor() {
		super();
	}

	search(term: string): PlateResult {
		let result: PlateResult = {
			availability: true,
			regionCode: Regions.TX,
			searchCount: 2,
			lastSearched: new Date(),
			searchTerm: term
		};

		console.log('search', term);

		return result;
	}
}