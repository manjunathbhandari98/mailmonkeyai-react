/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
import { getRecentEmails } from "../../services/emailService";
import Button from "../common/Button";
import Loader from "../common/Loader/Loader";

const RecentEmails = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [recentEmails, setRecentEmails] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        setLoading(true);
        const res = await getRecentEmails();
        setRecentEmails(res.data);
      } catch (error) {
        console.log(error);
        toast.show("error", "Failed to load recent emails");
      } finally {
        setLoading(false);
      }
    };
    fetchRecent();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-full my-12 sm:my-20 px-2 sm:px-6 mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
          Recent Emails
        </h2>

        <button
          className="text-blue-600 font-semibold hover:underline cursor-pointer text-sm sm:text-base self-start sm:self-auto"
          onClick={() => navigate("/history")}
        >
          View All
        </button>
      </div>

      {/* If empty */}
      {recentEmails.length === 0 && (
        <p className="text-gray-500 text-sm">No recent emails found.</p>
      )}

      {/* Emails List */}
      <div className="flex flex-col gap-4">
        {recentEmails.map((email) => (
          <div
            key={email.id}
            className="bg-white border border-gray-200 p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div className="flex flex-col gap-1 w-full">
                {/* Title + Tone */}
                <div className="flex flex-wrap gap-2 items-center">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                    {email.subject}
                  </h2>

                  <span className="px-2 py-1 text-[10px] sm:text-xs rounded-lg bg-blue-100 text-blue-600 font-medium">
                    {email.tone}
                  </span>
                </div>

                {/* Preview */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {email.content.slice(0, 120)}...
                </p>

                {/* Time */}
                <p className="text-gray-400 text-xs mt-1 sm:mt-2">
                  {email.createdAt ? email.createdAt : "Recent"}
                </p>
              </div>

              {/* View Button */}
              <Button
                label="View"
                customClass="px-4 py-2 text-sm w-full sm:w-auto"
                variant="ghost"
                onClick={() => navigate(`/history/view/${email.id}`)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentEmails;
