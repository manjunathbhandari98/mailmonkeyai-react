import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";
import AppLayout from "../components/layout/AppLayout";
import PublicLayout from "../components/layout/PublicLayout";
import TemplatePreview from "../pages/Templates/TemplatePreview";
import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const ForgotPassword = lazy(() => import("../pages/Auth/ForgetPassword"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const EmailGenerator = lazy(() => import("../pages/Generator/EmailGenerator"));
const ImproveEmail = lazy(() => import("../pages/Improve/EmailImprover"));
const Templates = lazy(() => import("../pages/Templates/Templates"));
const History = lazy(() => import("../pages/History/History"));
const Settings = lazy(() => import("../pages/Settings/Settings"));
const NotFound = lazy(() => import("../pages/NotFound"));

// AppRoutes.tsx
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <PublicRoute>
                  <ForgotPassword />
                </PublicRoute>
              }
            />
          </Route>

          {/* Protected Routes - Changed structure */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/generate-email" element={<EmailGenerator />} />
              <Route path="/improve-email" element={<ImproveEmail />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/history" element={<History />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/templates/:id" element={<TemplatePreview />} />
            </Route>
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
