import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

function UserManagementPage() {
    const isAdmin = useSelector((state: RootState) => state.authentication.isLoggedIn);

    if (!isAdmin) return null;

    return (
        <div id="UserManagementPage">
            <div>
                <h1>User Management Page</h1>
            </div>
        </div>
    );
}

export default UserManagementPage;
