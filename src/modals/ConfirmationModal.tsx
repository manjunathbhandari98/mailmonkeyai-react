import Button from "../components/common/Button";

type ConfirmModalProps = {
  isOpen: boolean;
  title?: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "primary" | "warning";
  onConfirm: () => void;
  onClose: () => void;
};

const ConfirmationModal = ({
  isOpen,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onClose,
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-sm w-full rounded-2xl shadow-xl p-6 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h2 className="text-xl font-bold text-center text-gray-900">{title}</h2>

        {/* Message */}
        <p className="text-gray-600 text-sm text-center mt-2 leading-relaxed">
          {message}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <Button
            label={cancelLabel}
            variant="outline"
            customClass="w-full py-2.5"
            onClick={onClose}
          />
          <Button
            label={confirmLabel}
            variant="danger"
            customClass="w-full py-2.5"
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
