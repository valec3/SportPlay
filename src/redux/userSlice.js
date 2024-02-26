import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRegister: false,
};

export const userSlice = createSlice({
    name: "userRegister",
    initialState,
    reducers: {
        register: ( state ) => {
            state.isRegister = true;
         },
        noRegister: ( state) => {
            state.isRegister= false;
        },
    },
});

export const { register , noRegister} = userSlice.actions;
export default userSlice.reducer;