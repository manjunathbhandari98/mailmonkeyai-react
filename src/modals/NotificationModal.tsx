import { AlertCircle, CheckCircle, Info, X } from "lucide-react";

type Notification = {
  id: number;
  type: "success" | "error" | "info";
  message: string;
  time: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
};

const NotificationModal = ({ isOpen, onClose, notifications }: Props) => {
  if (!isOpen) return null;

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle className="text-green-500" />;
      case "error":
        return <AlertCircle className="text-red-500" />;
      default:
        return <Info className="text-blue-500" />;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-start justify-end p-5 z-[999]"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-5 animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        {/* Notification List */}
        <div className="mt-4 max-h-96 overflow-y-auto space-y-4 pr-2">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-sm text-center py-10">
              No new notifications
            </p>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                className="flex items-start gap-3 p-3 border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <div className="p-2 bg-gray-100 rounded-full">
                  {getIcon(n.type)}
                </div>

                <div className="flex flex-col">
                  <p className="text-gray-800 text-sm">{n.message}</p>
                  <span className="text-xs text-gray-400 mt-1">{n.time}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
