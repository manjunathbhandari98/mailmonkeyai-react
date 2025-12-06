/* eslint-disable @typescript-eslint/no-unused-vars */
import { Check } from "lucide-react";
import type { PricingPlan } from "../../types";
import Button from "../common/Button";

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const getButtonClass = () => {
    return "mt-6 font-semibold w-full py-3 px-4 rounded-xl transition";
  };

  const getVariant = () => {
    return plan.highlight ? "primary" : "outline";
  };

  const onPlanSelected = () => {
    console.log(`${plan.name} plan selected`);
  };

  return (
    <div
      className={`bg-white my-6 sm:my-10 relative p-5 sm:p-6 rounded-2xl flex flex-col justify-between w-full transition-all duration-300 ${
        plan.highlight
          ? "border-blue-600 shadow-2xl scale-[1.03]"
          : "border-transparent shadow-md hover:shadow-lg"
      }`}
    >
      {plan.highlight && plan.tag && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            {plan.tag}
          </span>
        </div>
      )}

      <div className="header text-center mb-4">
        <h1 className="font-extrabold text-2xl sm:text-3xl">{plan.name}</h1>

        <h2 className="font-extrabold text-4xl sm:text-5xl text-blue-600 mt-2 flex justify-center items-end gap-1">
          ${plan.price}
          <span className="text-gray-500 font-medium text-sm sm:text-base">
            {plan.period}
          </span>
        </h2>
      </div>

      <ul className="space-y-3 sm:space-y-4 text-gray-900 text-sm sm:text-base mt-4 px-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <Check className="mt-1" /> <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button
          label={plan.buttonText}
          customClass={`${getButtonClass()} !text-sm sm:!text-base`}
          variant={getVariant()}
          onClick={onPlanSelected}
        />
      </div>
    </div>
  );
};

export default PricingCard;
