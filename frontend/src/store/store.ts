import { configureStore } from '@reduxjs/toolkit';
import batteryReducer from './batterySlice';
import modeReducer from './modeSlice';
import powerReducer from './powerSlice';

export const store = configureStore({
    reducer: {
        power: powerReducer,
        mode: modeReducer,
        battery: batteryReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
