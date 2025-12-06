import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

type FeatureCardProps = {
  title?: string;
  description?: string;
  count?: string | number;
  label?: string;
  icon?: React.ReactNode; // SVG or icon component
  iconBg?: string;
  link?: string;
  customClass?: string;
};

export default function FeatureCard({
  title,
  description,
  count,
  label,
  icon,
  iconBg = "#2563eb", // default blue
  link,
  customClass = "",
}: FeatureCardProps) {
  const Wrapper = link ? Link : "div";

  return (
    <Wrapper
      to={link || ""}
      className={clsx(
        "bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm",
        "hover:shadow-xl transition-all group relative w-full",
        link && "cursor-pointer",
        customClass
      )}
    >
      <div className="relative flex flex-col gap-3 sm:gap-4">
        {/* ICON BOX */}
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white shadow-md
                     group-hover:scale-105 transition-transform duration-300"
          style={{ background: iconBg }}
        >
          {/* Icon (React Node) */}
          <span className="w-5 h-5 flex items-center justify-center text-white">
            {icon}
          </span>
        </div>

        {/* CONTENT AREA */}
        <div>
          {/* Title */}
          {title && (
            <h3 className="font-semibold text-base sm:text-lg text-gray-900 leading-snug">
              {title}
            </h3>
          )}

          {/* Stats Count */}
          {count && (
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mt-1">
              {count}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="text-gray-600 text-sm sm:text-[15px] mt-2 leading-relaxed">
              {description}
            </p>
          )}

          {/* Stats Label */}
          {label && (
            <p className="text-gray-600 text-sm sm:text-[15px] mt-2 leading-relaxed">
              {label}
            </p>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
