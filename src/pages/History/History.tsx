/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowDown, FileText, Search, WandSparkles } from "lucide-react";
import { useState } from "react";
import Button from "../../components/common/Button";
import PageHeader from "../../components/layout/PageHeader";
import ViewEmailModal from "./ViewEmailModal";

const History = () => {
  const emailHistory = [
    {
      id: "HIST-001",
      title: "Job Application Follow-up",
      type: "Job Application",
      tone: "Professional",
      preview: "Thank you for considering my application...",
      content: `Dear Hiring Manager,

I hope you're doing well. I wanted to follow up regarding my application for the Software Developer role.

I remain very enthusiastic about the opportunity and would be happy to provide any additional details if needed.

Thank you for your time.

Best regards,
John Doe`,
      createdAt: "2025-02-21T10:15:00Z",
      updatedAt: "2025-02-21T10:20:00Z",
      status: "saved",
      wordCount: 83,
      charCount: 451,
      version: 1,
      tags: ["follow-up", "job"],
      actions: ["copy", "download", "view", "regenerate"],
    },

    {
      id: "HIST-002",
      title: "Client Meeting Request",
      type: "Business Communication",
      tone: "Formal",
      preview: "I would like to schedule a meeting to discuss...",
      content: `Hello,

I would like to schedule a meeting to discuss the ongoing requirements and next steps of the project.

Please let me know your availability this week.

Regards,
John Doe`,
      createdAt: "2025-02-20T15:42:00Z",
      updatedAt: "2025-02-20T15:55:00Z",
      status: "sent",
      wordCount: 55,
      charCount: 312,
      version: 2,
      tags: ["client", "meeting"],
      actions: ["copy", "download", "view"],
    },

    {
      id: "HIST-003",
      title: "Project Proposal Summary",
      type: "Proposal",
      tone: "Business",
      preview: "I'm excited to present our proposal for...",
      content: `Dear Team,

I'm excited to present our proposal for the Q2 upgrade initiative.  
This proposal outlines the plan, delivery timeline, and budget estimation.

Looking forward to your feedback.

Best,
John Doe`,
      createdAt: "2025-02-19T08:30:00Z",
      updatedAt: "2025-02-19T08:43:00Z",
      status: "saved",
      wordCount: 62,
      charCount: 345,
      version: 1,
      tags: ["proposal", "project"],
      actions: ["copy", "download", "view", "regenerate"],
    },

    {
      id: "HIST-004",
      title: "Customer Support Response",
      type: "Support",
      tone: "Polite",
      preview: "Thank you for contacting our support team...",
      content: `Hello,

Thank you for contacting our support team.  
We have received your query and our technical team is investigating the issue.

We will update you within the next 24 hours.

Kind regards,
Support Team`,
      createdAt: "2025-02-18T11:12:00Z",
      updatedAt: "2025-02-18T11:15:00Z",
      status: "sent",
      wordCount: 64,
      charCount: 320,
      version: 1,
      tags: ["support", "customer"],
      actions: ["copy", "view"],
    },

    {
      id: "HIST-005",
      title: "Marketing Outreach Email",
      type: "Marketing",
      tone: "Friendly",
      preview: "Hope you're doing well! We're excited to share...",
      content: `Hi there,

Hope you’re doing well! We’re excited to share a new opportunity that we believe you'll find valuable.

Let us know if you'd like more details.

Cheers,
Marketing Team`,
      createdAt: "2025-02-17T09:00:00Z",
      updatedAt: "2025-02-17T09:02:00Z",
      status: "draft",
      wordCount: 55,
      charCount: 301,
      version: 3,
      tags: ["marketing", "outreach"],
      actions: ["copy", "download", "view", "regenerate"],
    },
  ];

  const handleCopy = (item: any) => {
    navigator.clipboard.writeText(item.content);
    alert("Email content copied to clipboard!");
  };

  const handleDownload = (item: any) => {
    const element = document.createElement("a");
    const file = new Blob([item.content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${item.title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const [selectedEmail, setSelectedEmail] = useState<any>(null);

  const handleView = (item: any) => {
    setSelectedEmail(item);
  };

  const closeModal = () => {
    setSelectedEmail(null);
  };

  const handleRegenerate = (item: any) => {
    alert(`Regenerating email: ${item.title}`);
  };
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
               hover:bg-gray-50 transition"
                  >
                    {/* LEFT */}
                    <div className="flex flex-col gap-2 md:w-2/3">
                      {/* Title + Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                          {item.title}
                        </h3>

                        <span className="px-2 py-[3px] rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          {item.type}
                        </span>

                        <span className="px-2 py-[3px] rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {item.tone}
                        </span>
                      </div>

                      {/* Preview */}
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.preview}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center flex-wrap gap-4 mt-1 text-[11px] sm:text-xs text-gray-500">
                        <span>{item.wordCount} words</span>
                        <span>{item.charCount} chars</span>
                        <span>Version {item.version}</span>
                        <span className="hidden sm:inline text-gray-400">
                          •
                        </span>
                        <span>{item.createdAt}</span>
                      </div>
                    </div>

                    {/* RIGHT: Actions */}
                    <div
                      className="flex items-center gap-4 sm:gap-5 self-end md:self-center 
                    text-gray-500 text-sm"
                    >
                      <FileText onClick={() => handleCopy(item)} />
                      <ArrowDown onClick={() => handleDownload(item)} />
                      <WandSparkles
                        onClick={() => {
                          handleRegenerate(item);
                        }}
                      />

                      <Button
                        label="View"
                        onClick={() => {
                          handleView(item);
                        }}
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
            downloadEmail={() => handleDownload(selectedEmail)}
            saveEmail={() => alert("Save email functionality")}
            regenerate={() => handleRegenerate(selectedEmail)}
            handleRegenerate={() =>
              alert(`Using email: ${selectedEmail.title}`)
            }
          />
        )}
      </div>
    </>
  );
};

export default History;
