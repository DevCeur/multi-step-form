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

export const PLANS = [
  { iconUrl: "/images/icon-arcade.svg", identifier: "arcade", name: "Arcade", price: 9 },
  { iconUrl: "/images/icon-advanced.svg", identifier: "advanced", name: "Advanced", price: 12 },
  { iconUrl: "/images/icon-pro.svg", identifier: "pro", name: "Pro", price: 15 },
];

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
