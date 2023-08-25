export type PersonalInfo = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type Plan = {
  name: "arcade" | "advanced" | "pro";
  billing: "monthly" | "yearly";
};

export type AddOn = {
  name: string;
  price: number;
};
