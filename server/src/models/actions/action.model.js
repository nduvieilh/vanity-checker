class Action {
    constructor(primitive) {
        this.action = primitive.action;
        
        this.parentAction;
        this.results;

        this.warnings = [];
    }    

    setParent(action) {
        this.parentAction = action;
    }

    getResults() {
        return this.results;
    }

    addWarning(code, message) {
        this.warnings.push({
            code: code,
            message: message
        });
    }

    getWarnings() {
        return this.warnings;
    }
}

module.exports = Action;