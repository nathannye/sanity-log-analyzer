/// <reference types="vite/client" />

declare module "*.css?inline" {
  const css: string;
  export default css;
}

declare global {
	interface Window {
		__showReportToast?: (message?: string) => void;
		__activateUrlTab?: (tab?: string | null) => void;
	}
}
