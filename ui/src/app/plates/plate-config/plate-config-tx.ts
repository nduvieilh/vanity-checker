import { PlateConfig } from './plate-config';
import { PlateDesign } from 'src/app/models/plate-design';

export class PlateConfigTX extends PlateConfig {
    design: PlateDesign = {
        backgroundColor: "white",
        textColor: "black"
    }

    constructor() {
        super();
    }

    test(input) {
        return (/[A-Z]{1,3}[0-9]{1,3}/).test(input);
    }
}
