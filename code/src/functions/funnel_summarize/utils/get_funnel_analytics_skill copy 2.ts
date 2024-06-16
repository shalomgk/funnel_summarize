import { SkillCall } from '@devrev/agent-sdk';
import { Skill } from '@devrev/agent-sdk';
import { SdkUtils } from './api-utils';

export class GetFunnelAnalyticsSkill implements Skill {
  
  // devrevSDK is used to make API calls using service account token.
  devrevSDK: SdkUtils;
  // Name of the skill.
  Name = 'GetFunnelAnalyticsSkill';
  // Description of the skill.
  Description = 'Fetches the funnel analytics based on funnel id';
  // Input schema required to execute the skill
  InputSchema = {
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
  Opts = {};
  // constructor to initialize the GetAccountSkill with devrevSDK
  constructor(sdkUtils: SdkUtils) {
    this.devrevSDK = sdkUtils;
  }
  // Execute skill to get the account by id
  async Execute(skillCall: SkillCall): Promise<any> {
    console.log('executing get funnel analytics skill with skillCall: ', skillCall);
    return this.devrevSDK.getFunnelAnalytics(skillCall.args.id);
  }
}
