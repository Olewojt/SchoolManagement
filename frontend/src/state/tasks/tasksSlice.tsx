import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";

export interface TaskCheckSlice {
    tasks: TaskCardInterface[];
    currentTaskId: number | null;
}

const initialState: TaskCheckSlice = {
    tasks: [],
    currentTaskId: null,
};

const taskSlice = createSlice({
    name: "studentTasks",
    initialState,
    reducers: {
        addTasks: (state, action: PayloadAction<TaskCardInterface[]>) => {
            state.tasks = action.payload;
        },
        checkTaskById: (state, action: PayloadAction<number>) => {
            const taskExists = state.tasks.some(task => task.id === action.payload);
            state.currentTaskId = taskExists ? action.payload : null;
        },
        resetTaskId: (state) => {
            state.currentTaskId = null;
        }
    },
});

export const { addTasks, checkTaskById, resetTaskId } = taskSlice.actions;
export default taskSlice.reducer;
