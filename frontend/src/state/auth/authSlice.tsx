// import {createSlice} from "@reduxjs/toolkit";
//
// interface authState {
//     auth: {
//         user: any;
//         token: string | null;
//     };
// }
//
// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {user: null, token: null},
//     reducers: {
//         setCredentials: (state, action) => {
//             const {user, accessToken} = action.payload
//             state.user = user
//             state.token = accessToken
//         },
//         // @ts-ignore
//         logOut: (state, action) => {
//             state.user = null
//             state.token = null
//         }
//     }
// })
//
// export const {setCredentials, logOut} = authSlice.actions;
//
// export default authSlice.reducer
//
// export const selectCurrentUser = (state: authState) => state.auth.user
// export const selectCurrentToken = (state: authState) => state.auth.token


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedInUser: "admin",
};

const userSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload;
        },
        // inne reducery, jeśli potrzebne
    },
});

export const { setLoggedInUser } = userSlice.actions;
export default userSlice.reducer;

