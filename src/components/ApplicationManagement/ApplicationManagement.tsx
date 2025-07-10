import { useEffect, useState } from "react";
import { Alert, Button, Container, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { deleteApplication, fetchApplications, fetchMyApplications } from "../../reducer/applicationSlice";
import type { AppDispatch, RootState } from "../../store/store";
import type { DegreeCourseApplication } from "../../types/DegreeCourseApplication";
import MyNavBar from '../MyNavBar';
import DeleteApplicationDialog from './DeleteApplicationDialog';

function ApplicationManagementPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { token, isAdmin, userID } = useSelector((state: RootState) => state.authentication);
    const { applications, loading, error } = useSelector((state: RootState) => state.applications);

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState<DegreeCourseApplication | null>(null);

    useEffect(() => {
        if (token) {
            if (isAdmin) {
                dispatch(fetchApplications(token));
            } else {
                dispatch(fetchMyApplications(token));
            }
        }
    }, [token, isAdmin, dispatch]);

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

    if (loading) {
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

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Applicant User ID</th>
                            <th>Degree Course Name</th>
                            <th>Target Year</th>
                            <th>Semester</th>
                            <th>University</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application: DegreeCourseApplication) => (
                            <tr key={application.id} id={`DegreeCourseApplicationItem${application.id}`}>
                                <td id="ApplicantUserID">{application.applicantUserID}</td>
                                <td id="DegreeCourseName">{application.degreeCourse?.name || application.degreeCourseShortName || 'N/A'}</td>
                                <td id="TargetPeriodYear">{application.targetPeriodYear}</td>
                                <td id="TargetPeriodShortName">{application.targetPeriodShortName}</td>
                                <td id="UniversityShortName">{application.degreeCourse?.universityShortName || application.universityShortName || 'N/A'}</td>
                                <td>
                                    {(isAdmin || application.applicantUserID === userID) && (
                                        <Button
                                            id={`DegreeCourseApplicationItemDeleteButton${application.id}`}
                                            variant="outline-danger"
                                            size="sm"
                                            onClick={() => openDeleteDialog(application)}
                                        >
                                            Delete
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {applications.length === 0 && (
                    <div className="text-center mt-4">
                        <p>No applications found.</p>
                    </div>
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
