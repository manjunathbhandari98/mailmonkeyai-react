import Button from "../../components/common/Button";
import type { EmailType } from "../../types";

type EmailModalProps = {
  email: EmailType;
  onClose: () => void;
  copyEmail: () => void;
};

const ViewEmailModal = ({ email, onClose, copyEmail }: EmailModalProps) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-400"
        onClick={onClose}
      >
        {/* Modal Box */}
        <div
          className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-6 animate-fadeIn scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-start border-b pb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {email.subject}
              </h1>

              <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                <span>{email.type}</span>
                <span className="text-gray-400">•</span>
                <span>{email.tone}</span>
                <span className="text-gray-400">•</span>
                <span>{email.createdAt}</span>
              </div>
            </div>

            <Button
              label="x"
              onClick={onClose}
              customClass="p-2 !w-6 !h-6 !text-lg !rounded-full !text-center"
              variant="secondary"
            />
          </div>

          {/* Action Toolbar */}
          <div className="flex  mt-4 border-b pb-3">
            <Button
              label="Copy Email"
              onClick={copyEmail}
              customClass="px-4 py-2 flex-end"
            />
          </div>

          {/* Email Content */}
          <div className="mt-6 max-h-[60vh] overflow-y-auto pr-2">
            {/* Subject */}
            <p className="text-sm text-gray-700 mb-2 font-semibold">
              Subject: <span className="font-normal">{email.subject}</span>
            </p>

            <div className="border border-gray-200 rounded-xl p-4 bg-white">
              <pre className="whitespace-pre-wrap font-[Roboto_Serif] text-[15px] leading-7 text-gray-800">
                {email.content}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewEmailModal;
