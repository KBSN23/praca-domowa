import { createSlice } from '@reduxjs/toolkit';

export type BatteryState = {
    value: number;
};

const initialState: BatteryState = {
    value: 100
};

export const batterySlice = createSlice({
    name: 'power',
    initialState,
    reducers: {
        // Should be extended
    }
});

export default batterySlice.reducer;
