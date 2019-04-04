const Action = require('./action.model');

class Navigate extends Action {
    constructor(primitive) {
        super(primitive);
        this.url = new URL(primitive.url);
    }

    verify() {
        if('url' in this) {
            return true;
        }

        return false;
    }

    run(page) {
        return async function(callback) {
            try {
                await page.goto(this.url.toString());

                if(typeof callback === 'function') {
                    callback(null, page);
                }
            } catch(e) {
                console.error(e);
                throw(e);
            }
        }
    }
}

module.exports = Navigate;