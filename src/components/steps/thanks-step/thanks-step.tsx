import Image from "next/image";

import { StepWrapper } from "@/components/step-wrapper";

export const ThanksStep = () => {
  return (
    <StepWrapper>
      <div className="py-20 flex flex-col justify-center items-center">
        <div className="relative w-14 lg:w-20 h-14 lg:h-20 mb-6 lg:mb-8">
          <Image
            src="/images/icon-thank-you.svg"
            layout="fill"
            style={{ objectFit: "contain" }}
            alt="thanks icon"
          />
        </div>

        <h2 className="mb-2 lg:mb-4 text-2xl lg:text-4xl text-denim font-bold text-center">
          Thank you!
        </h2>

        <p className="text-grey-default text-center">
          Thanks for confirming your subscription! We hope you have fun using our
          platform. If you ever need support, please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </StepWrapper>
  );
};
