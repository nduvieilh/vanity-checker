export class PlateConfig {
    constructor() {

    }

    test(input) {
        return (/[A-Za-z0-9 ]{1,7}/g).test(input);
    }
}
