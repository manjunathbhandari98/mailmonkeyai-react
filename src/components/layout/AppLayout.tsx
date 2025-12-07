import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getProfileInfo } from "../../services/authService";
import { setLoading, setUser } from "../../store/auth.slice";
import { useAppDispatch } from "../../store/hook";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadUser = async () => {
      dispatch(setLoading(true));

      try {
        const user = await getProfileInfo();
        dispatch(setUser(user));
      } catch (err) {
        console.error("Failed to load user", err);
        dispatch(setLoading(false));
      }
    };

    loadUser();
  }, [dispatch]);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        {/* <PageHeader /> */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
