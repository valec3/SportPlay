import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRegister: false,
};

export const registerSlice = createSlice({
    name: "isRegister",
    initialState,
    reducers: {
        initiaSesion: ( state ) => {
            state.isRegister = true;
         },
        closeSesion: ( state) => {
            state.isRegister= false;
        },
    },
});

export const { initiaSesion , closeSesion} = registerSlice.actions;
export default registerSlice.reducer;