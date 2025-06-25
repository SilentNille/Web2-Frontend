import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, showCreateForm } from "../../reducer/userSlice";
import type { AppDispatch, RootState } from "../../store/store";
import UserItem from "./UserItem";

function UserList() {
    const dispatch = useDispatch<AppDispatch>();
    const { users } = useSelector((state: RootState) => state.users);
    const { token } = useSelector((state: RootState) => state.authentication);

    useEffect(() => {
        if (token) {
            dispatch(fetchUsers(token));
        }
    }, [dispatch, token]);

    const handleCreateUser = () => {
        dispatch(showCreateForm());
    };

    return (
        <div id="UserManagementPageListComponent">
            <div>
                <button id="UserManagementPageCreateUserButton" onClick={handleCreateUser}>
                    Create User
                </button>
            </div>

            <div>
                {users.length === 0 ? (
                    <p>No users found</p>
                ) : (
                    users.map((user) => <UserItem key={user.userID} user={user} />)
                )}
            </div>
        </div>
    );
}

export default UserList;
