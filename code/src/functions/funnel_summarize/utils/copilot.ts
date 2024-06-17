import { HTTPResponse, SdkUtils } from './api-utils';
import { AgentHandler } from '@devrev/agent-sdk';
import { Skill } from '@devrev/agent-sdk';
import { GetFunnelAnalyticsSkill } from './get_funnel_analytics_skill';
import { GetFunnelDataSkill } from './fetch_funnel_data_skill';
import { GetFunnelDropoutSkill } from './fetch_funnel_dropout_data_skill';
import { FetchConversionAppVersionSkill } from './fetch_app_conversion_skill';
import { FetchFunnelEffortsSkill } from './fetch_funnel_effort_skill';
import { FetchFunnelAPIOverviewPartOneSkill } from './fetch_api_overview_process_id_one';
import { FetchFunnelAPIOverviewPartTwoSkill } from './fetch_api_overview_process_id_two';
import { FetchFunnelAPIOverviewPartThreeSkill } from './fetch_api_overview_process_id_three';

export class Copilot {
  // devrevSDK is used to make API calls using service account token.
  public devrevSDK: SdkUtils;
  // event to be consumed by the function. This is command event for this example.
  public event: any;
  // endpoint to make devrev API calls. Used by the agentHandler internally.
  public endpoint: string;
  // service token
  public serviceToken: string;

  constructor(event: any) {
    this.endpoint = event.execution_metadata.devrev_endpoint;
    this.serviceToken = event.context.secrets.service_account_token;
    this.devrevSDK = new SdkUtils(this.endpoint, this.serviceToken);
    this.event = event;
  }

  // Function listening for ticket created event
  async eventListenerCommand(): Promise<HTTPResponse> {
    let agentHandler = this.CreateTicketCopilotAgent();
    
    // Posting user message as a comment on the ticket to show what command was triggered.
    await this.devrevSDK.sendComment(this.event.payload.source_id, "executing command: " + this.event.payload.parameters);
    // Fetch session agent session for this ticket. In this case it is ticket id.
    let sessionObjectId = this.event.payload.source_id;
    // Fetch agent id from the event. This is the agent who will be executing the command.
    let agentId = this.event.input_data.global_values.agent;
    // Prepare input for the agent. This is the command that needs to be executed along with the ticket id for background context.
    let input = this.event.payload.parameters + " on ticket id " + sessionObjectId;
    // Execute the agent and get the reply to be posted back.
    let reply = await agentHandler.Execute(input, agentId, sessionObjectId);
    // Posting agent reply as a comment on the ticket.
    await this.devrevSDK.sendComment(this.event.payload.source_id, reply);
    return { success: true, message: 'Agent executed successfully', data: { } };
  }

  CreateTicketCopilotAgent(): AgentHandler {
    // Create ticket copilot agent
    let goal = 'Help user with their queries';
    let guidance = 'Be polite and helpful.';
    let skills: Skill[] = [
      new GetFunnelAnalyticsSkill(this.devrevSDK),
      new GetFunnelDataSkill(this.devrevSDK),
      new GetFunnelDropoutSkill(this.devrevSDK),
      new FetchConversionAppVersionSkill(this.devrevSDK),
      new FetchFunnelEffortsSkill(this.devrevSDK),
      new FetchFunnelAPIOverviewPartOneSkill(this.devrevSDK),
      new FetchFunnelAPIOverviewPartTwoSkill(this.devrevSDK),
      new FetchFunnelAPIOverviewPartThreeSkill(this.devrevSDK)
    ];
    return new AgentHandler(this.endpoint, this.serviceToken, goal, guidance, skills);
  }
}
