export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string,
	editprofile: boolean,
	user: any,
	postid: string,
};

export enum Navigate {
	'NAVIGATE' = 'NAVIGATE',
	'CHANGEPOSTUID' = 'CHANGEPOSTUID'
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

export type Actions = ChangeScreen | ShowModal | ChangePostId;