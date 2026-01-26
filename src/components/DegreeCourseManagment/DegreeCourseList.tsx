import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import type { DegreeCourse } from '../../types/DegreeCourse';

interface DegreeCourseListProps {
    degreeCourses: DegreeCourse[];
    isAdmin: boolean;
    onEdit: (degreeCourse: DegreeCourse) => void;
    onDelete: (degreeCourse: DegreeCourse) => void;
    onCreateApplication: (degreeCourse: DegreeCourse) => void;
    onCreateNew: () => void;
}

function DegreeCourseList({
    degreeCourses,
    isAdmin,
    onEdit,
    onDelete,
    onCreateApplication,
    onCreateNew
}: DegreeCourseListProps) {
    return (
        <Container id="DegreeCourseManagementPageListComponent">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Degree Course Management</h1>
                {isAdmin && (
                    <Button
                        id="DegreeCourseManagementPageCreateDegreeCourseButton"
                        variant="primary"
                        onClick={onCreateNew}
                    >
                        Create Degree Course
                    </Button>
                )}
            </div>

            <Row className="g-3">
                {degreeCourses.map((degreeCourse: DegreeCourse) => (
                    <Col key={degreeCourse.id} xs={12} sm={6} md={4} lg={3}>
                        <Card id={`DegreeCourseItem${degreeCourse.name}`} className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title className="mb-2" id="Name">{degreeCourse.name}</Card.Title>
                                <Card.Text className="mb-1" id="UniversityName">
                                    <strong>University:</strong> {degreeCourse.universityName}
                                </Card.Text>
                                <Card.Text className="mb-3" id="DepartmentName">
                                    <strong>Department:</strong> {degreeCourse.departmentName}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-transparent border-0">
                                <div className="d-flex flex-column gap-2">
                                    {isAdmin && (
                                        <div className="d-flex gap-2">
                                            <Button
                                                id={`DegreeCourseItemEditButton${degreeCourse.id}`}
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => onEdit(degreeCourse)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                id={`DegreeCourseItemDeleteButton${degreeCourse.id}`}
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={() => onDelete(degreeCourse)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    )}
                                    <Button
                                        id={`CreateDegreeCourseApplicationForDegreeCourse${degreeCourse.id}`}
                                        variant="success"
                                        size="sm"
                                        onClick={() => onCreateApplication(degreeCourse)}
                                    >
                                        Create Application
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default DegreeCourseList;
