import {createSlice} from "@reduxjs/toolkit";
import {GUEST} from "utilitiesconstants.tsx/";
import {decodeUserData} from "@/axios-client.tsx";

interface User {
    id: number,
    role: string
}

const token = localStorage.getItem("BEARER_TOKEN");

let initialState: User = {
    id: 0,
    role: GUEST
};

if (token) {
    initialState = decodeUserData(token);
}

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