import type { CreateUserRequest, UpdateUserRequest, User } from "../types/User";

const API_BASE_URL = "https://localhost/api";

export const userService = {
    async getAllUsers(token: string): Promise<User[]> {
        const response = await fetch(`${API_BASE_URL}/users`, {
            headers: {
                Authorization: token,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return response.json();
    },

    async getUserById(userID: string, token: string): Promise<User> {
        const response = await fetch(`${API_BASE_URL}/users/${userID}`, {
            headers: {
                Authorization: token,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        return response.json();
    },

    async createUser(user: CreateUserRequest, token: string): Promise<User> {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Failed to create user");
        }

        return response.json();
    },

    async updateUser(userID: string, user: UpdateUserRequest, token: string): Promise<User> {
        const response = await fetch(`${API_BASE_URL}/users/${userID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Failed to update user");
        }

        return response.json();
    },

    async deleteUser(userID: string, token: string): Promise<void> {
        const response = await fetch(`${API_BASE_URL}/users/${userID}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to delete user");
        }
    },
};
