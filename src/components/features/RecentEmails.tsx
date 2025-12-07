import Button from "../common/Button";

const RecentEmails = () => {
  const recentEmails = [
    {
      title: "Job Application Follow-up",
      tone: "Professional",
      preview: "Thank you for considering my application...",
      time: "2 hours ago",
    },
    {
      title: "Project Proposal",
      tone: "Business",
      preview: "I'm excited to present our proposal for...",
      time: "5 hours ago",
    },
    {
      title: "Client Meeting Request",
      tone: "Formal",
      preview: "I would like to schedule a meeting to discuss...",
      time: "Yesterday",
    },
  ];

  return (
    <div className="w-full my-12 sm:my-20 px-2 sm:px-6 mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
          Recent Emails
        </h2>

        <button className="text-blue-600 font-semibold hover:underline cursor-pointer text-sm sm:text-base self-start sm:self-auto">
          View All
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {recentEmails.map((email, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-wrap gap-2 items-center">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                    {email.title}
                  </h2>

                  <span className="px-2 py-1 text-[10px] sm:text-xs rounded-lg bg-blue-100 text-blue-600 font-medium">
                    {email.tone}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {email.preview}
                </p>

                <p className="text-gray-400 text-xs mt-1 sm:mt-2">
                  {email.time}
                </p>
              </div>

              <Button
                label="View"
                customClass="px-4 py-2 text-sm w-full sm:w-auto"
                variant="ghost"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentEmails;
