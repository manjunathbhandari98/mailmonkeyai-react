import { Bookmark, Heart } from "lucide-react";
import Button from "../common/Button";

type TemplateCardProps = {
  title: string;
  categoryName: string;
  tone: string;
  preview: string;
  likes: number;
};

const TemplateCard = ({
  title,
  categoryName,
  tone,
  preview,
  likes,
}: TemplateCardProps) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm min-h-64
               hover:shadow-lg hover:border-blue-500 transition-all cursor-pointer flex flex-col gap-4"
    >
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 leading-tight">
        {title}
      </h2>

      {/* Badges */}
      <div className="flex gap-2 text-xs font-medium">
        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600">
          {categoryName}
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
          {tone}
        </span>
      </div>

      {/* Preview */}
      <p className="text-gray-600 text-sm leading-6 line-clamp-4 border-t border-gray-100 pt-3">
        {preview}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-200">
        {/* Likes */}
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <Heart />
          {likes}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Save */}
          <button className="p-2 rounded-lg cursor-pointer w-8 h-8 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
            <Bookmark />
          </button>

          {/* Use Template */}

          <Button label="Use Template" customClass="px-4 py-2 !text-sm" />
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
