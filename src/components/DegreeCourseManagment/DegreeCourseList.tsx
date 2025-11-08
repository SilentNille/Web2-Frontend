import { Button, Container, Table } from 'react-bootstrap';
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

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>University</th>
                        <th>Department</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {degreeCourses.map((degreeCourse: DegreeCourse) => (
                        <tr key={degreeCourse.id} id={`DegreeCourseItem${degreeCourse.name}`}>
                            <td id="UniversityName">{degreeCourse.universityName}</td>
                            <td id="DepartmentName">{degreeCourse.departmentName}</td>
                            <td id="Name">{degreeCourse.name}</td>
                            <td>
                                <div className="d-flex gap-2">
                                    {isAdmin && (
                                        <>
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
                                        </>
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
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default DegreeCourseList;
