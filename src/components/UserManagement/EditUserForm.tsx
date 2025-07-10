import { useEffect, useState } from "react";
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { hideEditForm, updateUser } from "../../reducer/userSlice";
import type { AppDispatch, RootState } from "../../store/store";
import type { UpdateUserRequest } from "../../types/User";

function EditUserForm() {
    const dispatch = useDispatch<AppDispatch>();
    const { editingUser } = useSelector((state: RootState) => state.users);
    const { token } = useSelector((state: RootState) => state.authentication);

    const [formData, setFormData] = useState<UpdateUserRequest>({
        firstName: "",
        lastName: "",
        password: "",
        isAdministrator: false,
    });

    useEffect(() => {
        if (editingUser) {
            setFormData({
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingUser && token) {
            const updateData = { ...formData };
            if (!updateData.password) {
                delete updateData.password;
            }
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
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <Container>
                    <label> User ID: <input id="EditUserComponentEditUserID" type="text" value={editingUser.userID} onChange={handleChange} /> </label>
                </Container>

                <Container>
                    <label> First Name: <input id="EditUserComponentEditFirstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required /> </label>
                </Container>

                <Container>
                    <label> Last Name: <input id="EditUserComponentEditLastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required /> </label>
                </Container>

                <Container>
                    <label> Password: <input id="EditUserComponentEditPassword" type="password" name="password" value={formData.password} onChange={handleChange} /> </label>
                </Container>

                <Container>
                    <label> <input id="EditUserComponentEditIsAdministrator" type="checkbox" name="isAdministrator" checked={formData.isAdministrator} onChange={handleChange} /> Is Administrator </label>
                </Container>

                <Container>
                    <Button variant="success" id="EditUserComponentSaveUserButton" type="submit">
                        Save User
                    </Button>
                    <Button variant="outline-secondary" id="OpenUserManagementPageListComponentButton" type="button" onClick={handleCancel} >
                        Cancel
                    </Button>
                </Container>
            </form>
        </Container>
    );
}

export default EditUserForm;
