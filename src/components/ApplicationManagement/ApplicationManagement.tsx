import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Pagination, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { deleteApplication, fetchApplications, fetchMyApplications } from "../../reducer/applicationSlice";
import { setDegreeCourses } from "../../reducer/degreeCourseSlice";
import { degreeCourseService } from "../../services/degreeCourseService";
import { userService } from "../../services/userService";
import type { AppDispatch, RootState } from "../../store/store";
import type { DegreeCourseApplication } from "../../types/DegreeCourseApplication";
import MyNavBar from '../MyNavBar';
import DeleteApplicationDialog from './DeleteApplicationDialog';

function ApplicationManagementPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { token, isAdmin } = useSelector((state: RootState) => state.authentication);
    const { applications, loading, error } = useSelector((state: RootState) => state.applications);

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState<DegreeCourseApplication | null>(null);
    const [enrichedApplications, setEnrichedApplications] = useState<DegreeCourseApplication[]>([]);
    const [loadingCourses, setLoadingCourses] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const applicationsPerPage = 12;

    useEffect(() => {
        if (token) {
            if (isAdmin) {
                dispatch(fetchApplications(token));
            } else {
                dispatch(fetchMyApplications(token));
            }
        }
    }, [token, isAdmin, dispatch]);

    useEffect(() => {
        async function fetchDegreeCourseData() {
            if (!applications.length || !token) return;

            setLoadingCourses(true);
            try {
                const [courses, users] = await Promise.all([
                    degreeCourseService.getDegreeCourses(token),
                    isAdmin ? userService.getAllUsers(token) : Promise.resolve([])
                ]);

                const courseMap = new Map();
                courses.forEach(course => courseMap.set(course.id, course));

                const userMap = new Map();
                users.forEach(user => userMap.set(user.userID, user));

                const enriched = applications
                    .filter(app => {
                        const courseExists = courseMap.has(app.degreeCourseID);
                        const userExists = !isAdmin || userMap.has(app.applicantUserID);
                        return courseExists && userExists;
                    })
                    .map(app => {
                        const course = courseMap.get(app.degreeCourseID);
                        return {
                            ...app,
                            degreeCourse: {
                                name: course.name,
                                universityShortName: course.universityShortName
                            }
                        };
                    });

                setEnrichedApplications(enriched);
                dispatch(setDegreeCourses(courses));
            } catch (err) {
                console.error('Failed to fetch degree course data:', err);
            } finally {
                setLoadingCourses(false);
            }
        }

        fetchDegreeCourseData();
    }, [applications, token, dispatch, isAdmin]);

    const handleDeleteApplication = async () => {
        if (!token || !selectedApplication?.id) return;

        try {
            await dispatch(deleteApplication({ token, id: selectedApplication.id })).unwrap();
            setShowDeleteDialog(false);
            setSelectedApplication(null);
        } catch (err) {
            console.error('Failed to delete application:', err);
        }
    };

    const openDeleteDialog = (application: DegreeCourseApplication) => {
        setSelectedApplication(application);
        setShowDeleteDialog(true);
    };

    if (loading || loadingCourses) {
        return (
            <div id="DegreeCourseApplicationManagementPage">
                <MyNavBar />
                <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div id="DegreeCourseApplicationManagementPage">
                <MyNavBar />
                <Container className="mt-4">
                    <Alert variant="danger">
                        <Alert.Heading>Error</Alert.Heading>
                        {error}
                    </Alert>
                </Container>
            </div>
        );
    }

    return (
        <div id="DegreeCourseApplicationManagementPage">
            <MyNavBar />
            <Container id="DegreeCourseApplicationManagementPageListComponent">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1>Application Management</h1>
                </div>

                {enrichedApplications.length === 0 ? (
                    <div className="text-center mt-4">
                        <p>No applications found.</p>
                    </div>
                ) : (
                    <>
                        <Row className="g-3">
                            {enrichedApplications
                                .slice((currentPage - 1) * applicationsPerPage, currentPage * applicationsPerPage)
                                .map((application: DegreeCourseApplication) => (
                                <Col key={application.id} xs={12} sm={6} md={4} lg={3}>
                                    <Card id={`DegreeCourseApplicationItem${application.applicantUserID}`} className="h-100 shadow-sm">
                                        <Card.Body>
                                            <Card.Title className="mb-2" id="DegreeCourseName">{application.degreeCourse?.name}</Card.Title>
                                            <Card.Text className="mb-1 small" id="ApplicantUserID">
                                                <strong>Applicant:</strong> {application.applicantUserID}
                                            </Card.Text>
                                            <Card.Text className="mb-1 small" id="UniversityShortName">
                                                <strong>University:</strong> {application.degreeCourse?.universityShortName}
                                            </Card.Text>
                                            <Card.Text className="mb-1 small">
                                                <strong>Period:</strong> <span id="TargetPeriodShortName">{application.targetPeriodShortName}</span> <span id="TargetPeriodYear">{application.targetPeriodYear}</span>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="bg-transparent border-0">
                                            <Button
                                                id={`DegreeCourseApplicationDeleteButton${application.id}`}
                                                variant="outline-danger"
                                                size="sm"
                                                className="w-100"
                                                onClick={() => openDeleteDialog(application)}
                                            >
                                                Delete
                                            </Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        {Math.ceil(enrichedApplications.length / applicationsPerPage) > 1 && (
                            <div className="d-flex justify-content-center mt-4">
                                <Pagination>
                                    <Pagination.First
                                        onClick={() => setCurrentPage(1)}
                                        disabled={currentPage === 1}
                                    />
                                    <Pagination.Prev
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    />

                                    {[...Array(Math.ceil(enrichedApplications.length / applicationsPerPage))].map((_, index) => {
                                        const pageNumber = index + 1;
                                        const totalPages = Math.ceil(enrichedApplications.length / applicationsPerPage);
                                        if (
                                            pageNumber === 1 ||
                                            pageNumber === totalPages ||
                                            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                        ) {
                                            return (
                                                <Pagination.Item
                                                    key={pageNumber}
                                                    active={pageNumber === currentPage}
                                                    onClick={() => setCurrentPage(pageNumber)}
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
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                        disabled={currentPage === Math.ceil(enrichedApplications.length / applicationsPerPage)}
                                    />
                                    <Pagination.Last
                                        onClick={() => setCurrentPage(Math.ceil(enrichedApplications.length / applicationsPerPage))}
                                        disabled={currentPage === Math.ceil(enrichedApplications.length / applicationsPerPage)}
                                    />
                                </Pagination>
                            </div>
                        )}
                    </>
                )}
            </Container>

            <DeleteApplicationDialog
                application={selectedApplication}
                show={showDeleteDialog}
                onConfirm={handleDeleteApplication}
                onCancel={() => setShowDeleteDialog(false)}
            />
        </div>
    );
}

export default ApplicationManagementPage;
