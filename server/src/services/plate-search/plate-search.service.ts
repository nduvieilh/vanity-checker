import { PlateResult } from 'models/plate-result';

export abstract class PlateSearch {

    constructor() {
    }

    abstract search(term: String): PlateResult; // must be implemented in derived classes
}

