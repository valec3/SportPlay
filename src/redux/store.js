
import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './featuresSlice/registerSlice';
import modalReducer from './featuresSlice/modalSlice';
import userReducer from './featuresSlice/userSlice';
import tournamentReducer from './featuresSlice/tournamentSlice';
import teamReducer from './featuresSlice/teamSlice';

export const store = configureStore({
    reducer: {
        isRegister: registerReducer,
        isOpenModal: modalReducer,
        userData: userReducer,
        allTournaments: tournamentReducer,
        allTeams: teamReducer,
    },
})