import { ArrowLeft } from "lucide-react";
import Logo from "../common/Logo";

const PageHeader = ({ pageTitle }: { pageTitle: string }) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button
            className="w-5 h-5 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
            onClick={goBack}
          >
            <ArrowLeft />
          </button>

          <div className="text-sm md:text-xl font-semibold text-gray-900 tracking-tight">
            {pageTitle}
          </div>
        </div>

        <div className="flex items-center">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
