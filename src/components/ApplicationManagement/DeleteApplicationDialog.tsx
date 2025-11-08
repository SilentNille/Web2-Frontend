import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import type { DegreeCourseApplication } from '../../types/DegreeCourseApplication';

interface DeleteApplicationDialogProps {
    application: DegreeCourseApplication | null;
    show: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

const DeleteApplicationDialog: React.FC<DeleteApplicationDialogProps> = ({
    application,
    show,
    onCancel,
    onConfirm
}) => {
    if (!application) return null;

    return (
        <Modal
            show={show}
            onHide={onCancel}
            id={`DeleteDialogDegreeCourseApplication${application.id}`}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete Application</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this application?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={onCancel}
                    id="DeleteDialogCancelButton"
                >
                    Cancel
                </Button>
                <Button
                    variant="danger"
                    onClick={onConfirm}
                    id="DeleteDialogConfirmButton"
                >
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteApplicationDialog;
