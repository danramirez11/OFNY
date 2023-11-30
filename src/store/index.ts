import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';
import firebase, { getProfile } from '../utils/firebase';
import { Screens } from '../types/navigation';

const user = await getProfile("z9R9t4beoGh2kwrwHirxaCDMO0r2")

export let appState: AppState = {
	screen: Screens.PROFILE,
	editprofile: false,
	user: user,
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