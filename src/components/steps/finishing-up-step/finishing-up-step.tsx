import { STEP, TOTAL_YEARLY_MONTHS } from "@/utils/enum";

import { useMultiStepForm } from "@/lib/multi-step-form-state";

import { StepWrapper } from "@/components/step-wrapper";

export const FinishingUpStep = () => {
  const { selectedPlan, addOns, goToStep } = useMultiStepForm((state) => ({
    selectedPlan: state.formData.selectedPlan,
    addOns: state.formData.addOns,

    goToStep: state.gotToStep,
  }));

  const isBillingMonthly = selectedPlan.billing === "monthly";

  const billingCopy = selectedPlan.billing === "monthly" ? "mo" : "yr";

  const formattedPlanPrice = isBillingMonthly
    ? selectedPlan.price
    : selectedPlan.price * TOTAL_YEARLY_MONTHS;

  const totalPrice =
    addOns.length > 0
      ? selectedPlan.price + addOns.map((addOn) => addOn.price).reduce((acc, curr) => acc + curr)
      : selectedPlan.price;

  const formattedTotalPrice = isBillingMonthly ? totalPrice : totalPrice * TOTAL_YEARLY_MONTHS;

  return (
    <StepWrapper
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div>
        <div className="bg-grey-lightest p-6 lg:px-6 rounded-lg">
          <div className="pb-3 mb-3 flex justify-between items-center border-b border-stroke-default">
            <div className="flex flex-col justify-start items-start">
              <span className="inline-block mb-1 text-sm lg:text-base text-denim font-medium capitalize">
                {selectedPlan.name} {`(${selectedPlan.billing})`}
              </span>

              <button
                className="text-sm text-grey-default hover:text-purple underline transition-colors duration-200"
                onClick={() => goToStep(STEP.SELECT_PLAN)}
              >
                Change
              </button>
            </div>

            <span className="text-sm lg:text-base text-denum font-bold">
              ${formattedPlanPrice}/{billingCopy}
            </span>
          </div>

          {addOns.length > 0 ? (
            <ul className="space-y-3">
              {addOns.map((addOn) => (
                <li key={addOn.identifier} className="flex justify-between items-center">
                  <span className="text-sm text-grey-default">{addOn.name}</span>

                  <span className="text-sm text-denim">
                    ${isBillingMonthly ? addOn.price : addOn.price * TOTAL_YEARLY_MONTHS}/
                    {billingCopy}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="pt-3 flex justify-center items-center">
              <span className="inline-block text-sm text-grey-default">No add-ons selected</span>
            </div>
          )}
        </div>

        <div className="mt-6 px-6 flex justify-between items-center">
          <span className="text-sm text-grey-default">
            Total {`(per ${isBillingMonthly ? "month" : "year"})`}
          </span>
          <span className="text-sm font-bold text-purple">
            +${formattedTotalPrice}/{billingCopy}
          </span>
        </div>
      </div>
    </StepWrapper>
  );
};
