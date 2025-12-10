/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader/Loader";
import PageHeader from "../../components/layout/PageHeader";
import { useToast } from "../../hooks/useToast";
import ConfirmationModal from "../../modals/ConfirmationModal";
import { deleteHisotry, getHistory } from "../../services/historyService";
import type { EmailHistory } from "../../types";
import ViewEmailModal from "./ViewEmailModal";

const History = () => {
  const toast = useToast();
  const [emailHistory, setEmailHistory] = useState<EmailHistory[]>([]);
  const [showPopupModal, setShowPopupModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteEmailId, setDeleteEmailId] = useState("");
  const [selectedEmail, setSelectedEmail] = useState<any>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const res = await getHistory();
        setEmailHistory(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const handleCopy = (item: any) => {
    navigator.clipboard.writeText(item.content);
    toast.show("info", "Content Copied Successfully");
  };

  const openConfimationModal = () => {
    setShowPopupModal(true);
  };

  const closeConfirmationModla = () => {
    setShowPopupModal(false);
  };

  const onDeleteSelect = (id: string) => {
    setDeleteEmailId(id);
    openConfimationModal();
  };

  const handleView = (item: any) => {
    setSelectedEmail(item);
  };

  const closeModal = () => {
    setSelectedEmail(null);
  };

  const handleDelete = async (itemId: string) => {
    if (!deleteEmailId) return;
    try {
      await deleteHisotry(itemId);
      setEmailHistory((prev) => prev.filter((email) => email.id !== itemId));
      toast.show("success", "Email deleted Successfully");
      closeConfirmationModla();
    } catch (error) {
      console.log(error);
      toast.show("error", "Failed to delete email");
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (emailHistory)
    return (
      <>
        <PageHeader pageTitle="Email History" />
        <div>
          <div className="pt-16 sm:pt-20 md:pt-28 max-w-7xl mx-auto px-4">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Your Email History
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm">
                  View, download or reuse your previously generated emails
                </p>
              </div>

              <Button
                label="Clear History"
                customClass="px-4 py-2 !text-sm w-full sm:w-auto"
              />
            </div>

            {/* Search Bar */}
            <div
              className="bg-white border border-gray-200 rounded-xl p-3 mb-6 
              flex items-center gap-3 shadow-sm"
            >
              <Search />
              <input
                type="text"
                className="w-full bg-transparent outline-none text-sm"
                placeholder="Search emails..."
              />
            </div>

            {/* History List */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm divide-y divide-gray-100">
              {emailHistory.map((item, idx) => {
                return (
                  <>
                    <div
                      key={idx}
                      className="p-5 flex flex-col md:flex-row justify-between gap-5 
               hover:bg-gray-50 transition bg-gray-100 my-2"
                    >
                      {/* LEFT */}
                      <div className="flex flex-col gap-2 md:w-2/3">
                        {/* Title + Tags */}
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                            {item.subject}
                          </h3>

                          <span className="px-2 py-[3px] rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            {item.type}
                          </span>

                          <span className="px-2 py-[3px] rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                            {item.tone}
                          </span>
                        </div>

                        {/* Preview */}
                        {/* <p className="text-sm text-gray-600 line-clamp-2">
                        {item.c}
                      </p> */}

                        {/* Meta */}
                        <div className="flex items-center flex-wrap gap-4 mt-1 text-[11px] sm:text-xs text-gray-500">
                          {/* <span>{item.wordCount} words</span>
                        <span>{item.charCount} chars</span>
                        <span>Version {item.version}</span> */}
                          <span className="hidden sm:inline text-gray-400">
                            •
                          </span>
                          <span>{item.createdAt}</span>
                        </div>
                      </div>

                      {/* RIGHT: Actions */}
                      <div
                        className="flex items-center gap-3 sm:gap-4 
             text-gray-600 text-sm 
             self-end md:self-center"
                      >
                        {/* Delete Icon */}
                        <button
                          onClick={() => {
                            onDeleteSelect(item.id);
                          }}
                          className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <Trash
                            size={18}
                            className="text-red-500 hover:text-red-600 transition-colors"
                          />
                        </button>

                        {/* View Button */}
                        <Button
                          label="View"
                          onClick={() => handleView(item)}
                          variant="ghost"
                          customClass="px-4 py-1.5 text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          {selectedEmail && (
            <ViewEmailModal
              email={selectedEmail}
              onClose={closeModal}
              copyEmail={() => handleCopy(selectedEmail)}
            />
          )}

          <ConfirmationModal
            isOpen={showPopupModal}
            title="Delete Confirmation"
            message="Are you sure you want to delete this email?"
            confirmLabel="Delete"
            variant="danger"
            onConfirm={() => handleDelete(deleteEmailId)}
            onClose={closeConfirmationModla}
          />
        </div>
      </>
    );
};

export default History;
