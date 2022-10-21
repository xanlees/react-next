import React from "react";
import PredictPaymentLoseTwoLower from "./Lower_2";
import PredictPaymentLoseTwoUpper from "./Upper_2";

const index = ({ upper, lower }) => {
  return (
    <div>
      <div className="flex  flex-col-2">
        <div className="w-full">
          <PredictPaymentLoseTwoUpper upper={upper} />
        </div>
        <div className=" w-full">
          <PredictPaymentLoseTwoLower lower={lower} />
        </div>
      </div>
    </div>
  );
};

export default index;
