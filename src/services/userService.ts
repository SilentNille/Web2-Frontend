import type { CreateUserRequest, UpdateUserRequest, User } from "../types/User";

const API_BASE_URL = `https://${import.meta.env.REST_API_URL || 'localhost'}/api`;

export const userService = {
    async getAllUsers(token: string): Promise<User[]> {
        const response = await fetch(`${API_BASE_URL}/users`, {
            headers: {
                Authorization: `Bearer ${token}`,
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
                Authorization: `Bearer ${token}`,
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
                Authorization: `Bearer ${token}`,
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
                Authorization: `Bearer ${token}`,
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
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to delete user");
        }
    },
};
