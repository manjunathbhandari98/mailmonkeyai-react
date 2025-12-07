import { Bell, Settings } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NotificationModal from "../../modals/NotificationModal";
import { useAppSelector } from "../../store/hook";
import type { RootState } from "../../store/store";
import Button from "../common/Button";
import Logo from "../common/Logo";

const AuthNavbar = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state: RootState) => state.auth.user);

  const navigateToGeneration = () => {
    navigate("/generate-email");
  };

  const getInitials = () => {
    if (!user?.fullName) return "";
    return user.fullName
      .split(" ")
      .map((n) => n.charAt(0).toUpperCase())
      .join("");
  };

  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      type: "success" as const,
      message: "Your email was generated successfully!",
      time: "2 min ago",
    },
    {
      id: 2,
      type: "info" as const,
      message: "A new template pack is available.",
      time: "1 hr ago",
    },
    {
      id: 3,
      type: "error" as const,
      message: "Payment failed — update billing info.",
      time: "3 hr ago",
    },
  ];

  return (
    <>
      <div className="hidden md:flex justify-between items-center p-3 fixed top-0 left-0 w-full z-50 bg-white">
        <Link to="/dashboard">
          <Logo />
        </Link>

        <div className="flex items-center gap-7">
          <Button
            label="Generate"
            onClick={navigateToGeneration}
            customClass="!py-2 !px-4"
          />

          {/* Open Notifications Modal */}
          <Bell
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setShowNotifications(true)}
          />

          <Settings
            className="cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/settings")}
          />

          <div className="flex gap-2 ml-5 items-center">
            <div className="p-2 w-10 h-10 text-center rounded-full bg-blue-500 text-white uppercase">
              {getInitials()}
            </div>

            <div className="flex flex-col text-sm">
              <h2 className="font-semibold">{user?.fullName}</h2>
              <p className="text-xs text-gray-800">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Modal */}
      {showNotifications == true && (
        <NotificationModal
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
          notifications={notifications}
        />
      )}
    </>
  );
};

export default AuthNavbar;
