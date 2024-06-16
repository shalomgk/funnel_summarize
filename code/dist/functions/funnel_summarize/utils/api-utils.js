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
    message: '',
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
                const response = yield axios_1.default.post(this.endpoint + '/internal/works.get', {
                    'id': id,
                }, {
                    headers: {
                        Authorization: this.token,
                        'Content-Type': 'application/json',
                    },
                });
                return { success: true, message: 'Work fetched Successfully.', data: response.data };
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
    getFunnelAnalytics(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.devRevBetaSdk.accountsGet({ 'id': id });
                return { success: true, message: 'Account fetched Successfully.', data: response.data };
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
    getConversionAppVersionSkill(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.devRevBetaSdk.accountsGet({ 'id': id });
                return { success: true, message: 'Account fetched Successfully.', data: response.data };
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
    getFunnelEffortsSkill(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.devRevBetaSdk.accountsGet({ 'id': id });
                return { success: true, message: 'Account fetched Successfully.', data: response.data };
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
                return { success: true, message: 'Account fetched Successfully.', data: response.data };
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
}
exports.SdkUtils = SdkUtils;
