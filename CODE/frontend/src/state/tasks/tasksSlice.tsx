import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import { getUserTasks, getTeacherTasks } from "api/Task.tsx";

// Define the interface for the slice state
export interface TaskCheckSlice {
    tasks: TaskCardInterface[];
    currentTaskId: number | null;
}

// Define the initial state
const initialState: TaskCheckSlice = {
    tasks: [],
    currentTaskId: null,
};

// Define the argument type for fetchNewTasks
interface FetchTasksArgs {
    userId: number;
    role: string;
}

// Create an async thunk to fetch new tasks
export const fetchNewTasks = createAsyncThunk(
    "studentTasks/fetchNewTasks",
    async ({ userId, role }: FetchTasksArgs) => {
        try {
            const tasks = role === "Teacher" ? await getTeacherTasks(userId) : await getUserTasks(userId);
            return tasks;
        } catch (error) {
            throw new Error("Failed to fetch tasks");
        }
    }
);

// Create the slice
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewTasks.pending, () => {
                // Optionally handle loading state here
            })
            .addCase(fetchNewTasks.fulfilled, (state, action: PayloadAction<TaskCardInterface[]>) => {
                state.tasks = action.payload;
            })
            .addCase(fetchNewTasks.rejected, (action) => {
                // Optionally handle error state here
                console.error(action);
            });
    }
});

// Export the actions and reducer
export const { addTasks, checkTaskById, resetTaskId } = taskSlice.actions;
export default taskSlice.reducer;
