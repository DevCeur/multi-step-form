import { FinishingUpStep } from "@/components/steps/finishing-up-step";
import { PersonalInfoStep } from "@/components/steps/personal-info-step";
import { PickAddOnsStep } from "@/components/steps/pick-add-ons-step";
import { SelectPlanStep } from "@/components/steps/select-plan-step";

export const MULTI_FORM_STEPS = [
  {
    identifier: "personal-info",
    shortTitle: "Your Info",
    component: PersonalInfoStep,
  },
  {
    identifier: "select-plan",
    shortTitle: "Select Plan",
    component: SelectPlanStep,
  },
  {
    identifier: "pick-add-ons",
    shortTitle: "Add-ons",
    component: PickAddOnsStep,
  },
  {
    identifier: "finishing-up",
    shortTitle: "Summary",
    component: FinishingUpStep,
  },
  {
    identifier: "thanks",
    component: SelectPlanStep,
  },
];

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
