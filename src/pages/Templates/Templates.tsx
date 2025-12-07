import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/layout/PageHeader";

// Icons (choose appropriate)
import {
  BarChart2,
  Briefcase,
  Building2,
  Mail,
  Megaphone,
  MessageCircle,
  Users,
} from "lucide-react";
import TemplateCard from "../../components/ui/TemplateCard";

// ------------------------------------------------------
// TEMPLATE CATEGORIES
// ------------------------------------------------------
const templateCategories = [
  {
    id: 1,
    title: "Job Application",
    slug: "job-application",
    count: 12,
    icon: <Briefcase />,
  },
  {
    id: 2,
    title: "Office Communication",
    slug: "office-communication",
    count: 18,
    icon: <Building2 />,
  },
  {
    id: 3,
    title: "Marketing",
    slug: "marketing",
    count: 15,
    icon: <Megaphone />,
  },
  { id: 4, title: "Sales", slug: "sales", count: 10, icon: <BarChart2 /> },
  {
    id: 5,
    title: "Cold Outreach",
    slug: "cold-outreach",
    count: 8,
    icon: <Mail />,
  },
  {
    id: 6,
    title: "HR Templates",
    slug: "hr-templates",
    count: 14,
    icon: <Users />,
  },
  {
    id: 7,
    title: "Customer Support",
    slug: "customer-support",
    count: 20,
    icon: <MessageCircle />,
  },
];

// ------------------------------------------------------
// ALL TEMPLATES DATA
// ------------------------------------------------------
const emailTemplates = [
  {
    templateId: 1,
    categoryId: 1,
    categoryName: "Job Application",
    templateSlug: "software-developer-application",
    title: "Job Application – Software Developer",
    preview: "I’m excited to apply for the Software Developer position...",
    subject: "Application for Software Developer Position",
    tone: "Professional",
    likes: 128,
    content: `Dear Hiring Manager,
I hope you're doing well...`,
  },
  {
    templateId: 2,
    categoryId: 1,
    categoryName: "Job Application",
    templateSlug: "cold-job-application",
    title: "Cold Job Application",
    preview: "I’m reaching out regarding potential roles...",
    subject: "Inquiry About Job Opportunities",
    tone: "Casual",
    likes: 96,
    content: `Hello, I hope you're doing well...`,
  },

  // (All other templates unchanged — keep your full list)
  // ---------------------------------------------------
  // Continue adding all templates from your file...
  // ---------------------------------------------------
];

// ------------------------------------------------------
// REACT COMPONENT
// ------------------------------------------------------
const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // COUNT TEMPLATES PER CATEGORY
  const getCategoryCount = (categoryId: number) => {
    return emailTemplates.filter((tpl) => tpl.categoryId === categoryId).length;
  };

  // FILTER ALL TEMPLATES
  const filteredTemplates = useMemo(() => {
    if (!searchTerm.trim()) return emailTemplates;

    return emailTemplates.filter(
      (tpl) =>
        tpl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tpl.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tpl.tone.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <>
      <PageHeader pageTitle="Email Templates" />

      <div className="pt-16 sm:pt-20 md:pt-28 max-w-7xl mx-auto px-4">
        {/* Page Heading */}
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Email Templates
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
            Choose from professionally crafted templates for every scenario
          </p>
        </div>

        {/* Categories */}
        <h2 className="font-bold text-lg sm:text-xl text-gray-900 mt-6 mb-3">
          Browse by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 my-5">
          {templateCategories.map((category) => (
            <Link
              key={category.id}
              to={`/templates/category/${category.slug}`}
              className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500
              transition-all cursor-pointer group flex gap-4 items-center"
            >
              {/* Icon circle */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl
                  bg-blue-500/90 text-white shadow-md group-hover:scale-105 transition-transform"
              >
                {category.icon}
              </div>

              {/* Text */}
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {category.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {getCategoryCount(category.id)} templates
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="my-6 w-full bg-white border border-gray-300 rounded-xl shadow-sm flex items-center gap-3 p-3">
          <input
            type="text"
            className="w-full bg-transparent outline-none text-gray-700 text-sm"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Templates Section */}
        <div className="my-10">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              All Templates
            </h2>
            <p className="text-gray-600 text-sm">
              {filteredTemplates.length} Templates Available
            </p>
          </div>

          {/* Template Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.templateId}
                title={template.title}
                categoryName={template.categoryName}
                tone={template.tone}
                preview={template.preview}
                likes={template.likes}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
