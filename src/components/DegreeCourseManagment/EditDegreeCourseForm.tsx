import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import type { DegreeCourse } from '../../types/DegreeCourse';

interface EditDegreeCourseFormProps {
    editForm: Partial<DegreeCourse>;
    onFormChange: (field: string, value: string) => void;
    onSubmit: () => void;
    onCancel: () => void;
}

function EditDegreeCourseForm({ editForm, onFormChange, onSubmit, onCancel }: EditDegreeCourseFormProps) {
    return (
        <Container id="DegreeCourseManagementPageEditComponent">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="mb-4">Edit Degree Course</h2>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control
                                        id="EditDegreeCourseComponentEditName"
                                        type="text"
                                        value={editForm.name || ''}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onFormChange('name', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Short Name:</Form.Label>
                                    <Form.Control
                                        id="EditDegreeCourseComponentEditShortName"
                                        type="text"
                                        value={editForm.shortName || ''}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onFormChange('shortName', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>University Name:</Form.Label>
                                    <Form.Control
                                        id="EditDegreeCourseComponentEditUniversityName"
                                        type="text"
                                        value={editForm.universityName || ''}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onFormChange('universityName', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>University Short Name:</Form.Label>
                                    <Form.Control
                                        id="EditDegreeCourseComponentEditUniversityShortName"
                                        type="text"
                                        value={editForm.universityShortName || ''}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onFormChange('universityShortName', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Department Name:</Form.Label>
                                    <Form.Control
                                        id="EditDegreeCourseComponentEditDepartmentName"
                                        type="text"
                                        value={editForm.departmentName || ''}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onFormChange('departmentName', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Department Short Name:</Form.Label>
                                    <Form.Control
                                        id="EditDegreeCourseComponentEditDepartmentShortName"
                                        type="text"
                                        value={editForm.departmentShortName || ''}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onFormChange('departmentShortName', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="d-flex gap-2 mt-4">
                            <Button
                                id="EditDegreeCourseComponentSaveDegreeCourseButton"
                                variant="primary"
                                onClick={onSubmit}
                            >
                                Save Changes
                            </Button>
                            <Button
                                id="OpenDegreeCourseManagementPageListComponentButton"
                                variant="secondary"
                                onClick={onCancel}
                            >
                                Back to List
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default EditDegreeCourseForm;
