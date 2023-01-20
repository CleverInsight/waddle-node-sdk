"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_json_1 = __importDefault(require("../config.json"));
const services = axios_1.default.create({
    baseURL: config_json_1.default.baseURL,
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
    }
});
exports.default = services;
//# sourceMappingURL=services.js.map