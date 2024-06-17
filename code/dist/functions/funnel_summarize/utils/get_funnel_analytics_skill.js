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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFunnelAnalyticsSkill = void 0;
const axios_1 = __importDefault(require("axios"));
class GetFunnelAnalyticsSkill {
    // constructor to initialize the GetAccountSkill with devrevSDK
    constructor(sdkUtils) {
        // Name of the skill.
        this.Name = 'GetFunnelAnalyticsSkill';
        // Description of the skill.
        this.Description = 'Fetches the funnel analytics based on fields of the account object. Use funnelId as funnelId, appId as appId, appVersion as appVersion, platform as platform, fromDate as fromDate and toDate as toDate';
        // Input schema required to execute the skill
        this.InputSchema = {
            'type': 'object',
            'properties': {
                'funnelId': {
                    'description': 'The funnel id of the account',
                },
                'appId': {
                    'description': 'The app id of the account',
                },
                'appVersion': {
                    'description': 'The app version of the account',
                },
                'platform': {
                    'description': 'The platform of the account',
                },
                'fromDate': {
                    'description': 'The start Date of the funnel analytics',
                },
                'toDate': {
                    'description': 'The end Date of the funnel analytics',
                },
            },
            'required': ['id', 'appId', 'appVersion', 'platform', 'fromDate', 'toDate'],
        };
        // Additional options for the skill to execute any external api.
        this.Opts = {};
        this.devrevSDK = sdkUtils;
    }
    // Execute skill to get the account by id
    Execute(skillCall) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log('executing get funnel analytics skill with skillCall: ', skillCall.id);
            // const resp = await this.devrevSDK.getFunnelAnalytics(skillCall.args.id, skillCall.args.appId, skillCall.args.appVersion, skillCall.args.platform, skillCall.args.fromDate, skillCall.args.toDate);
            // console.log('shalom',resp!= null);    
            // console.log('shalom-rp',resp);
            // return resp;
            try {
                // const url = 'https://app.userexperior.com/funnelrest/api/v1/funnel/analysis/analyticalPage/fetchFunnelAnalyticsPageApi';
                // const headers = {
                //   'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4Njk2NzQxLCJpYXQiOjE3MTg2MTAzNDF9.8whq3eLBUSfTyY--m2wYV3XysFGlgYxOMm0hEQG2q4thHycnsuHgu856RtFsac_20o2uT44CeHfRNq_xxVa4aQ',  // Replace with your actual authorization token
                //     'Content-Type': 'application/json'
                // };
                // const body = {
                //   funnelId: "1866",
                //   appId: 1821,
                //   appVersion: "0",
                //   platform: 1,
                //   fromDate: "2024-06-06 18:30:00",
                //   toDate: "2024-06-14 09:23:03"
                // }
                // const response = await axios.post(url, { headers , body});
                // console.log("testingResponse 2", response.data!=null);
                // console.log("testingResponse 3", response.data);
                // return response.data;
                const requestData = {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4Njk2NzQxLCJpYXQiOjE3MTg2MTAzNDF9.8whq3eLBUSfTyY--m2wYV3XysFGlgYxOMm0hEQG2q4thHycnsuHgu856RtFsac_20o2uT44CeHfRNq_xxVa4aQ',
                        'Content-Type': 'application/json'
                    },
                    body: {
                        funnelId: '1866',
                        appId: 1821,
                        appVersion: '0',
                        platform: 1,
                        fromDate: '2024-06-06 18:30:00',
                        toDate: '2024-06-14 09:23:03'
                    }
                };
                axios_1.default.post('https://app.userexperior.com/funnelrest/api/v1/funnel/graph', requestData)
                    .then(response => {
                    console.log('testingResponse data:', response.data);
                })
                    .catch(error => {
                    if (error.response) {
                        // The server responded with a status code outside the range of 2xx
                        console.error('testingResponseServer responded with status:', error.response.status);
                        console.error('testingResponseResponse data:', error.response.data);
                    }
                    else if (error.request) {
                        // The request was made but no response was received
                        console.error('testingResponseNo response received:', error.request);
                    }
                    else {
                        // Something happened in setting up the request
                        console.error('testingResponserequest configuration:', error.config);
                        console.error('testingResponse Error setting up request:', error.message);
                    }
                    console.error('testingResponseRequest configuration:', error.config);
                });
            }
            catch (error) {
                console.error("testingResponse Error executing fetching insights", error);
                return "";
            }
        });
    }
}
exports.GetFunnelAnalyticsSkill = GetFunnelAnalyticsSkill;
