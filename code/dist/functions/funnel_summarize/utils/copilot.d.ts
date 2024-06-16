import { HTTPResponse, SdkUtils } from './api-utils';
import { AgentHandler } from '@devrev/agent-sdk';
export declare class Copilot {
    devrevSDK: SdkUtils;
    event: any;
    endpoint: string;
    serviceToken: string;
    constructor(event: any);
    eventListenerCommand(): Promise<HTTPResponse>;
    CreateTicketCopilotAgent(): AgentHandler;
}
