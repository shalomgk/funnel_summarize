import { SkillCall } from '@devrev/agent-sdk';
import { Skill } from '@devrev/agent-sdk';
import { SdkUtils } from './api-utils';
export declare class GetConversionAppVersionSkill implements Skill {
    devrevSDK: SdkUtils;
    Name: string;
    Description: string;
    InputSchema: {
        type: string;
        properties: {
            funnelId: {
                description: string;
            };
            appId: {
                description: string;
            };
            appVersion: {
                description: string;
            };
            platform: {
                description: string;
            };
            fromDate: {
                description: string;
            };
            toDate: {
                description: string;
            };
        };
        required: string[];
    };
    Opts: {};
    constructor(sdkUtils: SdkUtils);
    Execute(skillCall: SkillCall): Promise<any>;
}
