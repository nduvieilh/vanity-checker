const Action = require('./action.model');

class Input extends Action {
    constructor(primitive) {
        super(primitive);
        this.selector = primitive.selector;
        this.value = primitive.value;
    }

    verify() {
        if(!'selector' in this) {
            return false;
        }

        if(!'value' in this) {
            return false;
        }

        return true;
    }

    run(page) {
        return async function(callback) {
            try {
                let mainFrame = await page.mainFrame();

                console.log(mainFrame);

                // testing code
                let elements = await mainFrame.$$(this.selector);

                // Check if elements is excessive
                if(elements.length > 5) {
                    addWarning('INP0001', 'SELECTOR_COUNT_GREATER_THAN_5');
                }

                elements.forEach(async (element) => {

                    // change this to async
                    // Focus on the element
                    await element.focus();
                    // Type in value
                    await element.type(this.value);
                    console.log(element);
                });
            
                let frames = await page.frames();
                console.log(frames);

                if(typeof callback === 'function') {
                    callback(null, page);
                }
            } catch(e) {
                console.error(this.url, e);
            }
        }
    }
}

module.exports = Input;