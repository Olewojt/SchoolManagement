import { createSlice } from "@reduxjs/toolkit";

interface User {
    id: number,
    role: string
}

const initialState: User = {
    id: 1,
    role: "student",
};

const userSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.id = action.payload.id;
            state.role = action.payload.role;
        },
        // inne reducery, jeśli potrzebne
    },
});

export const { setLoggedInUser } = userSlice.actions;
export default userSlice.reducer;