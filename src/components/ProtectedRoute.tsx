import AdminLayout from "@/layout/admin/AdminLayout";
import { selectIsAuthenticated } from "@/store/redux/slices/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    return isAuthenticated ? <AdminLayout /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;