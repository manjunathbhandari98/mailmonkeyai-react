import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";

import type { ToastMessage } from "../../../types";
import "./Toast.css";

const ToastContainer = ({ toasts }: { toasts: ToastMessage[] }) => {
  const getIcon = (type: ToastMessage["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle className="text-green-600 w-5 h-5" />;
      case "error":
        return <XCircle className="text-red-600 w-5 h-5" />;
      case "warning":
        return <AlertTriangle className="text-yellow-600 w-5 h-5" />;
      default:
        return <Info className="text-blue-600 w-5 h-5" />;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-500">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-lg border border-gray-200
          animate-slide-up w-max"
        >
          {getIcon(t.type)}
          <p className="text-gray-800 text-sm font-medium">{t.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
