import { createSlice } from "@reduxjs/toolkit";

//const [first, setfirst] = useState(initialState)

const initialState = {
    userData: {
        id: null,
        first_name:'',
        last_name:'',
        dni: 0,
        email:'',
    },
};

export const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        changeData: ( state , action ) => {
            state.userData = action.payload
         },
    },
});

export const { changeData} = userSlice.actions;
export default userSlice.reducer;