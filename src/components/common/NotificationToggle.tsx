const NotificationToggle = ({
  title,
  description,
  value,
  onChange,
}: {
  title: string;
  description: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
      {/* Left Text */}
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-gray-600 text-sm">{description}</span>
      </div>

      {/* Toggle */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />

        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer-checked:bg-blue-600 transition"></div>

        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition shadow"></div>
      </label>
    </div>
  );
};

export default NotificationToggle;
