import { useEffect } from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
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
        <Container id="UserManagementPageListComponent" className="py-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="m-0">Users</h2>
                <Button variant="primary" id="UserManagementPageCreateUserButton" onClick={handleCreateUser}>
                    Create User
                </Button>
            </div>

            {users.length === 0 ? (
                <p>No users found</p>
            ) : (
                <Row className="g-3">
                    {users.map((user) => (
                        <Col key={user.userID} xs={12} sm={6} md={4} lg={3}>
                            <UserItem user={user} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default UserList;
