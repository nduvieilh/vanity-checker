import { Regions } from 'models/regions.enum';
import { PlateResult } from 'models/plate-result';
import { PlateSearch } from './plate-search.service';
import { PlateSearchAL } from './plate-search-al.service';
import { PlateSearchTX } from './plate-search-tx.service';

export function SearchPlates(plateRegion: Regions, query: string): PlateResult {
	let plateSearch: PlateSearch;
	
	switch(plateRegion) {
		case Regions.AL:
			plateSearch = new PlateSearchAL();
			break;
		case Regions.TX:
			plateSearch = new PlateSearchTX();
			break;
		default:
			let result: PlateResult = {
				availability: false,
				regionCode: Regions.NONE,
				searchCount: 0,
				lastSearched: new Date(),
				searchTerm: query
			};

			return result;
	}

	return plateSearch.search(query);
}