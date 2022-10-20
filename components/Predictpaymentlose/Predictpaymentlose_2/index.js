import React from "react";
import PredictPaymentLoseTwoLower from "./Lower_2";
import PredictPaymentLoseTwoUpper from "./Upper_2";

const index = ({ upper, lower }) => {
  //   console.log("upper", upper);

  return (
    <div>
      <div className="flex  flex-col-2">
        <div className="">
          <PredictPaymentLoseTwoUpper upper={upper} />
        </div>
        <PredictPaymentLoseTwoLower lower={lower} />
        <div className=""></div>
      </div>
    </div>
  );
};

export default index;
