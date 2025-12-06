import {
  ArrowDown,
  Clock,
  FileText,
  SlidersHorizontal,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import FeatureCard from "../../../components/common/FeatureCard";

const Features = () => {
  const featureSection = {
    heading: "Everything You Need to Communicate Better",
    subheading:
      "Powerful features designed for professionals who value their time",
    features: [
      {
        icon: <Sparkles />,
        title: "Smart Email Generator",
        description:
          "AI-powered email creation tailored to your context and tone",
      },
      {
        icon: <WandSparkles />,
        title: "Improve Existing Emails",
        description:
          "Polish and refine your drafts with intelligent suggestions",
      },
      {
        icon: <SlidersHorizontal />,
        title: "Tone & Style Control",
        description: "Choose from professional, casual, friendly, and more",
      },
      {
        icon: <FileText />,
        title: "Ready-Made Templates",
        description: "Pre-built templates for every business scenario",
      },
      {
        icon: <Clock />,
        title: "Email History & Versioning",
        description: "Track all versions and changes to your emails",
      },
      {
        icon: <ArrowDown />,
        title: "Export to PDF / Copy",
        description: "Seamless integration with your workflow",
      },
    ],
  };

  return (
    <div className="my-5 md:my-20 p-2 max-w-6xl mx-auto">
      <h1 className="text-xl md:text-5xl font-extrabold text-center">
        {featureSection.heading}
      </h1>
      <h4 className="text-xs md:text-lg md:font-semibold text-center my-5 text-gray-500">
        {featureSection.subheading}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 md:mt-20 max-w-6xl w-full px-4">
        {featureSection.features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            iconBg="linear-gradient(to bottom right, #6366f1, #3b82f6)"
            customClass="p-8"
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
