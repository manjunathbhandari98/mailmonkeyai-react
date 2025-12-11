/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowLeft, Bookmark, Copy, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader/Loader";
import PageHeader from "../../components/layout/PageHeader";
import { useToast } from "../../hooks/useToast";
import {
  bookmarkTemplate,
  getTemplateById,
  likeTemplate,
} from "../../services/templateService";

const TemplatePreview = () => {
  const { id } = useParams(); // template ID from URL
  const navigate = useNavigate();
  const toast = useToast();

  const [template, setTemplate] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isBookmarking, setIsBookmarking] = useState(false);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        setLoading(true);
        const res = await getTemplateById(id as string);
        setTemplate(res.data);
      } catch (error) {
        console.error(error);
        toast.show("error", "Failed to load template");
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, []);

  const handleLike = async () => {
    if (!template || isLiking) return;

    try {
      setIsLiking(true);

      // Optimistic toggle
      setTemplate((prev: any) =>
        prev
          ? {
              ...prev,
              liked: !prev.liked,
              likes: prev.liked ? prev.likes - 1 : prev.likes + 1,
            }
          : prev
      );

      // Backend toggle
      const res = await likeTemplate(id as string);

      // Sync backend response (always safest)
      setTemplate(res.data);

      toast.show(
        "success",
        res.data.liked ? "Template liked!" : "Like removed"
      );
    } catch (error) {
      console.log(error);

      // Reverse optimistic update on failure
      setTemplate((prev: any) =>
        prev
          ? {
              ...prev,
              liked: !prev.liked,
              likes: prev.liked ? prev.likes - 1 : prev.likes + 1,
            }
          : prev
      );

      toast.show("error", "Failed to like template");
    } finally {
      setIsLiking(false);
    }
  };

  const handleBookmark = async () => {
    if (!template || isBookmarking) return; // Prevent double-clicks

    // Store the previous state for rollback
    const previousBookmarkedState = template.bookmarked;

    try {
      setIsBookmarking(true); // Lock the function

      // Optimistic toggle
      setTemplate((prev: any) =>
        prev
          ? {
              ...prev,
              bookMarked: !prev.bookMarked,
            }
          : prev
      );

      const res = await bookmarkTemplate(template.id);
      console.log(template);
      // Sync from backend - make sure to use the full template data
      setTemplate(res.data);

      toast.show(
        "success",
        res.data.bookMarked ? "Template bookmarked" : "Bookmark removed"
      );
    } catch (err) {
      console.log(err);

      // Reverse to the ORIGINAL state, not toggling again
      setTemplate((prev: any) =>
        prev
          ? {
              ...prev,
              bookMarked: previousBookmarkedState,
            }
          : prev
      );

      toast.show("error", "Failed to update bookmark");
    } finally {
      setIsBookmarking(false); // Unlock
    }
  };

  const handleCopy = () => {
    if (!template) return;

    const textToCopy = `Subject: ${template.subject}\n\n${template.content}`;
    navigator.clipboard.writeText(textToCopy);

    toast.show("success", "Template copied to clipboard");
  };

  if (loading) return <Loader />;

  if (!template)
    return (
      <div className="pt-28 text-center text-gray-600">Template not found.</div>
    );

  return (
    <>
      <PageHeader pageTitle="Template Preview" />

      <div className="pt-16 sm:pt-20 md:pt-28 max-w-4xl mx-auto px-4 pb-16">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* HEADER */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {template.title}
          </h1>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
              {template.type}
            </span>

            <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
              {template.tone}
            </span>

            <button
              onClick={handleLike}
              className={`flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full 
    ${template.liked ? "bg-pink-600 text-white" : "bg-pink-100 text-pink-700"}
  `}
            >
              <Heart
                size={14}
                fill={template.liked ? "white" : "none"}
                className={`${template.liked ? "scale-110" : ""}`}
              />
              {template.likes}
            </button>
          </div>

          {/* SUBJECT */}
          <div className="mt-6">
            <label className="font-medium text-gray-700">Subject</label>
            <input
              readOnly
              value={template.subject}
              className="w-full mt-1 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          {/* CONTENT */}
          <div className="mt-6">
            <label className="font-medium text-gray-700">Email Content</label>
            <div className="relative">
              {/* Copy Button */}
              <Copy
                onClick={handleCopy}
                size={18}
                className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-black transition"
              />

              <textarea
                readOnly
                rows={18}
                value={template.content}
                className="w-full p-4 text-sm leading-6 border border-gray-300 rounded-xl bg-gray-50"
              ></textarea>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              label="Copy Template"
              variant="outline"
              icon={<Copy size={16} />}
              customClass="w-full py-3"
              onClick={handleCopy}
            />

            <Button
              type="button"
              label={template.bookMarked ? "Bookmarked" : "Bookmark"}
              variant="outline"
              icon={
                <Bookmark
                  size={16}
                  fill={template.bookMarked ? "black" : "white"}
                />
              }
              customClass="w-full py-3"
              onClick={handleBookmark}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplatePreview;
