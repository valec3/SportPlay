import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenModal: false,
};

export const modalSlice = createSlice({
    name: "isOpenModal",
    initialState,
    reducers: {
        openModal: ( state ) => {
            state.isOpenModal = !state.isOpenModal;
         },
        closeModal: ( state) => {
            state.isOpenModal= false;
        },
    },
});

export const { openModal , closeModal} = modalSlice.actions;
export default modalSlice.reducer;