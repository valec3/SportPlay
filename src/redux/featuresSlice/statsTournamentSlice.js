import { createSlice } from "@reduxjs/toolkit";

//const [name, reducers] = useState(initialState)

const initialState = {
    statsTournament: []
};

export const statsTournamentSlice = createSlice({
    name: "statsTournament",
    initialState,
    reducers: {
        getStatsTournament: ( state , action ) => {
            state.statsTournament = action.payload
         },
         resetStatsTournament: ( state ) => {
            state.statsTournament = initialState
         },
    },
});

export const { getStatsTournament, resetStatsTournament } = statsTournamentSlice.actions;
export default statsTournamentSlice.reducer;