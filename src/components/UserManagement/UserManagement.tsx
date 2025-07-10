import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store/store";
import CreateUserForm from "./CreateUserForm";
import DeleteUserDialog from "./DeleteUserDialog";
import EditUserForm from "./EditUserForm";
import UserList from "./UserList";
import { Button, Container } from 'react-bootstrap';
import MyNavBar from '../MyNavBar';

function UserManagementPage() {
    const { isAdmin } = useSelector((state: RootState) => state.authentication);
    const { showCreateForm, editingUser } = useSelector((state: RootState) => state.users);
    const navigate = useNavigate();

    if (!isAdmin) return null;

    const goToStart = () => {
        navigate("/start");
    };

    return (
        <Container id="UserManagementPage">
            <MyNavBar />
            <Container>
                <h1>User Management</h1>

                {showCreateForm ? (
                    <CreateUserForm />
                ) : editingUser ? (
                    <EditUserForm />
                ) : (
                    <UserList />
                )}

                <DeleteUserDialog />
                <Button id="OpenUserManagementPageButton" onClick={goToStart}>
                    Zurück zur Startseite
                </Button>
            </Container>
        </Container>
    );
}

export default UserManagementPage;
