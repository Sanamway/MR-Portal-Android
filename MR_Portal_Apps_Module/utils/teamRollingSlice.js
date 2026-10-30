import { createSlice } from '@reduxjs/toolkit';


const teamRollingSlice = createSlice({
    name: 'teamRolling',
    initialState: {
        teamRollingData: [],
    },
    reducers: {
        setTeamRollingData: (state, action) => {
            state.teamRollingData = Array.isArray(action.payload) ? action.payload : [];
        },
    },
});

export const { setTeamRollingData } = teamRollingSlice.actions;

export default teamRollingSlice.reducer;
