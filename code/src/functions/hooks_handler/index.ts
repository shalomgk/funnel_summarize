import {Copilot} from '../funnel_summarize/utils/copilot';
import { AgentHandler } from '@devrev/agent-sdk';

/**
 * This function is an example of a handler for the activate and update hook.
 * It creates an AgentHandler and installs it.
 * @param ev - event object
 * @returns object - the agent id to be persisted in the 'agent' field defined in the manifest file.
 */
async function hooksHandler(ev: any): Promise<object> {
  let agent = '', goal = '', guidance = '';
  if (ev.execution_metadata.event_type == 'hook:snap_in_activate') {
    // Create an AgentHandler and install it.
    let copilot = new Copilot(ev);
    let agentHandler = copilot.CreateTicketCopilotAgent();
    let agentHandlerRes = await agentHandler.InstallAgent();
    agent = agentHandlerRes.agent;
    goal = agentHandlerRes.goal;
    guidance = agentHandlerRes.guidance;
  } else if (ev.execution_metadata.event_type == 'hook:snap_in_update') {
    // Update the agent with the new values.
    console.log(JSON.stringify(ev));
    let copilot = new Copilot(ev);
    let agentHandler = copilot.CreateTicketCopilotAgent();
    let AgentHandlerRes = await agentHandler.UpdateAgent(ev.input_data.global_values.agent, ev.input_data.global_values.goal, ev.input_data.global_values.guidance);
    agent = AgentHandlerRes.agent;
    goal = AgentHandlerRes.goal;
    guidance = AgentHandlerRes.guidance;
  }
  else {
    console.error('Invalid hook event type');
  }
  // return the agent id, goal, guidance to be persisted in the 'agent', 'goal' and 'guidance' field defined in the manifest file.
  return { 'inputs_values' : { agent, goal, guidance } } as object;
}

export const run = async (events: any[]) => {
  for (const ev of events) {
    // Handle hook
    return await hooksHandler(ev);
  }
};

export default run;
