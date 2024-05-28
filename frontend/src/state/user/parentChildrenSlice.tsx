import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Child} from "api/User.tsx";

interface ParentChildrenState {
    selected: number; // children array index
    children: Child[];
}

const initialState: ParentChildrenState = {
    selected: -1,
    children: []
};

const parentChildrenSlice = createSlice({
    name: "parentChildren",
    initialState,
    reducers: {
        setParentChildrenData: (state, action: PayloadAction<Child[]>) => {
            state.children = action.payload;
        },
        setSelectedChild: (state, action: PayloadAction<number>) => {
            state.selected = action.payload
        }
    },
});

export const { setParentChildrenData, setSelectedChild } = parentChildrenSlice.actions;
export default parentChildrenSlice.reducer;