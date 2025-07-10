import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { applicationService } from '../services/applicationService';
import type { DegreeCourseApplication } from '../types/DegreeCourseApplication';

interface ApplicationState {
    applications: DegreeCourseApplication[];
    loading: boolean;
    error: string | null;
}

const initialState: ApplicationState = {
    applications: [],
    loading: false,
    error: null
};

export const fetchApplications = createAsyncThunk(
    'applications/fetchAll',
    async (token: string) => {
        const applications = await applicationService.getApplications(token);
        return applications;
    }
);

export const fetchMyApplications = createAsyncThunk(
    'applications/fetchMy',
    async (token: string) => {
        const applications = await applicationService.getMyApplications(token);
        return applications;
    }
);

export const deleteApplication = createAsyncThunk(
    'applications/delete',
    async ({ token, id }: { token: string, id: string }) => {
        await applicationService.deleteApplication(token, id);
        return id;
    }
);

const applicationSlice = createSlice({
    name: 'applications',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApplications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchApplications.fulfilled, (state, action) => {
                state.loading = false;
                state.applications = action.payload;
            })
            .addCase(fetchApplications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch applications';
            })
            .addCase(fetchMyApplications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMyApplications.fulfilled, (state, action) => {
                state.loading = false;
                state.applications = action.payload;
            })
            .addCase(fetchMyApplications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch applications';
            })
            .addCase(deleteApplication.fulfilled, (state, action) => {
                state.applications = state.applications.filter(app => app.id !== action.payload);
            });
    }
});

export default applicationSlice.reducer;
