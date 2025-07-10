import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { DegreeCourse } from '../types/DegreeCourse';

interface DegreeCourseState {
    degreeCourses: DegreeCourse[];
    selectedDegreeCourse: DegreeCourse | null;
    loading: boolean;
    error: string | null;
    showCreateDialog: boolean;
    showEditDialog: boolean;
    showDeleteDialog: boolean;
}

const initialState: DegreeCourseState = {
    degreeCourses: [],
    selectedDegreeCourse: null,
    loading: false,
    error: null,
    showCreateDialog: false,
    showEditDialog: false,
    showDeleteDialog: false,
};

export const degreeCourseSlice = createSlice({
    name: 'degreeCourse',
    initialState,
    reducers: {
        setDegreeCourses: (state, action: PayloadAction<DegreeCourse[]>) => {
            state.degreeCourses = action.payload;
            state.loading = false;
            state.error = null;
        },
        addDegreeCourse: (state, action: PayloadAction<DegreeCourse>) => {
            state.degreeCourses.push(action.payload);
            state.loading = false;
            state.error = null;
            state.showCreateDialog = false;
        },
        updateDegreeCourse: (state, action: PayloadAction<DegreeCourse>) => {
            const index = state.degreeCourses.findIndex(dc => dc.id === action.payload.id);
            if (index !== -1) {
                state.degreeCourses[index] = action.payload;
            }
            state.loading = false;
            state.error = null;
            state.showEditDialog = false;
            state.selectedDegreeCourse = null;
        },
        removeDegreeCourse: (state, action: PayloadAction<string>) => {
            state.degreeCourses = state.degreeCourses.filter(dc => dc.id !== action.payload);
            state.loading = false;
            state.error = null;
            state.showDeleteDialog = false;
            state.selectedDegreeCourse = null;
        },
        setSelectedDegreeCourse: (state, action: PayloadAction<DegreeCourse | null>) => {
            state.selectedDegreeCourse = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
            state.error = null;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.loading = false;
        },
        setShowCreateDialog: (state, action: PayloadAction<boolean>) => {
            state.showCreateDialog = action.payload;
            state.error = null;
        },
        setShowEditDialog: (state, action: PayloadAction<boolean>) => {
            state.showEditDialog = action.payload;
            state.error = null;
        },
        setShowDeleteDialog: (state, action: PayloadAction<boolean>) => {
            state.showDeleteDialog = action.payload;
            state.error = null;
        }
    }
});

export const {
    setDegreeCourses,
    addDegreeCourse,
    updateDegreeCourse,
    removeDegreeCourse,
    setSelectedDegreeCourse,
    setLoading,
    setError,
    setShowCreateDialog,
    setShowEditDialog,
    setShowDeleteDialog
} = degreeCourseSlice.actions;

export default degreeCourseSlice.reducer;
