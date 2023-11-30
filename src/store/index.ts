import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';
import firebase, { getProfile } from '../utils/firebase';
import { Screens } from '../types/navigation';

const user = await getProfile("z9R9t4beoGh2kwrwHirxaCDMO0r2")
const images = {
	pfp: 'https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fprofilepicture.png?alt=media&token=ff51078d-73f2-4bdc-9369-0a9229d65db4',
	logo: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Flogo.png?alt=media&token=2a208276-2249-4196-ba20-eaebd0711f46",
	cormor: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fcorazon%20morado.png?alt=media&token=a4aba781-5f70-4451-923a-1953ce5d6225",
	corblanc: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fcorazon%20blanco.png?alt=media&token=a810797c-fbf6-42c8-a920-555df8a45258",
	corborde: "",
	alien: "",
	landing: "",
	login: "",
	backlogin: "",
	user: "",
	password: "",
	check: "",
	checkvacio: "",
	subirpost: "",
	ovniblanc: "",
	ovnimor: "",
	singup: "",

}
export let appState: AppState = {
	screen: Screens.PROFILE,
	editprofile: false,
	user: user,
	postid: " ",
	images: images,
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