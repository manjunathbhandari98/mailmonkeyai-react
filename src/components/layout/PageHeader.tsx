import Logo from "../common/Logo";

const PageHeader = () => {
  const pageTitle = "Welcome to MailMonkeyAI";
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          {/* <button
        className="w-5 h-5 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
        (click)="goBack()">
        <ng-icon name="heroArrowLeft" className="w-5 h-5 text-gray-600"></ng-icon>
      </button> */}

          <h2 className="text-sm md:text-xl font-semibold text-gray-900 tracking-tight">
            {pageTitle}
          </h2>
        </div>

        <div className="flex items-center">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
