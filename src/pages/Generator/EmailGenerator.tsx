import { zodResolver } from "@hookform/resolvers/zod";
import { Copy, Download, Save, Sparkles, WandSparkles } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../../components/common/Button";
import PageHeader from "../../components/layout/PageHeader";
import { useToast } from "../../hooks/useToast";
import { generateEmail } from "../../services/emailService";

const emailGenerationSchema = z.object({
  receiver: z.string().min(1, "Receiver is required"),
  sender: z.string().min(1, "Sender is required"),
  emailType: z.string().min(1, "Email Type is required"),
  tone: z.string().min(1, "Tone is required"),
  subject: z.string().optional(),
  content: z.string().min(1, "Content is required"),
});

export type EmailGenerationFormData = z.infer<typeof emailGenerationSchema>;

const EmailGenerator = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<EmailGenerationFormData>({
    resolver: zodResolver(emailGenerationSchema),
    mode: "onTouched",
  });
  const toast = useToast();

  const [generatedEmail, setGeneratedEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const clearForm = () => {
    reset();
    setGeneratedEmail("");
  };

  const onCopy = () => {
    if (!generatedEmail) return;
    navigator.clipboard.writeText(generatedEmail);
    toast.show("success", "Email copied to clipboard");
  };

  const onDownload = () => {
    if (!generatedEmail) return;

    const blob = new Blob([generatedEmail], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "email.txt";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  const onGenerateAgain = () => {
    if (lastFormDataRef.current) {
      onSubmit(lastFormDataRef.current);
    }
  };

  // Store last form input so regenerate works
  const lastFormDataRef = useRef<EmailGenerationFormData | null>(null);

  const onSave = () => {
    console.log("Saved:", generatedEmail);
  };

  const onSubmit = async (data: EmailGenerationFormData) => {
    try {
      setIsGenerating(true);
      const res = await generateEmail(data);
      setGeneratedEmail(res);
      toast.show("success", "Email Generated Successfully");
    } catch (error) {
      console.error("Failed to Generate Email", error);
      setIsGenerating(false);
    }
  };

  return (
    <>
      <PageHeader pageTitle="Generate Email" />

      <div className="pt-15 md:pt-28 max-w-full md:max-w-7xl md:mx-auto md:px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* --------------------------------------
              LEFT SIDE — FORM
        -------------------------------------- */}
        <div className="bg-white border w-full border-gray-200 md:shadow-sm md:rounded-2xl p-5 sm:p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Email Context
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 sm:gap-6 text-sm"
          >
            {/* RECEIVER */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-700">Receiver Name</label>
              <input
                type="text"
                className="p-2.5 sm:p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Hiring Manager"
                {...register("receiver")}
              />
              {touchedFields.receiver && errors.receiver && (
                <p className="text-red-600 text-xs">
                  {errors.receiver.message}
                </p>
              )}
            </div>

            {/* SENDER */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-700">Sender Name</label>
              <input
                type="text"
                className="p-2.5 sm:p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="John Doe"
                {...register("sender")}
              />
              {touchedFields.sender && errors.sender && (
                <p className="text-red-600 text-xs">{errors.sender.message}</p>
              )}
            </div>

            {/* EMAIL TYPE */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-700">Email Type</label>
              <select
                className="p-2.5 sm:p-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                {...register("emailType")}
              >
                <option value="">Select Type</option>
                <option value="jobApplication">Job Application</option>
                <option value="follow-up">Follow-Up</option>
                <option value="proposal">Proposal</option>
                <option value="apology">Apology</option>
                <option value="networking">Networking</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            {/* TONE */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-700">Tone</label>
              <select
                {...register("tone")}
                className="p-2.5 sm:p-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Tone</option>

                <optgroup label="Professional">
                  <option value="professional">Professional</option>
                  <option value="formal">Formal</option>
                  <option value="concise">Concise</option>
                </optgroup>

                <optgroup label="Friendly">
                  <option value="friendly">Friendly</option>
                  <option value="polite">Polite</option>
                  <option value="casual">Casual</option>
                </optgroup>

                <optgroup label="Creative">
                  <option value="enthusiastic">Enthusiastic</option>
                  <option value="storytelling">Storytelling</option>
                </optgroup>
              </select>
            </div>

            {/* SUBJECT */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-700">
                Subject{" "}
                <span className="text-gray-500 text-xs">(Optional)</span>
              </label>
              <input
                type="text"
                {...register("subject")}
                className="p-2.5 sm:p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Application for Developer Position"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-700">Content</label>
              <textarea
                rows={4}
                className="p-2.5 sm:p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="• 5 years experience&#10;• Strong backend skills&#10;• Interested in the role"
                {...register("content")}
              ></textarea>
              {touchedFields.content && errors.content && (
                <p className="text-red-600 text-xs">{errors.content.message}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full">
              <div className="w-2/3">
                <Button
                  label="Generate Email"
                  loading={isGenerating}
                  loadingText="Generating..."
                  icon={<Sparkles />}
                  customClass="w-full px-2 py-3"
                  type="submit"
                />
              </div>
              <div className="w-1/3">
                <Button
                  label="Clear"
                  variant="outline"
                  customClass="w-full px-2 py-3"
                  onClick={clearForm}
                />
              </div>
            </div>
          </form>
        </div>

        {/* --------------------------------------
              RIGHT SIDE — GENERATED EMAIL
        -------------------------------------- */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5 sm:p-8 text-sm">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-10">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Generated Email
            </h1>

            <div className="flex items-center justify-between gap-4 text-gray-600">
              <Copy
                onClick={onCopy}
                className="cursor-pointer hover:text-black"
              />
              <Download
                onClick={onDownload}
                className="cursor-pointer hover:text-black"
              />
              <WandSparkles
                onClick={onGenerateAgain}
                className="cursor-pointer hover:text-black"
              />
              <Save
                onClick={onSave}
                className="cursor-pointer hover:text-black"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">Email Content</label>
            <textarea
              rows={24}
              className="p-4 text-sm leading-6 border border-gray-300 rounded-xl bg-white roboto-serif focus:ring-2 focus:ring-blue-500 outline-none"
              value={generatedEmail}
              readOnly
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
            <Button
              label="Copy Email"
              icon={<Copy />}
              customClass="w-full py-3"
              onClick={onCopy}
            />
            <Button
              label="Download"
              variant="outline"
              icon={<Download />}
              customClass="w-full py-3"
              onClick={onDownload}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailGenerator;
