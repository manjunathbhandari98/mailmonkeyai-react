import { useEffect } from "react";
import Loader from "./components/common/Loader/Loader";
import AppRoutes from "./routes/AppRoutes";
import { getProfileInfo } from "./services/authService";
import { clearUser, setUser } from "./store/auth.slice";
import { useAppDispatch, useAppSelector } from "./store/hook";

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        dispatch(clearUser());
        return;
      }

      try {
        const profile = await getProfileInfo();
        dispatch(setUser(profile));
      } catch (err) {
        console.error("App: Failed to fetch profile:", err);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(clearUser());
      }
    };

    initializeAuth();
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return <AppRoutes />;
}

export default App;
