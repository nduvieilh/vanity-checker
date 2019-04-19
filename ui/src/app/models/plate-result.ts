import { Regions } from './regions.enum';

export interface PlateResult {
    availability: boolean;
    searchCount: number;
    lastSearched: Date;
    regionCode: Regions;
}
