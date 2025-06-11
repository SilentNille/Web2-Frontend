export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  console.log("Attempting to log in with credentials:", credentials);

  const basicAuth = btoa(`${credentials.username}:${credentials.password}`);

  try {
    const baseUrl = "https://localhost:443";

    const response = await fetch(`${baseUrl}/api/authenticate`, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${basicAuth}`
      }
    });

    if (!response.ok) {
      throw new Error(`Login failed with status: ${response.status} - ${response.statusText}`);
    }

    const authHeader = response.headers.get("Authorization");
    console.log("login - authHeader:", authHeader);

    if (!authHeader) {
      throw new Error('No authorization token received');
    }

    const token = authHeader.split(" ")[1];

    console.log("login - extracted token:", token);
    return { token };
  } catch (error) {
    console.error("login - error:", error);
    // Handle network errors (like certificate issues)
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Cannot connect to server. Check if server is running and certificate is trusted.');
    }
    // Re-throw other errors as-is
    throw error;
  }
};
