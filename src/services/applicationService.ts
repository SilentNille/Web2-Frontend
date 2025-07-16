import type { DegreeCourseApplication } from '../types/DegreeCourseApplication';

const API_URL = 'https://localhost/api';

export const applicationService = {
    getMyApplications,
    getApplications,
    createApplication,
    deleteApplication
};

async function getMyApplications(token: string): Promise<DegreeCourseApplication[]> {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    const response = await fetch(`${API_URL}/degreeCourseApplications/myApplications`, requestOptions);
    const data = await response.json();
    return data;
}

async function getApplications(token: string): Promise<DegreeCourseApplication[]> {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    const response = await fetch(`${API_URL}/degreeCourseApplications`, requestOptions);
    const data = await response.json();
    return data;
}

async function createApplication(application: Partial<DegreeCourseApplication>, token: string): Promise<DegreeCourseApplication> {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(application)
    };

    const response = await fetch(`${API_URL}/degreeCourseApplications`, requestOptions);
    const data = await response.json();
    return data;
}

async function deleteApplication(token: string, id: string): Promise<void> {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    await fetch(`${API_URL}/degreeCourseApplications/${id}`, requestOptions);
}
