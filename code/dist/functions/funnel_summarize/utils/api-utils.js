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
exports.SdkUtils = exports.defaultResponse = void 0;
const typescript_sdk_1 = require("@devrev/typescript-sdk");
const beta_devrev_sdk_1 = require("@devrev/typescript-sdk/dist/auto-generated/beta/beta-devrev-sdk");
const axios_1 = __importDefault(require("axios"));
exports.defaultResponse = {
    success: false,
    message: "",
    data: {},
};
class SdkUtils {
    constructor(endpoint, token) {
        this.devRevBetaSdk = typescript_sdk_1.client.setupBeta({
            endpoint: endpoint,
            token: token,
        });
        this.token = token;
        this.endpoint = endpoint;
    }
    getWork(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // We use internal api as some of the fields are not exposed in the public api.
                const response = yield axios_1.default.post(this.endpoint + "/internal/works.get", {
                    id: id,
                }, {
                    headers: {
                        Authorization: this.token,
                        "Content-Type": "application/json",
                    },
                });
                return {
                    success: true,
                    message: "Work fetched Successfully.",
                    data: response.data,
                };
            }
            catch (error) {
                if (error.response) {
                    const err = `Failed to fetch work. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: err });
                }
                else if (error.request) {
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: error.request.data });
                }
                else {
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: error });
                }
            }
        });
    }
    createWorkIssue(title, description, owner = "don:identity:dvrv-us-1:devo/11Cf6ETGdh:devu/2") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // We use internal api as some of the fields are not exposed in the public api.
                const response = yield axios_1.default.post(this.endpoint + "/internal/works.create", {
                    type: "issue",
                    applies_to_part: "don:core:dvrv-us-1:devo/11Cf6ETGdh:product/2",
                    owned_by: [owner],
                    title: title,
                    body: description,
                }, {
                    headers: {
                        Authorization: this.token,
                        "Content-Type": "application/json",
                    },
                });
                return {
                    success: true,
                    message: "Work added Successfully.",
                    data: response.data,
                };
            }
            catch (error) {
                if (error.response) {
                    const err = `Failed to fetch work. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: err });
                }
                else if (error.request) {
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: error.request.data });
                }
                else {
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: error });
                }
            }
        });
    }
    getAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.devRevBetaSdk.accountsGet({
                    id: id,
                });
                return {
                    success: true,
                    message: "Account fetched Successfully.",
                    data: response.data,
                };
            }
            catch (error) {
                if (error.response) {
                    const err = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: err });
                }
                else if (error.request) {
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: error.request.data });
                }
                else {
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: error });
                }
            }
        });
    }
    sendComment(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.devRevBetaSdk.timelineEntriesCreate({
                    object: id,
                    type: beta_devrev_sdk_1.TimelineEntriesCreateRequestType.TimelineComment,
                    body: body,
                });
                return {
                    success: true,
                    message: "Account fetched Successfully.",
                    data: response.data,
                };
            }
            catch (error) {
                if (error.response) {
                    const err = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: err });
                }
                else if (error.request) {
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: error.request.data });
                }
                else {
                    return Object.assign(Object.assign({}, exports.defaultResponse), { message: error });
                }
            }
        });
    }
    getFunnelAnalytics(funnelId = "1866", appId = 1821, appVersion = "0", platform = 1, fromDate = "2024-06-06 18:30:00", toDate = "2024-06-14 09:23:03") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const url = 'https://app.userexperior.com/funnelrest/api/v1/funnel/analysis/analyticalPage/fetchFunnelAnalyticsPageApi';
                // const headers = {
                //   'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4Njk2NzQxLCJpYXQiOjE3MTg2MTAzNDF9.8whq3eLBUSfTyY--m2wYV3XysFGlgYxOMm0hEQG2q4thHycnsuHgu856RtFsac_20o2uT44CeHfRNq_xxVa4aQ',  // Replace with your actual authorization token
                //     'Content-Type': 'application/json'
                // };
                // const body = {
                //   funnelId: funnelId,
                //   appId: appId,
                //   appVersion: appVersion,
                //   platform: platform,
                //   fromDate: fromDate,
                //   toDate: toDate
                // }
                // const response = await axios.post(url, { headers , body});
                // console.log("testingResponse 1", response.data!=null);
                // console.log("testingResponse", response.data!=null);
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
exports.SdkUtils = SdkUtils;
