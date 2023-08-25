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
    <StepWrapper onNextStep={handleUpdatePersonalInfo}>
      <div className="space-y-6">
        <TextInput
          label="Name"
          name="name"
          defaultValue={personalInfo.name}
          validations={{ required: "Name is required" }}
        />

        <TextInput
          label="Email"
          name="email"
          defaultValue={personalInfo.email}
          validations={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "This email is not valid" },
          }}
        />

        <TextInput
          type="tel"
          label="Phone Number"
          name="phoneNumber"
          defaultValue={personalInfo.phoneNumber}
          validations={{ required: "Phone number is required" }}
        />
      </div>
    </StepWrapper>
  );
};
