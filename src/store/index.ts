import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';
import firebase, { getProfile } from '../utils/firebase';

const user = await getProfile()

export let appState: AppState = {
	screen: "LANDING",
	editprofile: false,
	user: user,
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