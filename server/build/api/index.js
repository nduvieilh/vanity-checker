"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var plates_router_controller_1 = tslib_1.__importDefault(require("./plates/plates-router.controller"));
var router = express_1.default.Router();
router.use('/plates', plates_router_controller_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map