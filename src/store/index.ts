import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';
import firebase, { getProfile } from '../utils/firebase';
import { Screens } from '../types/navigation';

const userid = "z9R9t4beoGh2kwrwHirxaCDMO0r2";

const user = await getProfile(userid);

export let appState: AppState = {
	screen: Screens.DASHBOARD,
	editprofile: false,
	user: {uid: userid, ...user},
	postid: " ",
	userscreen: " ",
};

console.log(appState);
let observers: Observer[] = [];

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	appState = reducer(action, clone);
	observers.forEach((o) => o.render());
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};