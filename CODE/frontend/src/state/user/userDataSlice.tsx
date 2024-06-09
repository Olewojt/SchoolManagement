import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { decodeUserToken } from "@/axios-client.tsx";
import { defaultUserData, getUserData, UserData } from "api/User.tsx";
// import {setLoading} from "state/loadapp/loadSlice.tsx";

export const fetchUserData = () => async (dispatch: any) => {
    const token = localStorage.getItem("BEARER_TOKEN");

    if (token) {
        const id = decodeUserToken(token).id;

        try {
            const userData = await getUserData(id);
            dispatch(setUserData(userData));
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }
};

const userDataSlice = createSlice({
    name: "userData",
    initialState: defaultUserData,
    reducers: {
        setUserData: (state, action: PayloadAction<UserData>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
