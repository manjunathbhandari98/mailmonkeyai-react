import { Clock, FileText, Mail, SquarePen } from "lucide-react";
import FeatureCard from "../common/FeatureCard";

const QuickActions = () => {
  const quickActions = [
    {
      title: "Generate New Email",
      description: "Create a perfect email from scratch with AI",
      icon: <Mail />,
      gradient: "linear-gradient(135deg, #7F00FF, #E100FF)",
      link: "/generate-email",
    },
    {
      title: "Improve Email",
      description: "Polish and enhance your existing drafts",
      icon: <SquarePen />,
      gradient: "linear-gradient(135deg, #FF00A8, #FF4D4D)",
      link: "/improve-email",
    },
    {
      title: "Browse Templates",
      description: "Start with professional templates",
      icon: <FileText />,
      gradient: "linear-gradient(135deg, #00C97A, #00E8A1)",
      link: "/templates",
    },
    {
      title: "Email History",
      description: "View and manage previous emails",
      icon: <Clock />,
      gradient: "linear-gradient(135deg, #FF6A00, #FF3D00)",
      link: "/history",
    },
    // {
    //   title: "Team Workspace",
    //   description: "Collaborate with your team",
    //   icon: <Users/>,
    //   gradient: "linear-gradient(135deg, #005CFF, #3A8DFF)",
    //   link:'team-workspace'
    // }
  ];

  return (
    <div className="w-full my-20 px-6">
      <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {quickActions.map((action, index) => (
          <FeatureCard
            key={index}
            title={action.title}
            description={action.description}
            icon={action.icon}
            iconBg={action.gradient}
            link={action.link}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
