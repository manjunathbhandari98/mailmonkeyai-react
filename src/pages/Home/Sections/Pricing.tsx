import PricingCard from "../../../components/ui/PricingCard";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: 0,
      period: "/month",
      highlight: false,
      features: [
        "10 email generations per month",
        "3 tone options",
        "Basic templates",
        "Email history (7 days)",
        "Copy & export",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: 29,
      period: "/month",
      highlight: true,
      tag: "MOST POPULAR",
      features: [
        "Unlimited email generations",
        "All tone options",
        "Premium templates",
        "Unlimited history",
        "Priority support",
        "Team collaboration",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Business",
      price: 99,
      period: "/month",
      highlight: false,
      features: [
        "Everything in Pro",
        "Custom templates",
        "API access",
        "Advanced analytics",
        "White-label option",
        "Dedicated support",
      ],
      buttonText: "Get Started",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight">
        Simple, Transparent Pricing
      </h1>

      <h4 className="text-sm sm:text-base md:text-lg text-center mt-3 text-gray-500 max-w-2xl mx-auto">
        Choose the plan that fits your needs
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
