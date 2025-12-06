import { ArrowRight } from "lucide-react";
import Button from "../../../components/common/Button";

const Hero = () => {
  function goToLogin(): void {
    throw new Error("Function not implemented.");
  }

  const Stats = [
    {
      label: "Emails Generated",
      value: "1M+",
      description: "Over one million emails generated for users worldwide.",
    },
    {
      label: "Active Users",
      value: "50K+",
      description: "Join a thriving community of over 50,000 active users.",
    },
    {
      label: "5-Star Reviews",
      value: "10K+",
      description: "Highly rated by over 10,000 satisfied users.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 text-center py-10">
      <div className="flex flex-col items-center gap-3 mb-8">
        <img
          src="/logo.png"
          alt="logo"
          className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow"
        />

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="text-blue-600">Mail</span>Monkey AI
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold mt-3 sm:mt-5 px-4">
          Write Perfect Emails{" "}
          <span className="text-blue-600">in Seconds with AI</span>
        </h2>

        <p className="text-gray-600 text-base sm:text-lg max-w-xl px-3">
          Generate perfect emails in just seconds. Smart. Fast. Professional.
        </p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        <Button
          label="Generate Email Now"
          iconPosition="right"
          icon={<ArrowRight />}
          customClass="px-6 py-3 w-full sm:w-auto text-base"
          onClick={goToLogin}
        />

        <Button
          label="Try Demo"
          variant="outline"
          customClass="px-6 py-3 w-full sm:w-auto text-base"
          onClick={goToLogin}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 max-w-6xl w-full px-3">
        {Stats.map((stat, index: number) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow border border-gray-100 
               hover:shadow-xl hover:border-gray-200 transition-all flex flex-col text-left"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 drop-shadow-sm">
              {stat.value}
            </h1>

            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mt-2 tracking-tight">
              {stat.label}
            </h2>

            <p className="text-sm text-gray-500 mt-1 max-w-xs">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
