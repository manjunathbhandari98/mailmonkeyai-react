/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BarChart2,
  Briefcase,
  Building2,
  Mail,
  Megaphone,
  MessageCircle,
  Users,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/common/Loader/Loader";
import PageHeader from "../../components/layout/PageHeader";
import TemplateCard from "../../components/ui/TemplateCard";
import { useToast } from "../../hooks/useToast";
import { getTemplates } from "../../services/templateService";

// ------------------------------------------
// STATIC CATEGORIES
// ------------------------------------------
const templateCategories = [
  { id: "jobApplication", title: "Job Application", icon: <Briefcase /> },
  { id: "office", title: "Office Communication", icon: <Building2 /> },
  { id: "marketing", title: "Marketing", icon: <Megaphone /> },
  { id: "sales", title: "Sales", icon: <BarChart2 /> },
  { id: "cold-outreach", title: "Cold Outreach", icon: <Mail /> },
  { id: "hr", title: "HR Templates", icon: <Users /> },
  {
    id: "customer-support",
    title: "Customer Support",
    icon: <MessageCircle />,
  },
];

const Templates = () => {
  const toast = useToast();

  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch templates from backend
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        setLoading(true);
        const res = await getTemplates();
        setTemplates(res.data);
      } catch (err) {
        console.error(err);
        toast.show("error", "Failed to load templates");
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  // Count templates inside each category
  const getCategoryCount = (category: string) => {
    return templates.filter((tpl) => tpl.type === category).length;
  };

  // Filter templates by search bar
  const filteredTemplates = useMemo(() => {
    if (!searchTerm.trim()) return templates;

    return templates.filter(
      (tpl) =>
        tpl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tpl.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tpl.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, templates]);

  if (loading) return <Loader />;

  return (
    <>
      <PageHeader pageTitle="Email Templates" />

      <div className="pt-16 sm:pt-20 md:pt-28 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Email Templates
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
            Choose from professionally crafted templates for every scenario
          </p>
        </div>

        {/* Categories */}
        <h2 className="font-bold text-lg sm:text-xl mt-6 mb-3 text-gray-900">
          Browse by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
          {templateCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/templates/category/${cat.id}`}
              className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500 transition-all flex gap-4 items-center cursor-pointer group"
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl
                bg-blue-500/90 text-white shadow-md group-hover:scale-105 transition-transform"
              >
                {cat.icon}
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {cat.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {getCategoryCount(cat.id)} templates
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Search */}
        <div className="my-6 bg-white border border-gray-300 rounded-xl shadow-sm flex items-center gap-3 p-3">
          <input
            type="text"
            className="w-full outline-none bg-transparent text-sm"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Templates Grid */}
        <div className="my-10">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              All Templates
            </h2>
            <p className="text-gray-600 text-sm">
              {filteredTemplates.length} Templates Available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredTemplates.map((tpl) => (
              <Link key={tpl.id} to={`/templates/${tpl.id}`}>
                <TemplateCard
                  title={tpl.title}
                  categoryName={tpl.type}
                  tone={tpl.tone}
                  preview={tpl.content.slice(0, 120) + "..."}
                  likes={tpl.likes}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
