import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postRequest from '../functions/changeSetting';
import { type ChangeSettingData } from '../types/types';

export type PowerState = {
    value: 1 | 3 | 10 | 30 | 100;
    lastCommand: 'increasePower' | 'decreasePower';
    errorOccurred: boolean;
};

export const changePowerValue = createAsyncThunk(
    'power/changePowerValue',
    async (data: ChangeSettingData) => {
        const response = await postRequest('http://localhost:8080', data);
        return response;
    }
);

const initialState: PowerState = {
    value: 30,
    lastCommand: 'increasePower',
    errorOccurred: false
};

export const powerSlice = createSlice({
    name: 'power',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(changePowerValue.fulfilled, (state, { payload }) => {
            if (payload.ok) {
                if (payload.type === 'increasePower') {
                    state.value = payload.value as 1 | 3 | 10 | 30 | 100;
                } else if (payload.type === 'decreasePower') {
                    state.value = payload.value as 1 | 3 | 10 | 30 | 100;
                }

                state.errorOccurred = false;
            } else {
                state.errorOccurred = true;
            }

            state.lastCommand = payload.type as 'increasePower' | 'decreasePower';
        });
    }
});

export default powerSlice.reducer;
