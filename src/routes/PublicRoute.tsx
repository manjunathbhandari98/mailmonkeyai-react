import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";
import { useAppSelector } from "../store/hook";

export default function PublicRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated, loading } = useAppSelector((s) => s.auth);

  if (loading) {
    return <Loader />;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
