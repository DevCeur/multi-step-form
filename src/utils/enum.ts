import { FinishingUpStep } from "@/components/steps/finishing-up-step";
import { PersonalInfoStep } from "@/components/steps/personal-info-step";
import { PickAddOnsStep } from "@/components/steps/pick-add-ons-step";
import { SelectPlanStep } from "@/components/steps/select-plan-step";

export const STEP = {
  PERSONAL_INFO: "personal-info",
  SELECT_PLAN: "select-plan",
  PICK_ADD_ONS: "pick-add-ons",
  FINISHING_UP: "finishing-up",
  THANKS: "thanks",
};

export const FORM_STEPS = [
  {
    identifier: STEP.PERSONAL_INFO,
    shortTitle: "Your Info",
    component: PersonalInfoStep,
  },
  {
    identifier: STEP.SELECT_PLAN,
    shortTitle: "Select Plan",
    component: SelectPlanStep,
  },
  {
    identifier: STEP.PICK_ADD_ONS,
    shortTitle: "Add-ons",
    component: PickAddOnsStep,
  },
  {
    identifier: STEP.FINISHING_UP,
    shortTitle: "Summary",
    component: FinishingUpStep,
  },
  {
    identifier: STEP.THANKS,
    component: SelectPlanStep,
  },
];

export const PLANS = [
  { iconUrl: "/images/icon-arcade.svg", identifier: "arcade", name: "Arcade", price: 9 },
  { iconUrl: "/images/icon-advanced.svg", identifier: "advanced", name: "Advanced", price: 12 },
  { iconUrl: "/images/icon-pro.svg", identifier: "pro", name: "Pro", price: 15 },
];

export const ADD_ONS = [
  {
    identifier: "online-service",
    name: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    identifier: "larger-storage",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    identifier: "customizable-profile",
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];

export const TOTAL_YEARLY_MONTHS = 10;

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
