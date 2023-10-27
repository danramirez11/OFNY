export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string,
};

export enum Navigate {
	'NAVIGATE' = 'NAVIGATE',
}

export interface ChangeScreen {
	action: Navigate.NAVIGATE;
	payload: "white";
}

export type Actions = ChangeScreen;