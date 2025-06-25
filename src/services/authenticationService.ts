import { jwtDecode } from "jwt-decode";
export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    isAdmin: boolean;
}

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const basicAuth = btoa(`${credentials.username}:${credentials.password}`);

    try {
        const baseUrl = "https://localhost:443";

        const response = await fetch(`${baseUrl}/api/authenticate`, {
            method: "GET",
            headers: {
                Authorization: `Basic ${basicAuth}`,
            },
        });

        if (!response.ok) {
            throw new Error(
                `Login failed with status: ${response.status} - ${response.statusText}`
            );
        }

        const authHeader = response.headers.get("Authorization");

        if (!authHeader) {
            throw new Error("No authorization token received");
        }

        const token = authHeader.split(" ")[1];
        const isAdmin = jwtDecode(token).isAdministrator || false;

        return { token, isAdmin };
    } catch (error) {
        console.error("login - error:", error);
        throw error;
    }
};
