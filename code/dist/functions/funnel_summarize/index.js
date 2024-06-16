"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const copilot_1 = require("./utils/copilot");
const run = (events) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(JSON.stringify(events));
    for (const event of events) {
        const copilot = new copilot_1.Copilot(event);
        const response = yield copilot.eventListenerCommand();
        if (!response.success)
            console.log('Snap In Encountered an error: ', response.message);
        else
            console.log(response.message);
    }
});
exports.run = run;
exports.default = exports.run;
