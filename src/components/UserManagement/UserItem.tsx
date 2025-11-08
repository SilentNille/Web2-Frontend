import { Button, Card } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { showDeleteDialog, showEditForm } from "../../reducer/userSlice";
import type { AppDispatch } from "../../store/store";
import type { User } from "../../types/User";

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
        <Card id={`UserItem${user.userID}`} className="h-100 shadow-sm">
            <Card.Body>
                <Card.Title className="mb-2" id="UserID">{user.userID}</Card.Title>
                <Card.Text className="mb-1" id="FirstName">First Name: {user.firstName}</Card.Text>
                <Card.Text className="mb-3" id="LastName">Last Name: {user.lastName}</Card.Text>
                <Card.Text className="text-muted">Admin: {user.isAdministrator ? "Yes" : "No"}</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-transparent border-0 d-flex gap-2">
                <Button variant="outline-secondary" size="sm" id={`UserItemEditButton${user.userID}`} onClick={handleEdit}>
                    Edit
                </Button>
                <Button variant="outline-danger" size="sm" id={`UserItemDeleteButton${user.userID}`} onClick={handleDelete}>
                    Delete
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default UserItem;
