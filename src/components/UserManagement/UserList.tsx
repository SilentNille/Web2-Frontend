import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Pagination, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, showCreateForm, showDeleteDialog, showEditForm } from "../../reducer/userSlice";
import type { AppDispatch, RootState } from "../../store/store";

function UserList() {
    const dispatch = useDispatch<AppDispatch>();
    const { users } = useSelector((state: RootState) => state.users);
    const { token } = useSelector((state: RootState) => state.authentication);

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    useEffect(() => {
        if (token) {
            dispatch(fetchUsers(token));
        }
    }, [dispatch, token]);

    const handleCreateUser = () => {
        dispatch(showCreateForm());
    };

    const handleEdit = (userID: string) => {
        const user = users.find(u => u.userID === userID);
        if (user) {
            dispatch(showEditForm(user));
        }
    };

    const handleDelete = (userID: string) => {
        dispatch(showDeleteDialog(userID));
    };

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
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
                <>
                    <Row className="g-3">
                        {currentUsers.map((user) => (
                            <Col key={user.userID} xs={12} sm={6} md={4} lg={3}>
                                <Card id={`UserItem${user.userID}`} className="h-100 shadow-sm">
                                    <Card.Body>
                                        <Card.Title className="mb-2" id="UserID">{user.userID}</Card.Title>
                                        <Card.Text className="mb-1" id="FirstName">First Name: {user.firstName}</Card.Text>
                                        <Card.Text className="mb-3" id="LastName">Last Name: {user.lastName}</Card.Text>
                                        <Card.Text className="text-muted">Admin: {user.isAdministrator ? "Yes" : "No"}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="bg-transparent border-0 d-flex gap-2">
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            id={`UserItemEditButton${user.userID}`}
                                            onClick={() => handleEdit(user.userID)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outline-danger"
                                            size="sm"
                                            id={`UserItemDeleteButton${user.userID}`}
                                            onClick={() => handleDelete(user.userID)}
                                        >
                                            Delete
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {totalPages > 1 && (
                        <div className="d-flex justify-content-center mt-3">
                            <Pagination>
                                <Pagination.First
                                    onClick={() => handlePageChange(1)}
                                    disabled={currentPage === 1}
                                />
                                <Pagination.Prev
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                />

                                {[...Array(totalPages)].map((_, index) => {
                                    const pageNumber = index + 1;
                                    // Show first page, last page, current page, and pages around current
                                    if (
                                        pageNumber === 1 ||
                                        pageNumber === totalPages ||
                                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                    ) {
                                        return (
                                            <Pagination.Item
                                                key={pageNumber}
                                                active={pageNumber === currentPage}
                                                onClick={() => handlePageChange(pageNumber)}
                                            >
                                                {pageNumber}
                                            </Pagination.Item>
                                        );
                                    } else if (
                                        pageNumber === currentPage - 2 ||
                                        pageNumber === currentPage + 2
                                    ) {
                                        return <Pagination.Ellipsis key={pageNumber} disabled />;
                                    }
                                    return null;
                                })}

                                <Pagination.Next
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                />
                                <Pagination.Last
                                    onClick={() => handlePageChange(totalPages)}
                                    disabled={currentPage === totalPages}
                                />
                            </Pagination>
                        </div>
                    )}
                </>
            )}
        </Container>
    );
}

export default UserList;
