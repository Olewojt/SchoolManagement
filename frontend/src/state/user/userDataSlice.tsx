import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {decodeUserToken} from "@/axios-client.tsx";
import {defaultUserData, getUserData, UserData} from "api/User.tsx";

const token = localStorage.getItem("BEARER_TOKEN");

let initialState: UserData = defaultUserData;

if (token) {
    const id = decodeUserToken(token).id;

    initialState = await getUserData(id);
}

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserData>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;