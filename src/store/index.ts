import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';
import firebase, { getProfile } from '../utils/firebase';
import { Screens } from '../types/navigation';

const userid = "z9R9t4beoGh2kwrwHirxaCDMO0r2";

const user = await getProfile(userid);

const images = {
	pfp: 'https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fprofilepicture.png?alt=media&token=ff51078d-73f2-4bdc-9369-0a9229d65db4',
	logo: ""
}

export let appState: AppState = {
	screen: Screens.PROFILE,
	editprofile: false,
	user: {uid: userid, ...user},
	postid: " ",
	userscreen: " ",
	images: images
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