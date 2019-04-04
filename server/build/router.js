"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var api_1 = tslib_1.__importDefault(require("./api"));
var router = express_1.default.Router();
router.use('/api', api_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map