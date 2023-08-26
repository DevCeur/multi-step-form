import type { ChangeEvent } from "react";

import { useMultiStepForm } from "@/lib/multi-step-form-state";

export const SelectPlanBillingInput = () => {
  const { selectedPlan, updateSelectedPlan } = useMultiStepForm((state) => ({
    selectedPlan: state.formData.selectedPlan,
    updateSelectedPlan: state.updateSelectedPlan,
  }));

  const handleSelectPlanBilling = (e: ChangeEvent<HTMLInputElement>) => {
    updateSelectedPlan({
      identifier: selectedPlan.identifier,
      billing: e.target.checked ? "monthly" : "yearly",
    });
  };

  return (
    <div className="w-full flex justify-center items-center space-x-6">
      <span
        className={`text-sm ${
          selectedPlan.billing === "monthly" ? "text-denim font-medium" : "text-grey-default"
        }`}
      >
        Monthly
      </span>

      <label>
        <div>click me</div>

        <input
          type="checkbox"
          name="selectedPlanBilling"
          value={selectedPlan.billing}
          checked={selectedPlan.billing === "monthly"}
          onChange={handleSelectPlanBilling}
        />
      </label>

      <span
        className={`text-sm ${
          selectedPlan.billing === "yearly" ? "text-denim font-medium" : "text-grey-default"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};
