import Button from "../components/common/Button";

type ConfirmModalProps = {
  onClose: () => void;
  onLogout: () => void;
};

const ConfirmationModal = ({ onClose, onLogout }: ConfirmModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-sm w-full rounded-2xl shadow-xl p-6 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        {/* <div className="flex justify-center mb-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 9v4m0 4h.01M4.93 4.93l14.14 14.14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div> */}

        {/* Title */}
        <h2 className="text-xl font-bold text-center text-gray-900">
          Logout Confirmation
        </h2>

        {/* Message */}
        <p className="text-gray-600 text-sm text-center mt-2">
          Are you sure you want to logout? You'll need to sign in again to
          continue.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <Button
            label="Cancel"
            variant="outline"
            customClass="w-full py-2.5"
            onClick={onClose}
          />
          <Button
            label="Logout"
            variant="danger"
            customClass="w-full py-2.5"
            onClick={onLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
