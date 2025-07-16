import type { DegreeCourse } from '../types/DegreeCourse';

const API_URL = 'https://localhost/api';

export const degreeCourseService = {
    getDegreeCourses,
    getDegreeCourseById,
    createDegreeCourse,
    updateDegreeCourse,
    deleteDegreeCourse
};

function getDegreeCourses(token: string): Promise<DegreeCourse[]> {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    return fetch(`${API_URL}/degreeCourses`, requestOptions)
        .then(handleResponse);
}

function getDegreeCourseById(id: string, token: string): Promise<DegreeCourse> {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    return fetch(`${API_URL}/degreeCourses/${id}`, requestOptions)
        .then(handleResponse);
}

function createDegreeCourse(degreeCourse: Omit<DegreeCourse, 'id'>, token: string): Promise<DegreeCourse> {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(degreeCourse)
    };
    return fetch(`${API_URL}/degreeCourses`, requestOptions)
        .then(handleResponse);
}

function updateDegreeCourse(id: string, degreeCourse: Partial<DegreeCourse>, token: string): Promise<DegreeCourse> {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(degreeCourse)
    };
    return fetch(`${API_URL}/degreeCourses/${id}`, requestOptions)
        .then(handleResponse);
}

function deleteDegreeCourse(id: string, token: string): Promise<void> {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    return fetch(`${API_URL}/degreeCourses/${id}`, requestOptions)
        .then(handleResponse);
}

function handleResponse(response: Response) {
    return response.text().then(text => {
        let data;
        try {
            data = text && JSON.parse(text);
        } catch {
            data = text;
        }

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
