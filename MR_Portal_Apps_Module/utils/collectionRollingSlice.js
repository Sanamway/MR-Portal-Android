import { createSlice } from '@reduxjs/toolkit';


const collectionRollingSlice = createSlice({
    name: 'collectionRolling',
    initialState: {
        collectionRollingData: [],
    },
    reducers: {
        setCollectionRollingData: (state, action) => {
            state.collectionRollingData = Array.isArray(action.payload) ? action.payload : [];
        },
    },
});

export const { setCollectionRollingData } = collectionRollingSlice.actions;

export default collectionRollingSlice.reducer;
