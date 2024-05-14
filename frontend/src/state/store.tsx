import {configureStore} from '@reduxjs/toolkit';
import gradeReducer from "./grades/gradeSlice.tsx"
import loginReducer from "state/auth/authSlice.tsx";
export const store = configureStore({
    reducer: {
        grade: gradeReducer,
        login: loginReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
