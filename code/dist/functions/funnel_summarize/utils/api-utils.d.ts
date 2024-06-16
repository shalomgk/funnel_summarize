import { betaSDK } from '@devrev/typescript-sdk';
export type HTTPResponse = {
    success: boolean;
    message: string;
    data: any;
};
export declare const defaultResponse: HTTPResponse;
export declare class SdkUtils {
    devRevBetaSdk: betaSDK.Api<HTTPResponse>;
    token: string;
    endpoint: string;
    constructor(endpoint: string, token: string);
    getWork(id: string): Promise<HTTPResponse>;
    getFunnelAnalytics(id: string): Promise<HTTPResponse>;
    getConversionAppVersionSkill(id: string): Promise<HTTPResponse>;
    getFunnelEffortsSkill(id: string): Promise<HTTPResponse>;
    sendComment(id: string, body: string): Promise<HTTPResponse>;
}
