import { CheckCircle, Copy, Download, Sparkles } from "lucide-react";
import { useState } from "react";
import Button from "../../components/common/Button";
import PageHeader from "../../components/layout/PageHeader";

const improvementOptions = [
  { id: "professional", label: "Make it Professional" },
  { id: "friendly", label: "Make it Friendlier" },
  { id: "polite", label: "Make it More Polite" },
  { id: "formal", label: "Make it More Formal" },

  { id: "shorter", label: "Make it Shorter" },
  { id: "longer", label: "Make it Longer" },
  { id: "concise", label: "Make it More Concise" },
  { id: "detailed", label: "Add More Details" },

  { id: "grammar", label: "Fix Grammar" },
  { id: "simple", label: "Simplify the Language" },

  { id: "enthusiastic", label: "Make it Enthusiastic" },
  { id: "persuasive", label: "Make it More Persuasive" },
  { id: "active", label: "Rewrite in Active Voice" },
  { id: "passive", label: "Rewrite in Passive Voice" },

  { id: "humanize", label: "Make it More Human-like" },
  { id: "empathy", label: "Add Empathy" },
];

const ImproveEmail = () => {
  const [originalEmail, setOriginalEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // ----------------------------
  // VALIDATION
  // ----------------------------
  const errorMessage = (() => {
    const trimmed = originalEmail.trim();
    if (!trimmed) return "Email cannot be empty.";
    if (trimmed.length < 30) return "Email must be at least 30 characters.";
    return "";
  })();

  const isInvalid = errorMessage !== "";

  {
    /*  Improve email  */
  }
  const improveEmail = async () => {
    if (isInvalid || !selectedOption) return;

    setIsGenerating(true);

    try {
      // TODO: Replace with your API call
      // const response = await improveEmailAPI({ originalEmail, improvementType: selectedOption });

      const mockResponse = `
Improved (${selectedOption}):

${originalEmail}

---

This email has been enhanced using MailMonkey AI
      `.trim();

      setTimeout(() => {
        setGeneratedEmail(mockResponse);
        setIsGenerating(false);
      }, 800);
    } catch (err) {
      console.error(err);
      setIsGenerating(false);
    }
  };

  {
    /*  Copy Email  */
  }
  const copyEmail = () => {
    navigator.clipboard.writeText(generatedEmail);
  };

  {
    /*  Download Email  */
  }
  const downloadEmail = () => {
    const blob = new Blob([generatedEmail], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "improved-email.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageHeader pageTitle="Improve Your Email" />

      <div className="pt-16 sm:pt-20 md:pt-28 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* LEFT PANEL */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5 sm:p-8">
          <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">
            Your Email
          </h1>

          <textarea
            value={originalEmail}
            onChange={(e) => setOriginalEmail(e.target.value)}
            rows={10}
            className="w-full p-4 sm:p-5 text-sm leading-6 rounded-2xl border border-gray-300
            focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 resize-none"
            placeholder="Paste or write your email here..."
          ></textarea>

          {isInvalid && (
            <p className="text-red-600 text-xs mt-2">{errorMessage}</p>
          )}

          {/* DROPDOWN */}
          <div className="relative my-4 select-none">
            <button
              onClick={() => setShowDropdown((v) => !v)}
              className="border border-gray-300 bg-white rounded-xl p-3 w-full flex justify-between
              items-center text-sm font-medium hover:border-gray-400 transition-all"
            >
              <span className="text-gray-700">
                {selectedOption
                  ? improvementOptions.find((o) => o.id === selectedOption)
                      ?.label
                  : "Select an improvement..."}
              </span>

              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 9l6 6 6-6" strokeWidth="2" />
              </svg>
            </button>

            {showDropdown && (
              <div
                className="absolute top-full left-0 right-0 z-20 mt-2 p-1 bg-white border border-gray-200 
              rounded-xl shadow-lg animate-fade-in"
              >
                {improvementOptions.map((option) => (
                  <div
                    key={option.id}
                    className="px-4 py-2.5 rounded-lg cursor-pointer hover:bg-gray-100 text-sm text-gray-700
                    transition-colors"
                    onClick={() => {
                      setSelectedOption(option.id);
                      setShowDropdown(false);
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button
            label="Improve Email"
            loading={isGenerating}
            loadingText="Generating..."
            icon={<Sparkles />}
            disabled={isInvalid || !selectedOption}
            customClass="w-full py-3 bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 rounded-xl"
            onClick={improveEmail}
          />
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5 sm:p-8 text-sm">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Improved Email
              </h1>

              <span className="text-green-600 text-xs font-semibold px-2 py-1 rounded-full bg-green-100 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Enhanced
              </span>
            </div>
          </div>

          {/* IMPROVED TEXT */}
          <div className="flex flex-col gap-1 my-4">
            <textarea
              rows={10}
              className="p-4 sm:p-5 text-sm roboto-serif leading-7 border border-gray-300 rounded-xl bg-white roboto-serif
              focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              value={generatedEmail}
              readOnly
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
            <Button
              label="Copy Email"
              icon={<Copy />}
              customClass="w-full py-3"
              onClick={copyEmail}
            />

            <Button
              label="Download"
              icon={<Download />}
              variant="outline"
              customClass="w-full py-3 font-semibold hover:bg-gray-100"
              onClick={downloadEmail}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImproveEmail;
