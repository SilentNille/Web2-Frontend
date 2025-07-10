import { useEffect, useState } from "react";
import { Alert, Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {
    addDegreeCourse,
    removeDegreeCourse,
    setDegreeCourses,
    setError,
    setLoading,
    setSelectedDegreeCourse,
    setShowCreateDialog,
    setShowDeleteDialog,
    setShowEditDialog,
    updateDegreeCourse
} from "../../reducer/degreeCourseSlice";
import { applicationService } from "../../services/applicationService";
import { degreeCourseService } from "../../services/degreeCourseService";
import type { RootState } from "../../store/store";
import type { DegreeCourse } from "../../types/DegreeCourse";
import MyNavBar from '../MyNavBar';
import CreateApplicationDialog from './CreateApplicationDialog';
import CreateDegreeCourseForm from './CreateDegreeCourseForm';
import DegreeCourseList from './DegreeCourseList';
import DeleteDegreeCourseDialog from './DeleteDegreeCourseDialog';
import EditDegreeCourseForm from './EditDegreeCourseForm';

function DegreeCourseManagementPage() {
    const dispatch = useDispatch();
    const { token, isAdmin, userID } = useSelector((state: RootState) => state.authentication);
    const {
        degreeCourses,
        selectedDegreeCourse,
        loading,
        error,
        showCreateDialog,
        showEditDialog,
        showDeleteDialog
    } = useSelector((state: RootState) => state.degreeCourse);

    const [showCreateApplication, setShowCreateApplication] = useState(false);
    const [selectedDegreeCourseForApplication, setSelectedDegreeCourseForApplication] = useState<DegreeCourse | null>(null);
    const [applicationForm, setApplicationForm] = useState({
        applicantUserID: '',
        targetPeriodYear: new Date().getFullYear(),
        targetPeriodShortName: 'WiSe' as 'WiSe' | 'SoSe'
    });
    const [editForm, setEditForm] = useState<Partial<DegreeCourse>>({});
    const [createForm, setCreateForm] = useState({
        name: '',
        shortName: '',
        universityName: '',
        universityShortName: '',
        departmentName: '',
        departmentShortName: ''
    });

    useEffect(() => {
        if (token) {
            fetchDegreeCourses();
        }
    }, [token]);

    const fetchDegreeCourses = async () => {
        if (!token) return;

        dispatch(setLoading(true));
        try {
            const courses = await degreeCourseService.getDegreeCourses(token);
            dispatch(setDegreeCourses(courses));
        } catch (err) {
            dispatch(setError(err as string));
        }
    };

    const handleCreateDegreeCourse = async () => {
        if (!token) return;

        dispatch(setLoading(true));
        try {
            const newCourse = await degreeCourseService.createDegreeCourse(createForm, token);
            dispatch(addDegreeCourse(newCourse));
            setCreateForm({
                name: '',
                shortName: '',
                universityName: '',
                universityShortName: '',
                departmentName: '',
                departmentShortName: ''
            });
        } catch (err) {
            dispatch(setError(err as string));
        }
    };

    const handleUpdateDegreeCourse = async () => {
        if (!token || !selectedDegreeCourse) return;

        dispatch(setLoading(true));
        try {
            const updatedCourse = await degreeCourseService.updateDegreeCourse(
                selectedDegreeCourse.id,
                editForm,
                token
            );
            dispatch(updateDegreeCourse(updatedCourse));
            setEditForm({});
        } catch (err) {
            dispatch(setError(err as string));
        }
    };

    const handleDeleteDegreeCourse = async () => {
        if (!token || !selectedDegreeCourse) return;

        dispatch(setLoading(true));
        try {
            await degreeCourseService.deleteDegreeCourse(selectedDegreeCourse.id, token);
            dispatch(removeDegreeCourse(selectedDegreeCourse.id));
        } catch (err) {
            dispatch(setError(err as string));
        }
    };

    const handleCreateApplication = async () => {
        if (!token || !selectedDegreeCourseForApplication) return;

        try {
            const application = {
                degreeCourseID: selectedDegreeCourseForApplication.id,
                applicantUserID: isAdmin ? applicationForm.applicantUserID : userID || '',
                targetPeriodYear: applicationForm.targetPeriodYear,
                targetPeriodShortName: applicationForm.targetPeriodShortName
            };

            await applicationService.createApplication(application, token);

            setShowCreateApplication(false);
            setSelectedDegreeCourseForApplication(null);
            setApplicationForm({
                applicantUserID: '',
                targetPeriodYear: new Date().getFullYear(),
                targetPeriodShortName: 'WiSe' as 'WiSe' | 'SoSe'
            });
        } catch (err) {
            dispatch(setError(err as string));
        }
    };

    const openEditDialog = (degreeCourse: DegreeCourse) => {
        dispatch(setSelectedDegreeCourse(degreeCourse));
        setEditForm(degreeCourse);
        dispatch(setShowEditDialog(true));
    };

    const openDeleteDialog = (degreeCourse: DegreeCourse) => {
        dispatch(setSelectedDegreeCourse(degreeCourse));
        dispatch(setShowDeleteDialog(true));
    };

    const openCreateApplicationDialog = (degreeCourse: DegreeCourse) => {
        setSelectedDegreeCourseForApplication(degreeCourse);
        setApplicationForm(prev => ({
            ...prev,
            applicantUserID: isAdmin ? '' : userID || ''
        }));
        setShowCreateApplication(true);
    };

    const handleCreateFormChange = (field: string, value: string) => {
        setCreateForm(prev => ({ ...prev, [field]: value }));
    };

    const handleEditFormChange = (field: string, value: string) => {
        setEditForm(prev => ({ ...prev, [field]: value }));
    };

    const handleApplicationFormChange = (field: string, value: string | number) => {
        setApplicationForm(prev => ({ ...prev, [field]: value }));
    };

    if (loading) {
        return (
            <div id="DegreeCourseManagementPage">
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
            <div id="DegreeCourseManagementPage">
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
        <div id="DegreeCourseManagementPage">
            <MyNavBar />

            {!showCreateDialog && !showEditDialog && (
                <DegreeCourseList
                    degreeCourses={degreeCourses}
                    isAdmin={isAdmin}
                    onEdit={openEditDialog}
                    onDelete={openDeleteDialog}
                    onCreateApplication={openCreateApplicationDialog}
                    onCreateNew={() => dispatch(setShowCreateDialog(true))}
                />
            )}

            {showCreateDialog && (
                <CreateDegreeCourseForm
                    createForm={createForm}
                    onFormChange={handleCreateFormChange}
                    onSubmit={handleCreateDegreeCourse}
                    onCancel={() => dispatch(setShowCreateDialog(false))}
                />
            )}

            {showEditDialog && selectedDegreeCourse && (
                <EditDegreeCourseForm
                    editForm={editForm}
                    onFormChange={handleEditFormChange}
                    onSubmit={handleUpdateDegreeCourse}
                    onCancel={() => dispatch(setShowEditDialog(false))}
                />
            )}

            <DeleteDegreeCourseDialog
                degreeCourse={selectedDegreeCourse}
                show={showDeleteDialog}
                onConfirm={handleDeleteDegreeCourse}
                onCancel={() => dispatch(setShowDeleteDialog(false))}
            />

            <CreateApplicationDialog
                degreeCourse={selectedDegreeCourseForApplication}
                show={showCreateApplication}
                isAdmin={isAdmin}
                applicationForm={applicationForm}
                onFormChange={handleApplicationFormChange}
                onSubmit={handleCreateApplication}
                onCancel={() => setShowCreateApplication(false)}
            />
        </div>
    );
}

export default DegreeCourseManagementPage;
