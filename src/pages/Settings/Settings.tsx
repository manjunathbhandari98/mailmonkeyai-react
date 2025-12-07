import { useState } from "react";
import Button from "../../components/common/Button";
import SettingToggle from "../../components/common/SettingToggle";
import PageHeader from "../../components/layout/PageHeader";

const Settings = () => {
  // ----------------------
  // STATE
  // ----------------------
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john@mail.com");
  const [signature, setSignature] = useState(
    "Best regards,\nJohn Doe,\nSenior Developer"
  );

  const [defaultTone, setDefaultTone] = useState("professional");
  const [alwaysUseTone, setAlwaysUseTone] = useState(true);

  const [emailNotification, setEmailNotification] = useState(true);
  const [generationCompleteNotification, setGenerationCompleteNotification] =
    useState(true);
  const [weeklySummaryNotification, setWeeklySummaryNotification] =
    useState(false);

  const planInfo = {
    activePlan: "Pro Plan",
    price: "$29",
    period: "month",
    next_billing_date: "15 Feb 2025",
    payment_method: "Visa •••• 2440",
  };

  const apiInfo = {
    used: 3400,
    limit: 10000,
    resetDate: "1 Mar 2025",
    costPer1000: 0.03,
    keyMasked: "sk_live_***************9sd8",
  };

  // ----------------------
  // HANDLERS
  // ----------------------
  const onSave = () => {
    console.log("Saved Settings:", {
      firstName,
      lastName,
      email,
      signature,
      defaultTone,
      alwaysUseTone,
      emailNotification,
      generationCompleteNotification,
      weeklySummaryNotification,
    });
  };

  const onCancel = () => {
    console.log("Cancelled");
  };

  const logout = () => {
    console.log("Logged out");
  };

  const copyKey = () => {
    navigator.clipboard.writeText(apiInfo.keyMasked);
  };

  const regenerateKey = () => {
    console.log("Regenerate API Key");
  };

  return (
    <div>
      <PageHeader pageTitle="Settings" />

      <div className="pt-28 max-w-5xl mx-auto px-6">
        {/* Main Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Settings</h2>
          <p className="text-gray-500 text-lg mt-1">
            Manage your account and preferences
          </p>
        </div>

        {/* -------------------- PROFILE -------------------- */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">Profile</h3>

          {/* Avatar */}
          <div className="mt-5 flex items-center gap-6">
            <div className="w-20 h-20 flex items-center justify-center text-2xl font-bold text-white rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-md">
              {firstName[0]}
              {lastName[0]}
            </div>

            <div className="flex flex-col gap-2">
              <Button label="Change Photo" variant="outline" />
              <p className="text-xs text-gray-500">JPG or PNG, Max 2MB</p>
            </div>
          </div>

          {/* Form */}
          <form className="mt-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="font-medium text-gray-700">First Name</label>
                <input
                  className="p-3 rounded-xl outline-0 border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label className="font-medium text-gray-700">Last Name</label>
                <input
                  className="p-3 rounded-xl outline-0  border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 text-sm">
              <label className="font-medium text-gray-700">Email</label>
              <input
                className="p-3 rounded-xl outline-0 border border-gray-300 focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Signature */}
            <div className="flex flex-col gap-2 text-sm">
              <label className="font-medium text-gray-700">
                Email Signature
              </label>
              <textarea
                rows={4}
                className="p-3 rounded-xl outline-0 border border-gray-300 focus:ring-2 focus:ring-blue-500"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
              />
            </div>
          </form>
        </div>

        {/* -------------------- TONE PREFERENCES -------------------- */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mt-6">
          <h3 className="text-xl font-bold text-gray-900">Tone Preferences</h3>
          <p className="text-gray-500 text-sm mt-1">
            Set your default writing tone
          </p>

          <div className="flex flex-col gap-3 mt-5 text-sm">
            <label className="font-medium text-gray-700">Default Tone</label>

            <select
              className="p-3 rounded-xl border border-gray-300 bg-white"
              value={defaultTone}
              onChange={(e) => setDefaultTone(e.target.value)}
            >
              <optgroup label="Professional">
                <option value="professional">Professional</option>
                <option value="formal">Formal</option>
                <option value="business">Business</option>
                <option value="concise">Concise</option>
              </optgroup>

              <optgroup label="Friendly">
                <option value="friendly">Friendly</option>
                <option value="polite">Polite</option>
                <option value="casual">Casual</option>
              </optgroup>

              <optgroup label="Creative">
                <option value="enthusiastic">Enthusiastic</option>
                <option value="persuasive">Persuasive</option>
                <option value="storytelling">Storytelling</option>
              </optgroup>
            </select>
          </div>

          {/* Toggle Example */}
          <SettingToggle
            title="Always use default tone"
            description="Automatically apply your preferred tone"
            value={alwaysUseTone}
            onChange={setAlwaysUseTone}
          />
        </div>

        {/* -------------------- NOTIFICATIONS -------------------- */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mt-6">
          <h3 className="text-xl font-bold text-gray-900">Notifications</h3>

          <SettingToggle
            title="Email notifications"
            description="Receive updates via email"
            value={emailNotification}
            onChange={setEmailNotification}
          />

          <SettingToggle
            title="Generation complete"
            description="Notify when generation completes"
            value={generationCompleteNotification}
            onChange={setGenerationCompleteNotification}
          />

          <SettingToggle
            title="Weekly summary"
            description="Get weekly usage stats"
            value={weeklySummaryNotification}
            onChange={setWeeklySummaryNotification}
          />
        </div>

        {/* -------------------- BILLING -------------------- */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mt-6">
          <h3 className="text-xl font-bold text-gray-900">Billing</h3>
          <p className="text-gray-500 text-sm">Manage your subscription</p>

          {/* Active Banner */}
          <div className="mt-6 flex justify-between items-center bg-blue-50 p-4 rounded-xl border border-blue-100">
            <div>
              <h2 className="font-semibold text-gray-900 text-lg">
                {planInfo.activePlan}
              </h2>
              <p className="text-gray-600 text-sm">
                {planInfo.price}/{planInfo.period}
              </p>
            </div>

            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Active
            </span>
          </div>

          {/* Details */}
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <p className="text-gray-500">Next Billing Date</p>
              <p className="font-semibold">{planInfo.next_billing_date}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500">Payment Method</p>
              <p className="font-semibold">{planInfo.payment_method}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button label="Change Plan" variant="outline" />
            <Button label="Update Payment" />
          </div>
        </div>

        {/* -------------------- API USAGE -------------------- */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mt-6">
          <h3 className="text-xl font-bold text-gray-900">API Usage</h3>

          <div className="mt-6 space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <p className="text-gray-700 text-sm">Monthly API Requests</p>
                <p className="font-semibold text-sm">
                  {apiInfo.used} / {apiInfo.limit}
                </p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{
                    width: `${(apiInfo.used / apiInfo.limit) * 100}%`,
                  }}
                ></div>
              </div>

              <p className="text-xs text-gray-500 mt-1">
                Next reset: {apiInfo.resetDate}
              </p>
            </div>

            {/* Cost */}
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Cost per 1k requests</p>
              <p className="font-semibold">${apiInfo.costPer1000}</p>
            </div>
          </div>

          {/* API Key */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900">API Key</h4>
            <p className="text-gray-500 text-sm">Your secret API key</p>

            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl mt-3 border border-gray-300">
              <span className="font-mono text-gray-700 text-sm">
                {apiInfo.keyMasked}
              </span>

              <div className="flex gap-2">
                <Button label="Copy" variant="secondary" onClick={copyKey} />
                <Button label="Regenerate" onClick={regenerateKey} />
              </div>
            </div>
          </div>
        </div>

        {/* -------------------- SAVE / CANCEL -------------------- */}
        <div className="flex gap-4 mt-6">
          <Button label="Cancel" variant="secondary" onClick={onCancel} />
          <Button label="Save Changes" onClick={onSave} />
        </div>

        {/* -------------------- DANGER ZONE -------------------- */}
        <div className="bg-red-50 p-6 rounded-2xl shadow-sm border border-red-200 mt-10">
          <h3 className="text-xl font-bold text-red-700">Danger Zone</h3>
          <p className="text-red-500 text-sm">Permanent actions</p>

          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="font-semibold text-red-700">Logout</p>
              <p className="text-red-500 text-sm">Sign out from your account</p>
            </div>

            <Button label="Logout" variant="danger" onClick={logout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
