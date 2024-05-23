import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";

export interface StudentTasksSlice {
    tasks: TaskCardInterface[]
}

const initialState: StudentTasksSlice = {
    tasks: []
}

const studentTasksSlice = createSlice({
    name: "studentTasks",
    initialState,
    reducers: {
        addTasks: (state, action: PayloadAction<TaskCardInterface[]>) => {
            state.tasks = action.payload;
        }
    },
});

export const { addTasks } = studentTasksSlice.actions;
export default studentTasksSlice.reducer;
