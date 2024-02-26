
import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './featuresSlice/registerSlice';
import modalReducer from './featuresSlice/modalSlice';
import userReducer from './featuresSlice/userSlice';

export const store = configureStore({
    reducer: {
        isRegister: registerReducer,
        isOpenModal: modalReducer,
        userData: userReducer,
    },
})