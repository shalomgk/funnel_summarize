"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionFactory = void 0;
const index_1 = __importDefault(require("./functions/hooks_handler/index"));
const index_2 = __importDefault(require("./functions/funnel_summarize/index"));
exports.functionFactory = {
    // Add your functions here
    funnel_summarize: index_2.default,
    hooks_handler: index_1.default,
};
