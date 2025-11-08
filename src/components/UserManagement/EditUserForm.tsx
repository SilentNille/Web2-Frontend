import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { hideEditForm, updateUser } from "../../reducer/userSlice";
import type { AppDispatch, RootState } from "../../store/store";
import type { UpdateUserRequest } from "../../types/User";

function EditUserForm() {
    const dispatch = useDispatch<AppDispatch>();
    const { editingUser } = useSelector((state: RootState) => state.users);
    const { token } = useSelector((state: RootState) => state.authentication);

    const [formData, setFormData] = useState<UpdateUserRequest>({
        userID: "",
        firstName: "",
        lastName: "",
        password: "",
        isAdministrator: false,
    });

    useEffect(() => {
        if (editingUser) {
            setFormData({
                userID: editingUser.userID,
                firstName: editingUser.firstName,
                lastName: editingUser.lastName,
                password: "",
                isAdministrator: editingUser.isAdministrator,
            });
        }
    }, [editingUser]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFocusSelectAll = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingUser && token) {
            const updateData = { ...formData };
            if (!updateData.password) {
                delete updateData.password;
            }
            delete updateData.userID;
            dispatch(
                updateUser({
                    userID: editingUser.userID,
                    user: updateData,
                    token: token,
                })
            );
        }
    };

    const handleCancel = () => {
        dispatch(hideEditForm());
    };

    if (!editingUser) {
        return null;
    }

    return (
        <Container id="UserManagementPageEditComponent">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="mb-4">Edit User</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>User ID</Form.Label>
                            <Form.Control
                                id="EditUserComponentEditUserID"
                                type="text"
                                name="userID"
                                value={formData.userID}
                                onChange={handleChange}
                                onFocus={handleFocusSelectAll}
                                required
                            />
                        </Form.Group>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        id="EditUserComponentEditFirstName"
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onFocus={handleFocusSelectAll}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        id="EditUserComponentEditLastName"
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onFocus={handleFocusSelectAll}
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
                                        id="EditUserComponentEditPassword"
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Leave empty to keep current"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-2">
                            <Form.Check
                                id="EditUserComponentEditIsAdministrator"
                                type="checkbox"
                                name="isAdministrator"
                                checked={formData.isAdministrator}
                                onChange={handleChange}
                                label="Is Administrator"
                            />
                        </Form.Group>

                        <div className="d-flex gap-2 mt-4">
                            <Button variant="primary" id="EditUserComponentSaveUserButton" type="submit">
                                Save User
                            </Button>
                            <Button variant="secondary" id="OpenUserManagementPageListComponentButton" type="button" onClick={handleCancel}>
                                Back to List
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default EditUserForm;
