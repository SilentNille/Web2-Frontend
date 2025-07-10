import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import type { DegreeCourse } from '../../types/DegreeCourse';

interface CreateApplicationDialogProps {
    degreeCourse: DegreeCourse | null;
    show: boolean;
    isAdmin: boolean;
    applicationForm: {
        applicantUserID: string;
        targetPeriodYear: number;
        targetPeriodShortName: 'WiSe' | 'SoSe';
    };
    onFormChange: (field: string, value: string | number) => void;
    onSubmit: () => void;
    onCancel: () => void;
}

function CreateApplicationDialog({
    degreeCourse,
    show,
    isAdmin,
    applicationForm,
    onFormChange,
    onSubmit,
    onCancel
}: CreateApplicationDialogProps) {
    if (!degreeCourse) return null;

    return (
        <Modal show={show} onHide={onCancel} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Create Application</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="mb-3">
                        <strong>Degree Course:</strong> {degreeCourse.name} ({degreeCourse.universityShortName})
                    </div>

                    <Form.Group className="mb-3">
                        <Form.Label>User ID:</Form.Label>
                        <Form.Control
                            id="CreateDegreeCourseApplicationEditUserID"
                            type="text"
                            value={applicationForm.applicantUserID}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                onFormChange('applicantUserID', e.target.value)}
                            disabled={!isAdmin}
                            placeholder={!isAdmin ? "Your User ID (pre-filled)" : "Enter User ID"}
                        />
                        {!isAdmin && (
                            <Form.Text className="text-muted">
                                Only administrators can create applications for other users.
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Target Year:</Form.Label>
                                <Form.Control
                                    id="CreateDegreeCourseApplicationEditTargetPeriodYear"
                                    type="number"
                                    value={applicationForm.targetPeriodYear}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        onFormChange('targetPeriodYear', parseInt(e.target.value))}
                                    min="2020"
                                    max="2030"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Semester:</Form.Label>
                                <Form.Select
                                    id="CreateDegreeCourseApplicationEditTargetPeriodName"
                                    value={applicationForm.targetPeriodShortName}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                        onFormChange('targetPeriodShortName', e.target.value)}
                                >
                                    <option value="WiSe">Winter Semester (WiSe)</option>
                                    <option value="SoSe">Summer Semester (SoSe)</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>
                <Button
                    id="CreateDegreeCourseApplicationCreateButton"
                    variant="success"
                    onClick={onSubmit}
                >
                    Create Application
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateApplicationDialog;
