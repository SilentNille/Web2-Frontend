import { Button, Modal } from 'react-bootstrap';
import type { DegreeCourse } from '../../types/DegreeCourse';

interface DeleteDegreeCourseDialogProps {
    degreeCourse: DegreeCourse | null;
    show: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

function DeleteDegreeCourseDialog({ degreeCourse, show, onConfirm, onCancel }: DeleteDegreeCourseDialogProps) {
    if (!degreeCourse) return null;

    return (
        <Modal
            show={show}
            onHide={onCancel}
            id={`DeleteDialogDegreeCourse${degreeCourse.id}`}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete Degree Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete the degree course "{degreeCourse.name}"?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    id="DeleteDialogCancelButton"
                    variant="secondary"
                    onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button
                    id="DeleteDialogConfirmButton"
                    variant="danger"
                    onClick={onConfirm}
                >
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteDegreeCourseDialog;
