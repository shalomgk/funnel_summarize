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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Copilot = void 0;
const api_utils_1 = require("./api-utils");
const agent_sdk_1 = require("@devrev/agent-sdk");
const get_funnel_analytics_skill_1 = require("./get_funnel_analytics_skill");
class Copilot {
    constructor(event) {
        this.endpoint = event.execution_metadata.devrev_endpoint;
        this.serviceToken = event.context.secrets.service_account_token;
        this.devrevSDK = new api_utils_1.SdkUtils(this.endpoint, this.serviceToken);
        this.event = event;
    }
    // Function listening for ticket created event
    eventListenerCommand() {
        return __awaiter(this, void 0, void 0, function* () {
            let agentHandler = this.CreateTicketCopilotAgent();
            // Posting user message as a comment on the ticket to show what command was triggered.
            yield this.devrevSDK.sendComment(this.event.payload.source_id, "executing command: " + this.event.payload.parameters);
            // Fetch session agent session for this ticket. In this case it is ticket id.
            let sessionObjectId = this.event.payload.source_id;
            // Fetch agent id from the event. This is the agent who will be executing the command.
            let agentId = this.event.input_data.global_values.agent;
            // Prepare input for the agent. This is the command that needs to be executed along with the ticket id for background context.
            let input = this.event.payload.parameters + " on ticket id " + sessionObjectId;
            // Execute the agent and get the reply to be posted back.
            let reply = yield agentHandler.Execute(input, agentId, sessionObjectId);
            // Posting agent reply as a comment on the ticket.
            yield this.devrevSDK.sendComment(this.event.payload.source_id, reply);
            return { success: true, message: 'Agent executed successfully', data: {} };
        });
    }
    CreateTicketCopilotAgent() {
        // Create ticket copilot agent
        let goal = 'Give funnel summary and funnel analysis in human readable mode';
        // let guidance = 'Strictly use all the skills defined that is FetchFunnelAnalyticsSkill(), FetchConversionAppVersionSkill(),FetchFunnelEffortsSkill(), FetchFunnelAPIOverviewPartOneSkill(), FetchFunnelAPIOverviewPartTwoSkill(), FetchFunnelAPIOverviewPartThreeSkill(), GetFunnelDropoutSkill() and GetFunnelDataSkill() before providing a detailed summary of the funnel in paragraphs in human readable mode.'; 
        let guidance = 'Use FetchFunnelAnalyticsSkill() to get the summary of funnels. Use funnelId as funnelId, appId as appId, appVersion as appVersion, platform as platform, fromDate as fromDate and toDate as toDate';
        let skills = [
            new get_funnel_analytics_skill_1.GetFunnelAnalyticsSkill(this.devrevSDK),
        ];
        return new agent_sdk_1.AgentHandler(this.endpoint, this.serviceToken, goal, guidance, skills);
    }
}
exports.Copilot = Copilot;
