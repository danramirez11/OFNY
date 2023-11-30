import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';
import firebase, { getProfile } from '../utils/firebase';
import { Screens } from '../types/navigation';

const user = await getProfile("z9R9t4beoGh2kwrwHirxaCDMO0r2")

export let appState: AppState = {
<<<<<<< HEAD
	screen: "LOGIN",
=======
	screen: Screens.PROFILE,
>>>>>>> 0bfb02075c4f54920ad886bafa0c2af67da1e647
	editprofile: false,
	user: user,
	postid: " ",
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