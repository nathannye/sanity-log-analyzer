export type ReportModuleCleanup = () => void;

export type ReportModuleInit = (node: HTMLElement) => void | ReportModuleCleanup;
