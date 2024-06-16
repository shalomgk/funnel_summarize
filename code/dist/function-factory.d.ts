export declare const functionFactory: {
    readonly funnel_summarize: (events: any[]) => Promise<void>;
    readonly hooks_handler: (events: any[]) => Promise<object | undefined>;
};
export type FunctionFactoryType = keyof typeof functionFactory;
