import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, hideDeleteDialog } from "../../reducer/userSlice";
import type { AppDispatch, RootState } from "../../store/store";

function DeleteUserDialog() {
    const dispatch = useDispatch<AppDispatch>();
    const { showDeleteDialog } = useSelector((state: RootState) => state.users);
    const { token } = useSelector((state: RootState) => state.authentication);

    const handleConfirmDelete = () => {
        if (showDeleteDialog && token) {
            dispatch(deleteUser({ userID: showDeleteDialog, token: token }));
        }
    };

    const handleCancelDelete = () => {
        dispatch(hideDeleteDialog());
    };

    return (
        <Modal
            show={!!showDeleteDialog}
            onHide={handleCancelDelete}
            centered
            id={`DeleteDialogUser${showDeleteDialog}`}
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete user "{showDeleteDialog}"?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" id="DeleteDialogCancelButton" onClick={handleCancelDelete}>
                    Cancel
                </Button>
                <Button variant="danger" id="DeleteDialogConfirmButton" onClick={handleConfirmDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteUserDialog;
