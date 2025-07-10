import { useState } from "react";
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { createUser, hideCreateForm } from "../../reducer/userSlice";
import type { AppDispatch, RootState } from "../../store/store";
import type { CreateUserRequest } from "../../types/User";

function CreateUserForm() {
    const dispatch = useDispatch<AppDispatch>();
    const { token } = useSelector((state: RootState) => state.authentication);

    const [formData, setFormData] = useState<CreateUserRequest>({
        userID: "",
        firstName: "",
        lastName: "",
        password: "",
        isAdministrator: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (token) {
            dispatch(createUser({ user: formData, token: token }));
        }
    };

    const handleCancel = () => {
        dispatch(hideCreateForm());
    };

    return (
        <Container id="UserManagementPageCreateComponent">
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit}>
                <Container>
                    <label>
                        User ID:
                        <input
                            id="CreateUserComponentEditUserID"
                            type="text"
                            name="userID"
                            value={formData.userID}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </Container>

                <Container>
                    <label>
                        First Name:
                        <input
                            id="CreateUserComponentEditFirstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </Container>

                <Container>
                    <label>
                        Last Name:
                        <input
                            id="CreateUserComponentEditLastName"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </Container>

                <Container>
                    <label>
                        Password:
                        <input
                            id="CreateUserComponentEditPassword"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </Container>

                <Container>
                    <label>
                        <input
                            id="CreateUserComponentEditIsAdministrator"
                            type="checkbox"
                            name="isAdministrator"
                            checked={formData.isAdministrator}
                            onChange={handleChange}
                        />
                        Is Administrator
                    </label>
                </Container>

                <Container>
                    <Button id="CreateUserComponentCreateUserButton" type="submit">
                        Create User
                    </Button>
                    <Button
                        id="OpenUserManagementPageListComponentButton"
                        type="button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </Container>
            </form>
        </Container>
    );
}

export default CreateUserForm;
