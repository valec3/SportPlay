import { createSlice } from "@reduxjs/toolkit";

//const [name, reducers] = useState(initialState)

const initialState = {
    allTeamsTournament: [
        // {
        // id: null,
        // logo_url:'',
        // name:'',

        // }
    ]
};

export const teamsPerTournamentSlice = createSlice({
    name: "allTeamsTournament",
    initialState,
    reducers: {
        getTeamsTournament: ( state , action ) => {
            state.allTeamsTournament = action.payload
         },
         resetTeamsTournament: ( state , action ) => {
            state.allTeamsTournament = initialState
         },
    },
});

export const { getTeamsTournament, resetTeamsTournament } = teamsPerTournamentSlice.actions;
export default teamsPerTournamentSlice.reducer;