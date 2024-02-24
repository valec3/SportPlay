import { createSlice } from "@reduxjs/toolkit";

//const [first, setfirst] = useState(initialState)

const initialState = {
    userData: {
        id: null,
        first_name:'',
        last_name:'',
        activity: 0,
    },
};

export const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        // changeData: ( state ) => {
        //     state.userData = {
                
        // activity: 2,
        //     }
        //  },
    },
});

export const { changeData} = userSlice.actions;
export default userSlice.reducer;