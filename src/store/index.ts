import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';

export let appState: AppState = {
	screen: "PROFILE",
	editprofile: false,
};

console.log(appState);
let observers: Observer[] = [];

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	appState = reducer(action, clone);
	observers.forEach((o) => o.render());
	console.log(appState)
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};