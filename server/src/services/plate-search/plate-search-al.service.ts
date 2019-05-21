import { PlateResult } from 'models/plate-result';
import { PlateSearch } from './plate-search.service';
import { Regions } from 'models/regions.enum';

export class PlateSearchAL extends PlateSearch {
	constructor() {
		super();
	}

	search(term: string): PlateResult {
		let result: PlateResult = {
			availability: true,
			regionCode: Regions.AL,
			searchCount: 0,
			lastSearched: new Date(),
			searchTerm: term
		};

		console.log('search', term);

		return result;
	}
}