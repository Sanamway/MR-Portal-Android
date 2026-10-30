import { createSlice } from '@reduxjs/toolkit';

// Holds the api/SA_sales_Analytical response. ThreeTable already fetches it for
// its "Product Category Performance" / "Brand / Product" tables; publishing it
// here lets HomeDashboard read the same numbers without duplicating the fetch
// and its hierarchy-parameter logic.
const salesAnalyticalSlice = createSlice({
    name: 'salesAnalytics',
    initialState: {
        salesAnalyticalData: {
            combined_category: [],
            combined_brand: [],
            combined_segment: [],
        },
    },
    reducers: {
        setSalesAnalyticalData: (state, action) => {
            state.salesAnalyticalData = {
                combined_category: action.payload?.combined_category || [],
                combined_brand: action.payload?.combined_brand || [],
                combined_segment: action.payload?.combined_segment || [],
            };
        },
    },
});

export const { setSalesAnalyticalData } = salesAnalyticalSlice.actions;

export default salesAnalyticalSlice.reducer;
