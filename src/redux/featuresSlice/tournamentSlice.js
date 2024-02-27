import { createSlice } from "@reduxjs/toolkit";

//const [name, reducers] = useState(initialState)

const initialState = {
    allTournaments: [
        {
        id: null,
        logo:'',
        name:'',
        player_count: 0,
        type_tournament:0,
        teams_count: 0,
        creator_id: null,
        finished: 0
        },
    ]
};

export const tournamentSlice = createSlice({
    name: "allTournaments",
    initialState,
    reducers: {
        getTournaments: ( state , action ) => {
            state.allTournaments = action.payload
         },
    },
});

export const { getTournaments } = tournamentSlice.actions;
export default tournamentSlice.reducer;