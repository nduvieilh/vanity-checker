"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var lodash_1 = require("lodash");
var generatePlateResult = function () {
    return {
        availability: lodash_1.sample([true, false]),
        searchCount: lodash_1.random(1, 1000),
        lastSearched: new Date(lodash_1.now() - lodash_1.random(1, 100000))
    };
};
var PlatesRouter = (function () {
    function PlatesRouter() {
        this.router = express_1.Router();
        this.init();
    }
    PlatesRouter.prototype.searchPlates = function (req, res) {
        var body = req.body;
        var params = req.params;
        var query = req.query;
        res.send(generatePlateResult());
    };
    PlatesRouter.prototype.init = function () {
        this.router.get('/regions/:regionCode', this.searchPlates);
    };
    return PlatesRouter;
}());
exports.PlatesRouter = PlatesRouter;
var platesRouter = new PlatesRouter();
platesRouter.init();
exports.default = platesRouter.router;
//# sourceMappingURL=plates-router.controller.js.map