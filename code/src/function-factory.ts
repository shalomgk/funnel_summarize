import hooks_handler from './functions/hooks_handler/index';
import funnel_summarize from './functions/funnel_summarize/index';

export const functionFactory = {
  // Add your functions here
  funnel_summarize,
  hooks_handler,
} as const;

export type FunctionFactoryType = keyof typeof functionFactory;
