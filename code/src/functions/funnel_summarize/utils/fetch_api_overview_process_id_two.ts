import { SkillCall } from '@devrev/agent-sdk';
import { Skill } from '@devrev/agent-sdk';
import { SdkUtils } from './api-utils';

export class FetchFunnelAPIOverviewPartTwoSkill implements Skill {
  
  // devrevSDK is used to make API calls using service account token.
  devrevSDK: SdkUtils;
  // Name of the skill.
  Name = 'FetchFunnelAPIOverviewPartTwoSkill';
  // Description of the skill.
  Description = 'Fetches the funnel overview based on process id';
  // Input schema required to execute the skill
  InputSchema = {
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
      'processId': {
        'processId': 'Process Id to fetch overview of funnel',
      },
    },
    'required': ['id', 'appId', 'appVersion', 'platform', 'fromDate', 'toDate', 'processId'],
  };
  // Additional options for the skill to execute any external api.
  Opts = {};
  // constructor to initialize the GetAccountSkill with devrevSDK
  constructor(sdkUtils: SdkUtils) {
    this.devrevSDK = sdkUtils;
  }
  // Execute skill to get the account by id
  async Execute(skillCall: SkillCall): Promise<any> {
    console.log('executing get funnel effort skill with skillCall: ', skillCall);
    return this.devrevSDK.getFunnelOverviewPartTwo(skillCall.args.id, skillCall.args.appId, skillCall.args.appVersion, skillCall.args.platform, skillCall.args.fromDate, skillCall.args.toDate, skillCall.args.processId);
  }
}
