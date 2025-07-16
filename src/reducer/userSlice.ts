import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { userService } from "../services/userService";
import type { CreateUserRequest, UpdateUserRequest, User } from "../types/User";

interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
    showCreateForm: boolean;
    editingUser: User | null;
    showDeleteDialog: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    showCreateForm: false,
    editingUser: null,
    showDeleteDialog: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (token: string) => {
    return await userService.getAllUsers(token);
});

export const createUser = createAsyncThunk(
    "users/createUser",
    async ({ user, token }: { user: CreateUserRequest; token: string }) => {
        return await userService.createUser(user, token);
    }
);

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async ({ userID, user, token }: { userID: string; user: UpdateUserRequest; token: string }) => {
        return await userService.updateUser(userID, user, token);
    }
);

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async ({ userID, token }: { userID: string; token: string }) => {
        await userService.deleteUser(userID, token);
        return userID;
    }
);

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        showCreateForm: (state) => {
            state.showCreateForm = true;
            state.editingUser = null;
        },
        hideCreateForm: (state) => {
            state.showCreateForm = false;
        },
        showEditForm: (state, action: PayloadAction<User>) => {
            state.editingUser = action.payload;
            state.showCreateForm = false;
        },
        hideEditForm: (state) => {
            state.editingUser = null;
        },
        showDeleteDialog: (state, action: PayloadAction<string>) => {
            state.showDeleteDialog = action.payload;
        },
        hideDeleteDialog: (state) => {
            state.showDeleteDialog = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch users';
            })

            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
                state.showCreateForm = false;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to create user';
            })

            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.users.findIndex(
                    (user) => user.userID === action.payload.userID
                );
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
                state.editingUser = null;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to update user';
            })

            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.filter((user) => user.userID !== action.payload);
                state.showDeleteDialog = null;
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to delete user';
            });
    },
});

export const {
    showCreateForm,
    hideCreateForm,
    showEditForm,
    hideEditForm,
    showDeleteDialog,
    hideDeleteDialog,
    clearError,
} = userSlice.actions;

export default userSlice.reducer;
