"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var body_parser_1 = tslib_1.__importDefault(require("body-parser"));
var cors_1 = tslib_1.__importDefault(require("cors"));
var router_1 = tslib_1.__importDefault(require("./router"));
var app = express_1.default();
var PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(router_1.default);
app.listen(PORT, function () { return console.log("Example app listening on port " + PORT + "!"); });
//# sourceMappingURL=server.js.map