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
        <div id={`UserItem${user.userID}`}>
            <div>
                <span id="UserID">User ID: {user.userID}</span>
            </div>
            <div>
                <span id="FirstName">First Name: {user.firstName}</span>
            </div>
            <div>
                <span id="LastName">Last Name: {user.lastName}</span>
            </div>
            <div>
                <span>Admin: {user.isAdministrator ? "Yes" : "No"}</span>
            </div>
            <div>
                <button id={`UserItemEditButton${user.userID}`} onClick={handleEdit}>
                    Edit
                </button>
                <button id={`UserItemDeleteButton${user.userID}`} onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default UserItem;
