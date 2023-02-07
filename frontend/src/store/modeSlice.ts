import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postRequest from '../functions/changeSetting';
import { type Mode, type ChangeSettingData } from '../types/types';

export const changeMode = createAsyncThunk('mode/changeMode', async (data: ChangeSettingData) => {
    const response = await postRequest('http://localhost:8080', data);
    return response;
});

const initialState: Mode[] = [
    { name: 'Night Vision', value: false, error: false },
    { name: 'Dusk Till Dawn', value: false, error: false },
    { name: 'Flashing', value: false, error: false }
];

export const modeSlice = createSlice({
    name: 'power',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(changeMode.fulfilled, (state, { payload }) => {
            const index = state.findIndex((mode) => mode.name === payload.type);
            if (payload.ok) {
                state[index].value = payload.value as boolean;
                state[index].error = false;
            } else {
                state[index].error = true;
            }
        });
    }
});

export default modeSlice.reducer;
