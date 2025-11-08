export interface User {
    userID: string;
    firstName: string;
    lastName: string;
    password?: string;
    isAdministrator: boolean;
}

export interface CreateUserRequest {
    userID: string;
    firstName: string;
    lastName: string;
    password: string;
    isAdministrator: boolean;
}

export interface UpdateUserRequest {
    userID?: string;
    firstName: string;
    lastName: string;
    password?: string;
    isAdministrator: boolean;
}
