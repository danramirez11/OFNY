import { Navigate, EditModal } from '../types/store';
import { Screens } from '../types/navigation';

export const navigate = (screen: Screens) => {
	return {
		action: Navigate.NAVIGATE,
		payload: screen,
	};
};

export const showmodal = (show: boolean) => {
	return {
		action: EditModal.EDITMODAL,
		payload: show
	}
}

export const changepost = (uid: string) => {
	return {
		action: Navigate.CHANGEPOSTUID,
		payload: uid
	}
}