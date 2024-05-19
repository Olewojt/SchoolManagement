import {configureStore} from '@reduxjs/toolkit';
import gradeReducer from "./grades/gradeSlice.tsx"
import loginReducer from "state/auth/authSlice.tsx";
import studentGradesReducer from "./grades/studentGradesSlice.tsx";
export const store = configureStore({
    reducer: {
        grade: gradeReducer,
        studentGrades: studentGradesReducer,
        login: loginReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
