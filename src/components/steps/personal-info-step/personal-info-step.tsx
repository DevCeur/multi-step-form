import { EMAIL_REGEX } from "@/utils/enum";

import { useWizardState } from "@/lib/wizard-state";

import { TextInput } from "@/components/text-input";
import { StepWrapper } from "@/components/step-wrapper";

export const PersonalInfoStep = () => {
  const { updatePersonalInfo, personalInfo } = useWizardState((state) => ({
    personalInfo: state.formData.personalInfo,
    updatePersonalInfo: state.updatePersonalInfo,
  }));

  const handleUpdatePersonalInfo = (data: any) => {
    updatePersonalInfo(data);
  };

  return (
    <StepWrapper
      title="Personal Info"
      description="Please provide your name, email address, and phone number."
      onNextStep={handleUpdatePersonalInfo}
    >
      <div className="space-y-6">
        <TextInput
          label="Name"
          name="name"
          placeholder="e.g. Stephen King"
          defaultValue={personalInfo.name}
          validations={{ required: "Name is required" }}
        />

        <TextInput
          label="Email"
          name="email"
          defaultValue={personalInfo.email}
          placeholder="e.g. stephenking@lorem.com"
          validations={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "This email is not valid" },
          }}
        />

        <TextInput
          type="tel"
          label="Phone Number"
          name="phoneNumber"
          placeholder="e.g. +1 234 567 789"
          defaultValue={personalInfo.phoneNumber}
          validations={{ required: "Phone number is required" }}
        />
      </div>
    </StepWrapper>
  );
};
