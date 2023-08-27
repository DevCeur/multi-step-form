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
    <div className="w-full bg-grey-lightest py-4 flex justify-center items-center space-x-6 rounded-lg">
      <span
        className={`text-sm ${
          selectedPlan.billing === "monthly" ? "text-denim" : "text-grey-default"
        }`}
      >
        Monthly
      </span>

      <label>
        <div
          className={`w-12 h-6 px-1 bg-denim flex ${
            selectedPlan.billing === "monthly" ? "justify-start" : "justify-end"
          } items-center rounded-full cursor-pointer`}
        >
          <span className="inline-block w-4 h-4 bg-white rounded-full" />
        </div>

        <input
          hidden
          type="checkbox"
          name="selectedPlanBilling"
          value={selectedPlan.billing}
          checked={selectedPlan.billing === "monthly"}
          onChange={handleSelectPlanBilling}
        />
      </label>

      <span
        className={`text-sm ${
          selectedPlan.billing === "yearly" ? "text-denim" : "text-grey-default"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};
