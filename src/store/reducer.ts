import { AppState } from '../types/store';
import { Actions, Navigate, EditModal } from '../types/store';
import { appState } from './index';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;

	switch (action) {
		case Navigate.NAVIGATE:
		  return {
			...currentState,
			screen: payload,
		  };
        break;

		case EditModal.EDITMODAL:
			return {
				...currentState,
				editprofile: payload,
			  };
			break;
        
		default:
		  return currentState;
	  }

};
