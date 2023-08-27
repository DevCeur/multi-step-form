export type PersonalInfo = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type Plan = {
  name: string;
  identifier: "arcade" | "advanced" | "pro";
  billing: "monthly" | "yearly";
  price: number;
};

export type AddOn = {
  name: string;
  identifier: string;
  description: string;
  price: number;
};
