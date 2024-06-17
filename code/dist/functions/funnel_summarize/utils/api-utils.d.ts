import { betaSDK } from "@devrev/typescript-sdk";
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
    createWorkIssue(title: string, description: string, owner?: string): Promise<HTTPResponse>;
    getAccount(id: string): Promise<HTTPResponse>;
    sendComment(id: string, body: string): Promise<HTTPResponse>;
    getFunnelAnalytics(funnelId?: string, appId?: number, appVersion?: string, platform?: number, fromDate?: string, toDate?: string): Promise<any>;
}
