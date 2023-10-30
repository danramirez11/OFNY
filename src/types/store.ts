export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string,
	editprofile: boolean 
};

export enum Navigate {
	'NAVIGATE' = 'NAVIGATE',
}

export enum EditModal {
	'EDITMODAL' = 'EDITMODAL'
}

export interface ChangeScreen {
	action: Navigate.NAVIGATE;
	payload: "white";
}

export interface ShowModal {
	action: EditModal.EDITMODAL
	payload: true,
}

export type Actions = ChangeScreen | ShowModal;