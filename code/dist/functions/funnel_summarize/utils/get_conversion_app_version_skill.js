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
exports.GetConversionAppVersionSkill = void 0;
class GetConversionAppVersionSkill {
    // constructor to initialize the GetAccountSkill with devrevSDK
    constructor(sdkUtils) {
        // Name of the skill.
        this.Name = 'GetConversionAppVersionSkill';
        // Description of the skill.
        this.Description = 'Fetches the funnel analytics based on funnel id';
        // Input schema required to execute the skill
        this.InputSchema = {
            'type': 'object',
            'properties': {
                'funnelId': {
                    'description': 'The funnel id of the account',
                },
                'appId': {
                    'description': 'The funnel id of the account',
                },
                'appVersion': {
                    'description': 'The funnel id of the account',
                },
                'platform': {
                    'description': 'The funnel id of the account',
                },
                'fromDate': {
                    'description': 'The funnel id of the account',
                },
                'toDate': {
                    'description': 'The funnel id of the account',
                },
            },
            'required': ['id'],
        };
        // Additional options for the skill to execute any external api.
        this.Opts = {};
        this.devrevSDK = sdkUtils;
    }
    // Execute skill to get the account by id
    Execute(skillCall) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('executing get funnel analytics skill with skillCall: ', skillCall);
            return this.devrevSDK.getFunnelAnalytics(skillCall.args.id);
        });
    }
}
exports.GetConversionAppVersionSkill = GetConversionAppVersionSkill;
