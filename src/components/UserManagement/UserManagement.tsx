import {  useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import CreateUserForm from "./CreateUserForm";
import DeleteUserDialog from "./DeleteUserDialog";
import EditUserForm from "./EditUserForm";
import UserList from "./UserList";
import { Container, Spinner } from 'react-bootstrap';
import MyNavBar from '../MyNavBar';
import StartPageButton from '../StartPageButton';

function UserManagementPage() {
    const { isAdmin } = useSelector((state: RootState) => state.authentication);
    const { showCreateForm, editingUser } = useSelector((state: RootState) => state.users);

    if (!isAdmin) return null;

    if (false) {
        return (
            <Container id="UserManagementPage">
                <MyNavBar />
                <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <Spinner animation="border" role="status"> </Spinner>
                </Container>
            </Container>
        );
    }

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
            </Container>
            <StartPageButton />
        </Container>
    );
}

export default UserManagementPage;
