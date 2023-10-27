import { Navigate } from '../types/store';
import { Screens } from '../types/navigation';

export const navigate = (screen: Screens) => {
	return {
		action: Navigate.NAVIGATE,
		payload: screen,
	};
};