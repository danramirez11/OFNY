import { AppState, Observer } from '../types/store';
import { reducer } from './reducer';
import firebase, { getProfile } from '../utils/firebase';
import { Screens } from '../types/navigation';

const userid = "DOqyun2FT6gJZHJ0oeut0a7rKPm1";

const user = await getProfile(userid);


const images = {
	pfp: 'https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fprofilepicture.png?alt=media&token=ff51078d-73f2-4bdc-9369-0a9229d65db4',
	logo: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Flogo.png?alt=media&token=2a208276-2249-4196-ba20-eaebd0711f46",
	cormor: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fcorazon%20morado.png?alt=media&token=a4aba781-5f70-4451-923a-1953ce5d6225",
	corblanc: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fcorazon%20blanco.png?alt=media&token=a810797c-fbf6-42c8-a920-555df8a45258",
	corborde: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fcorazon%20borde.png?alt=media&token=e8d3bc00-57dd-463f-a520-6b06a1892cc8",
	alien: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Falien.png?alt=media&token=4726b9c0-44c0-4775-8392-ce96520a70c1",
	landing: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Flanding.png?alt=media&token=72647b94-073a-42bd-8184-b7fd217e81e2",
	login: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Flogin.png?alt=media&token=b4a6c53a-ad1e-4880-94e6-bcbc4c8e7ed5",
	backlogin: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fbackground%20login.png?alt=media&token=7fd25afd-3e5f-4f17-a2b1-64971e56a73e",
	user: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fuser.png?alt=media&token=2ce19557-8f90-4a0a-b5ca-d6731b3aad7c",
	password: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fpassword.png?alt=media&token=c142d830-8890-45fb-b1ec-68040f7bb315",
	check: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fcheck.png?alt=media&token=c8b4555e-c4f0-4785-9043-330dba136830",
	checkvacio: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fcheckout%20%20vacio.png?alt=media&token=078a2c0b-19d4-4185-a270-4f752f8e673e",
	subirpost: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fsubir%20post.png?alt=media&token=bdf7f3f4-10ac-478b-b492-f83dd2743678",
	ovniblanc: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fovni.png?alt=media&token=bf8a188b-1a72-4c7f-9b33-9d3639d0bdbc",
	ovnimor: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fovni%20morado.png?alt=media&token=6208a3d2-5a2f-49f4-9fdd-8f2eb82ee6da",
	singup: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fsingup.png?alt=media&token=f20c1fa5-9030-4a5c-9e6d-941909f81bc7",
	search: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2Fsearch.png?alt=media&token=59ba7b6b-8483-401f-8d0e-f97d2f23d60c",
	OFNY: "https://firebasestorage.googleapis.com/v0/b/dcalg-7b097.appspot.com/o/media%2FOFNY.png?alt=media&token=47280f75-f23b-4d44-99a7-8959ab7cb187",
}
export let appState: AppState = {
	screen: Screens.LOGIN,
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