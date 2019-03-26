import { PlateConfig } from './plate-config';

export class PlateConfigTX extends PlateConfig {
    constructor() {
        super();
    }

    test(input) {
        return (/[A-Z]{1,3}[0-9]{1,3}/g).test(input);
    }
}
