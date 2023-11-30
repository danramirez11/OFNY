export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string,
	editprofile: boolean,
	user: any,
	postid: string,
	userscreen: string,
	images: any,
};

export enum Navigate {
	'NAVIGATE' = 'NAVIGATE',
	'CHANGEPOSTUID' = 'CHANGEPOSTUID',
	'CHANGEUSERSCREEN' = 'CHANGEUSERSCREEN'
}

export enum EditModal {
	'EDITMODAL' = 'EDITMODAL'
}

export interface ChangeScreen {
	action: Navigate.NAVIGATE;
	payload: "white";
}

export interface ChangePostId {
	action: Navigate.CHANGEPOSTUID;
	payload: " "
}

export interface ShowModal {
	action: EditModal.EDITMODAL
	payload: true,
}

export interface ChangeUserScreen {
	action: Navigate.CHANGEUSERSCREEN;
	payload: " "
}

export type Actions = ChangeScreen | ShowModal | ChangePostId | ChangeUserScreen;