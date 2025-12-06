import clsx from "clsx";
import React from "react";

type ButtonProps = {
  label?: string;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  icon?: React.ReactNode; // SVG, image, or JSX
  iconPosition?: "left" | "right";
  customClass?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  label,
  loading = false,
  loadingText = "Loading...",
  disabled = false,
  variant = "primary",
  icon,
  iconPosition = "left",
  customClass = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const variantClasses = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed",
    secondary:
      "bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200",
    outline:
      "bg-white border border-gray-300 font-semibold text-black hover:bg-gray-100 disabled:bg-gray-200 disabled:cursor-not-allowed",
    ghost:
      "bg-gray-100 border border-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white text-sm",
    danger:
      "bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white text-sm",
  };

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center gap-2 rounded-xl transition cursor-pointer px-4 py-2",
        variantClasses[variant],
        customClass
      )}
    >
      {/* LEFT ICON (only if not loading) */}
      {!loading && icon && iconPosition === "left" && (
        <span className="w-5 h-5 flex items-center">{icon}</span>
      )}

      {/* LABEL / LOADING */}
      <span>
        {loading ? (
          <span className="flex items-center gap-2">
            {/* Spinner */}
            <svg
              className="animate-spin w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="4"
              />
              <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {loadingText}
          </span>
        ) : (
          label
        )}
      </span>

      {/* RIGHT ICON (only if not loading) */}
      {!loading && icon && iconPosition === "right" && (
        <span className="w-5 h-5 flex items-center">{icon}</span>
      )}
    </button>
  );
}
