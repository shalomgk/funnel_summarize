import { HTTPResponse } from './utils/api-utils';
import { Copilot } from './utils/copilot';


export const run = async (events: any[]) => {
  console.log(JSON.stringify(events));
  for (const event of events) {
    const copilot = new Copilot(event);
    const response: HTTPResponse = await copilot.eventListenerCommand();
    if (!response.success)
      console.log('Snap In Encountered an error: ', response.message);
    else
      console.log(response.message);
  }
};

export default run;
