import { createSlice } from "@reduxjs/toolkit";

//const [name, reducers] = useState(initialState)

const initialState = {
    allTeams: [
        {
        id: null,
        logo_url:'',
        name:'',
        creator_id: null,
        },
    ]
};

export const teamSlice = createSlice({
    name: "allTeams",
    initialState,
    reducers: {
        getTeams: ( state , action ) => {
            state.allTeams = action.payload
         },
    },
});

export const { getTeams } = teamSlice.actions;
export default teamSlice.reducer;