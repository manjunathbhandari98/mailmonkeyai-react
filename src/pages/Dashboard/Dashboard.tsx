import { Clock, FileText, Mail, Users } from "lucide-react";
import FeatureCard from "../../components/common/FeatureCard";
import Loader from "../../components/common/Loader/Loader";
import QuickActions from "../../components/features/QuickActions";
import RecentEmails from "../../components/features/RecentEmails";
import AuthNavbar from "../../components/layout/AuthNavbar";
import { useAppSelector } from "../../store/hook";
import type { RootState } from "../../store/store";

const Dashboard = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const loading = useAppSelector((state: RootState) => state.auth.loading);

  const analytics = [
    {
      icon: <Mail />,
      value: 127,
      label: "Emails Generated",
    },
    {
      icon: <Clock />,
      value: "24h",
      label: "Time Saved",
    },
    {
      icon: <FileText />,
      value: 18,
      label: "Templates Used",
    },
    {
      icon: <Users />,
      value: 5,
      label: "Team Members",
    },
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <AuthNavbar />

      <div className="pt-10 md:pt-24 w-full md:max-w-7xl mx-auto bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-extrabold">
          Welcome back, {user?.fullName}
        </h2>
        <h4 className="text-sm md:text-lg md:font-medium mt-3 text-gray-600">
          Ready to create amazing emails?
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20 w-full justify-between px-4">
          {analytics.map((stat, idx) => (
            <FeatureCard
              key={idx}
              count={stat.value}
              label={stat.label}
              icon={stat.icon}
              iconBg="linear-gradient(to bottom right, #6366f1, #3b82f6)"
            />
          ))}
        </div>
        <QuickActions />
        <RecentEmails />
      </div>
    </>
  );
};

export default Dashboard;
