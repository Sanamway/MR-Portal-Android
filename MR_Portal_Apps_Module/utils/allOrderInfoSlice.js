import { createSlice } from '@reduxjs/toolkit';

const allOrderInfoSlice = createSlice({
    name: 'allOrderInfo',
    initialState: {

        allOrderInfoData: [],
        pageCount: 0,
        currentpage: { selected: 0 },
        loading: false
    },
    reducers: {
        // Callers also dispatch this with [] to clear the table, so never assume
        // the payload carries orderInfoData/count.
        setAllOrderInfoData: (state, action) => {
            const payload = action.payload || {};
            state.allOrderInfoData = Array.isArray(payload.orderInfoData)
                ? payload.orderInfoData
                : [];
            state.pageCount = Number.isFinite(Number(payload.count))
                ? Number(payload.count)
                : 0;
        },
        setPageChange: (state, action) => {
            state.currentpage = action.payload
        },
        setOrderLoading: (state, action) => {
            state.loading = !!action.payload
        }
    },
});

export const { setAllOrderInfoData, setPageChange, setOrderLoading } =
    allOrderInfoSlice.actions;

export default allOrderInfoSlice.reducer;
