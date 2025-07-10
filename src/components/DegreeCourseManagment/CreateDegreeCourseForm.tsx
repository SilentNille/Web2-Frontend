import { Button, Col, Container, Form, Row } from 'react-bootstrap';

interface CreateDegreeCourseFormProps {
    createForm: {
        name: string;
        shortName: string;
        universityName: string;
        universityShortName: string;
        departmentName: string;
        departmentShortName: string;
    };
    onFormChange: (field: string, value: string) => void;
    onSubmit: () => void;
    onCancel: () => void;
}

function CreateDegreeCourseForm({ createForm, onFormChange, onSubmit, onCancel }: CreateDegreeCourseFormProps) {
    return (
        <Container id="DegreeCourseManagementPageCreateComponent">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="mb-4">Create Degree Course</h2>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control
                                        id="CreateDegreeCourseComponentEditName"
                                        type="text"
                                        value={createForm.name}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onFormChange('name', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Short Name:</Form.Label>
                                    <Form.Control
                                        id="CreateDegreeCourseComponentEditShortName"
                                        type="text"
                                        value={createForm.shortName}
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
                                        id="CreateDegreeCourseComponentEditUniversityName"
                                        type="text"
                                        value={createForm.universityName}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onFormChange('universityName', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>University Short Name:</Form.Label>
                                    <Form.Control
                                        id="CreateDegreeCourseComponentEditUniversityShortName"
                                        type="text"
                                        value={createForm.universityShortName}
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
                                        id="CreateDegreeCourseComponentEditDepartmentName"
                                        type="text"
                                        value={createForm.departmentName}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onFormChange('departmentName', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Department Short Name:</Form.Label>
                                    <Form.Control
                                        id="CreateDegreeCourseComponentEditDepartmentShortName"
                                        type="text"
                                        value={createForm.departmentShortName}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onFormChange('departmentShortName', e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="d-flex gap-2 mt-4">
                            <Button
                                id="CreateDegreeCourseComponentCreateDegreeCourseButton"
                                variant="primary"
                                onClick={onSubmit}
                            >
                                Create Degree Course
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

export default CreateDegreeCourseForm;
