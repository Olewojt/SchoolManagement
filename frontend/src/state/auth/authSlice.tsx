import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GUEST} from "utilitiesconstants.tsx/";
import {decodeUserToken} from "@/axios-client.tsx";
import {User} from "api/User.tsx";

const token = localStorage.getItem("BEARER_TOKEN");

let initialState: User = {
    id: 0,
    role: GUEST,
    email: ""
};

if (token) {
    initialState = decodeUserToken(token);
}

const userSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoggedInUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id;
            state.role = action.payload.role;
            state.email = action.payload.email;
        }
    },
});

export const { setLoggedInUser } = userSlice.actions;
export default userSlice.reducer;