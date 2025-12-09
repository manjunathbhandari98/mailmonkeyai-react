// ProtectedRoutes.tsx
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";
import { useAppSelector } from "../store/hook";

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAppSelector((s) => s.auth);

  if (loading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Changed from children to Outlet
}
