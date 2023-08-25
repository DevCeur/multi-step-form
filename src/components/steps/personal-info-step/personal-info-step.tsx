import { TextInput } from "@/components/text-input";

export const PersonalInfoStep = () => {
  return (
    <div className="space-y-6">
      <TextInput label="Name" name="name" />

      <TextInput label="Email" name="email" />

      <TextInput label="Phone Number" name="phoneNumber" />
    </div>
  );
};
