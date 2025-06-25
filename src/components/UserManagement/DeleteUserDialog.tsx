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

    if (!showDeleteDialog) {
        return null;
    }

    return (
        <div>
            <div id={`DeleteDialogUser${showDeleteDialog}`}>
                <h3>Confirm Delete</h3>
                <p>Are you sure you want to delete user "{showDeleteDialog}"?</p>
                <div>
                    <button id="DeleteDialogConfirmButton" onClick={handleConfirmDelete}>
                        Delete
                    </button>
                    <button id="DeleteDialogCancelButton" onClick={handleCancelDelete}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteUserDialog;
