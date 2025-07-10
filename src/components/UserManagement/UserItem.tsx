import { useDispatch } from "react-redux";
import { showDeleteDialog, showEditForm } from "../../reducer/userSlice";
import type { AppDispatch } from "../../store/store";
import type { User } from "../../types/User";
import { Button, Container } from 'react-bootstrap';

interface UserItemProps {
    user: User;
}

function UserItem({ user }: UserItemProps) {
    const dispatch = useDispatch<AppDispatch>();

    const handleEdit = () => {
        dispatch(showEditForm(user));
    };

    const handleDelete = () => {
        dispatch(showDeleteDialog(user.userID));
    };

    return (
        <Container id={`UserItem${user.userID}`}>
            <Container>
                <span id="UserID">User ID: {user.userID}</span>
            </Container>
            <Container>
                <span id="FirstName">First Name: {user.firstName}</span>
            </Container>
            <Container>
                <span id="LastName">Last Name: {user.lastName}</span>
            </Container>
            <Container>
                <span>Admin: {user.isAdministrator ? "Yes" : "No"}</span>
            </Container>
            <Container>
                <Button variant="outline-secondary" id={`UserItemEditButton${user.userID}`} onClick={handleEdit}>
                    Edit
                </Button>
                <Button variant="outline-danger" id={`UserItemDeleteButton${user.userID}`} onClick={handleDelete}>
                    Delete
                </Button>
            </Container>
        </Container>
    );
}

export default UserItem;
