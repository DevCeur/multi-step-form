import type { AddOn } from "@/utils/types";

import { useMultiStepForm } from "@/lib/multi-step-form-state";
import Image from "next/image";
import { TOTAL_YEARLY_MONTHS } from "@/utils/enum";

type AddOnCheckboxInputProps = {
  addOn: AddOn;
};

export const AddOnCheckboxInput = ({ addOn }: AddOnCheckboxInputProps) => {
  const { planBilling, addOnsIdentifiers, updateAddOns } = useMultiStepForm((state) => ({
    planBilling: state.formData.selectedPlan.billing,
    addOnsIdentifiers: state.formData.addOns.map((addOn) => addOn.identifier),

    updateAddOns: state.updateAddOns,
  }));

  const formattedPrice =
    planBilling === "monthly" ? addOn.price : addOn.price * TOTAL_YEARLY_MONTHS;

  const isAddOnSelected = addOnsIdentifiers.includes(addOn.identifier);

  const handleChange = () => {
    if (isAddOnSelected) {
      updateAddOns({ removeAddOn: addOn.identifier });
    } else {
      updateAddOns({ newAddOn: addOn });
    }
  };

  return (
    <label
      className={`w-full px-4 lg:px-6 py-3 lg:py-4 flex items-center border ${
        isAddOnSelected ? "border-purple" : "border-stroke-default"
      } hover:border-purple rounded-lg transition-colors duration-200 cursor-pointer`}
    >
      <input
        hidden
        type="checkbox"
        name={addOn.identifier}
        value={addOn.identifier}
        onChange={handleChange}
        checked={isAddOnSelected}
      />

      <div
        className={`w-6 h-6 mr-4 lg:mr-6 flex justify-center items-center border rounded-md ${
          isAddOnSelected ? "bg-purple border-purple" : "bg-transparent border-stroke-default"
        } transition-colors duration-100`}
      >
        <Image width={12} height={12} src="/images/icon-checkmark.svg" alt="checkmark" />
      </div>

      <div className="flex-1 flex justify-between items-center">
        <div className="flex flex-col space-y-1">
          <span className="text-sm lg:text-base text-denim font-medium">{addOn.name}</span>
          <span className="text-xs lg:text-sm text-grey-default">{addOn.description}</span>
        </div>

        <span className="text-xs lg:text-sm text-purple">
          +${formattedPrice}/{planBilling === "monthly" ? "mo" : "yr"}
        </span>
      </div>
    </label>
  );
};
