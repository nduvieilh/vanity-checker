import { PlateDesign } from 'src/app/models/plate-design';

export class PlateConfig {
    design: PlateDesign = {
        backgroundColor: "blue",
        textColor: "white"
    }

    constructor() {

    }

    test(input) {
        return (/[A-Za-z0-9 ]{1,7}/g).test(input);
    }

    getDesign(): PlateDesign {
        return this.design;
    }
}
