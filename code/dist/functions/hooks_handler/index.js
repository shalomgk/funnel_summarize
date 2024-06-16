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
exports.run = void 0;
const copilot_1 = require("../funnel_summarize/utils/copilot");
/**
 * This function is an example of a handler for the activate and update hook.
 * It creates an AgentHandler and installs it.
 * @param ev - event object
 * @returns object - the agent id to be persisted in the 'agent' field defined in the manifest file.
 */
function hooksHandler(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        let agent = '', goal = '', guidance = '';
        if (ev.execution_metadata.event_type == 'hook:snap_in_activate') {
            // Create an AgentHandler and install it.
            let copilot = new copilot_1.Copilot(ev);
            let agentHandler = copilot.CreateTicketCopilotAgent();
            let agentHandlerRes = yield agentHandler.InstallAgent();
            agent = agentHandlerRes.agent;
            goal = agentHandlerRes.goal;
            guidance = agentHandlerRes.guidance;
        }
        else if (ev.execution_metadata.event_type == 'hook:snap_in_update') {
            // Update the agent with the new values.
            console.log(JSON.stringify(ev));
            let copilot = new copilot_1.Copilot(ev);
            let agentHandler = copilot.CreateTicketCopilotAgent();
            let AgentHandlerRes = yield agentHandler.UpdateAgent(ev.input_data.global_values.agent, ev.input_data.global_values.goal, ev.input_data.global_values.guidance);
            agent = AgentHandlerRes.agent;
            goal = AgentHandlerRes.goal;
            guidance = AgentHandlerRes.guidance;
        }
        else {
            console.error('Invalid hook event type');
        }
        // return the agent id, goal, guidance to be persisted in the 'agent', 'goal' and 'guidance' field defined in the manifest file.
        return { 'inputs_values': { agent, goal, guidance } };
    });
}
const run = (events) => __awaiter(void 0, void 0, void 0, function* () {
    for (const ev of events) {
        // Handle hook
        return yield hooksHandler(ev);
    }
});
exports.run = run;
exports.default = exports.run;
