import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import CreateUserForm from "./UserManagement/CreateUserForm";
import DeleteUserDialog from "./UserManagement/DeleteUserDialog";
import EditUserForm from "./UserManagement/EditUserForm";
import UserList from "./UserManagement/UserList";
import { useNavigate } from "react-router-dom";

function UserManagementPage() {
    const { isAdmin } = useSelector((state: RootState) => state.authentication);
    const { showCreateForm, editingUser } = useSelector((state: RootState) => state.users);
    const navigate = useNavigate();

    if (!isAdmin) return null;

    const goToStart = () => {
        navigate("/start");
    };

    return (
        <div id="UserManagementPage">
            <div>
                <h1>User Management</h1>

                {showCreateForm ? (
                    <CreateUserForm />
                ) : editingUser ? (
                    <EditUserForm />
                ) : (
                    <UserList />
                )}

                <DeleteUserDialog />
                <button id="OpenUserManagementPageButton" onClick={goToStart}>
                    Zurück zur Startseite
                </button>
            </div>
        </div>
    );
}

export default UserManagementPage;
