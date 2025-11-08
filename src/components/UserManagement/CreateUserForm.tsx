import { useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
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
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="mb-4">Create New User</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>User ID</Form.Label>
                            <Form.Control
                                id="CreateUserComponentEditUserID"
                                type="text"
                                name="userID"
                                value={formData.userID}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        id="CreateUserComponentEditFirstName"
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        id="CreateUserComponentEditLastName"
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        id="CreateUserComponentEditPassword"
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-2">
                            <Form.Check
                                id="CreateUserComponentEditIsAdministrator"
                                type="checkbox"
                                name="isAdministrator"
                                checked={formData.isAdministrator}
                                onChange={handleChange}
                                label="Is Administrator"
                            />
                        </Form.Group>

                        <div className="d-flex gap-2 mt-4">
                            <Button id="CreateUserComponentCreateUserButton" type="submit" variant="primary">
                                Create User
                            </Button>
                            <Button
                                id="OpenUserManagementPageListComponentButton"
                                type="button"
                                variant="secondary"
                                onClick={handleCancel}
                            >
                                Back to List
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateUserForm;
