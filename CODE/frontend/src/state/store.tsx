import {configureStore} from '@reduxjs/toolkit';
import loginReducer from "state/auth/authSlice.tsx";
import studentGradesReducer from "./grades/studentGradesSlice.tsx";
import studentTaskReducer from  "./tasks/tasksSlice.tsx"
import userDataSlice from "state/user/userDataSlice.tsx";
import parentChildrenSlice from "state/user/parentChildrenSlice.tsx";

export const store = configureStore({
    reducer: {
        studentGrades: studentGradesReducer,
        studentTasks: studentTaskReducer,
        login: loginReducer,
        userData: userDataSlice,
        parentChildrenData: parentChildrenSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
